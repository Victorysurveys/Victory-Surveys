/**
 * Centralised form submission utility.
 * WordPress port: replace with a wp_ajax / REST-API POST handler.
 */

import { supabase } from "@/integrations/supabase/client";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  surveyType?: string;
  propertyAddress?: string;
  source: string;
  [key: string]: string | undefined;
}

export interface QuoteFormData {
  surveyType: string;
  fullName: string;
  email: string;
  phone: string;
  yourAddress: string;
  propertyAddress: string;
  propertyType?: string;
  propertyPrice?: string;
  numberOfBedrooms?: string;
  agentName?: string;
  agentPhone?: string;
  agentEmail?: string;
  vendorName?: string;
  additionalInfo?: string;
}

/**
 * Submit a contact / enquiry form.
 * WP port: POST to /wp-json/victory/v1/contact
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  const id = crypto.randomUUID();
  await supabase.functions.invoke("send-transactional-email", {
    body: {
      templateName: "contact-enquiry",
      recipientEmail: "info@victorysurveys.co.uk",
      idempotencyKey: `contact-${id}`,
      templateData: data,
    },
  });
}

/**
 * Submit the full quote-request form.
 * WP port: POST to /wp-json/victory/v1/quote
 */
export async function submitQuoteForm(data: QuoteFormData): Promise<void> {
  const id = crypto.randomUUID();
  await supabase.functions.invoke("send-transactional-email", {
    body: {
      templateName: "quote-request",
      recipientEmail: "info@victorysurveys.co.uk",
      idempotencyKey: `quote-${id}`,
      templateData: data,
    },
  });
}
