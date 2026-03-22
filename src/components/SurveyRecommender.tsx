import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Loader2, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/survey-recommender`;

const SURVEY_MAP: Record<string, string> = {
  "Home Buyer / Condition Survey": "Home Buyer / Condition Survey",
  "Building Survey": "Building Survey",
  "Buy To Let Survey": "Buy To Let Survey",
  "New-build Snagging Inspection": "New-build Snagging Inspection",
  "Property Consultancy": "Property Consultancy",
};

interface SurveyRecommenderProps {
  onRecommend?: (surveyType: string) => void;
}

const SurveyRecommender = ({ onRecommend }: SurveyRecommenderProps) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedSurvey, setRecommendedSurvey] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      sendToAI([]);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendToAI = async (conversationHistory: Msg[]) => {
    setIsLoading(true);
    let assistantSoFar = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: conversationHistory }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error("Failed to connect");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      const updateAssistant = (content: string) => {
        assistantSoFar += content;
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant") {
            return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
          }
          return [...prev, { role: "assistant", content: assistantSoFar }];
        });
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) updateAssistant(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Check for recommendation
      const match = assistantSoFar.match(/RECOMMENDED_SURVEY:(.+)/);
      if (match) {
        const surveyName = match[1].trim();
        if (SURVEY_MAP[surveyName]) {
          setRecommendedSurvey(surveyName);
        }
        // Clean up the display message
        setMessages((prev) =>
          prev.map((m, i) =>
            i === prev.length - 1
              ? { ...m, content: m.content.replace(/\n?RECOMMENDED_SURVEY:.+/, "") }
              : m
          )
        );
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again or contact us directly at Info@victorysurveying.co.uk" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Msg = { role: "user", content: input.trim() };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput("");
    sendToAI(newHistory);
  };

  const handleGetQuote = () => {
    if (recommendedSurvey && onRecommend) {
      onRecommend(recommendedSurvey);
    }
    setOpen(false);
    setTimeout(() => {
      document.getElementById("quote-request")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleReset = () => {
    setMessages([]);
    setRecommendedSurvey(null);
    setInput("");
    sendToAI([]);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        if (!val) {
          setMessages([]);
          setRecommendedSurvey(null);
          setInput("");
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
        >
          <MessageCircle className="w-5 h-5" />
          Not sure? Let us help
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[85vh] flex flex-col p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Survey Advisor
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Answer a few quick questions and we'll recommend the right survey for you.
          </p>
        </DialogHeader>

        {/* Chat Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-4 min-h-[300px] max-h-[400px]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-secondary text-foreground rounded-bl-md"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div className="prose prose-sm max-w-none [&>p]:m-0">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
            <div className="flex justify-start">
              <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
        </div>

        {/* Recommendation CTA */}
        {recommendedSurvey && (
          <div className="px-6 py-3 bg-primary/10 border-t border-primary/20">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-foreground">
                Recommended: <span className="text-primary font-bold">{recommendedSurvey}</span>
              </p>
              <Button onClick={handleGetQuote} size="sm" className="gap-2 shrink-0">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="px-6 py-4 border-t border-border">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your answer..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
          {messages.length > 2 && (
            <button
              onClick={handleReset}
              className="text-xs text-muted-foreground hover:text-foreground mt-2 underline"
            >
              Start over
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyRecommender;
