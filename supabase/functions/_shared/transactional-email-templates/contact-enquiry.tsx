import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Victory Surveys"

interface ContactEnquiryProps {
  name?: string
  email?: string
  phone?: string
  surveyType?: string
  propertyAddress?: string
  message?: string
  source?: string
}

const ContactEnquiryEmail = (props: ContactEnquiryProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New enquiry from {props.name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Enquiry</Heading>
        {props.source && <Text style={sourceTag}>Source: {props.source}</Text>}
        <Hr style={hr} />
        <Text style={text}><strong>Name:</strong> {props.name || '—'}</Text>
        <Text style={text}><strong>Email:</strong> {props.email || '—'}</Text>
        <Text style={text}><strong>Phone:</strong> {props.phone || '—'}</Text>
        {props.surveyType && (
          <Text style={text}><strong>Interested in:</strong> {props.surveyType}</Text>
        )}
        {props.propertyAddress && (
          <Text style={text}><strong>Property Address:</strong> {props.propertyAddress}</Text>
        )}
        {props.message && (
          <>
            <Hr style={hr} />
            <Heading as="h2" style={h2}>Message</Heading>
            <Text style={text}>{props.message}</Text>
          </>
        )}
        <Hr style={hr} />
        <Text style={footer}>This email was sent from the {SITE_NAME} website.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactEnquiryEmail,
  subject: (data: Record<string, any>) => `Enquiry from ${data.name || 'Website Visitor'}`,
  to: 'info@victorysurveys.co.uk',
  displayName: 'Contact enquiry notification',
  previewData: {
    name: 'John Smith',
    email: 'john@example.com',
    phone: '07700 900000',
    surveyType: 'Home Buyer / Condition Survey',
    propertyAddress: '25 Beach Road, Great Yarmouth, NR30 3AB',
    message: 'I would like to know more about your survey services.',
    source: 'Get in Touch form',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Montserrat', Arial, sans-serif" }
const container = { padding: '20px 25px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1a1a1a', margin: '0 0 20px' }
const h2 = { fontSize: '16px', fontWeight: '600' as const, color: '#b5914a', margin: '0 0 10px' }
const text = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0 0 8px' }
const sourceTag = { fontSize: '12px', color: '#b5914a', fontWeight: '600' as const, margin: '0 0 4px' }
const hr = { borderColor: '#e5e5e5', margin: '16px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0' }
