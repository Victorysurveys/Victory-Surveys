import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "valid" | "already" | "invalid" | "success" | "error">("loading");

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }
    const validate = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } }
        );
        const data = await res.json();
        if (res.ok && data.valid) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch { setStatus("invalid"); }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    setStatus("loading");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
      if (error) throw error;
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Email Preferences</h1>
        {status === "loading" && <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />}
        {status === "valid" && (
          <>
            <p className="text-muted-foreground">Click below to unsubscribe from future emails.</p>
            <Button onClick={handleUnsubscribe} className="w-full">Confirm Unsubscribe</Button>
          </>
        )}
        {status === "success" && (
          <div className="space-y-3">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <p className="text-foreground font-medium">You have been unsubscribed.</p>
          </div>
        )}
        {status === "already" && (
          <div className="space-y-3">
            <CheckCircle className="w-12 h-12 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground">You are already unsubscribed.</p>
          </div>
        )}
        {status === "invalid" && (
          <div className="space-y-3">
            <XCircle className="w-12 h-12 text-destructive mx-auto" />
            <p className="text-muted-foreground">This unsubscribe link is invalid or expired.</p>
          </div>
        )}
        {status === "error" && (
          <div className="space-y-3">
            <XCircle className="w-12 h-12 text-destructive mx-auto" />
            <p className="text-muted-foreground">Something went wrong. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
