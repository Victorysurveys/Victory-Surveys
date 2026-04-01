import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Victory Surveys"

interface QuoteRequestProps {
  surveyType?: string
  fullName?: string
  email?: string
  phone?: string
  yourAddress?: string
  propertyAddress?: string
  propertyType?: string
  propertyPrice?: string
  numberOfBedrooms?: string
  agentName?: string
  agentPhone?: string
  agentEmail?: string
  vendorName?: string
  additionalInfo?: string
}

const QuoteRequestEmail = (props: QuoteRequestProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New quote request from {props.fullName || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Quote Request</Heading>
        <Text style={text}><strong>Survey Type:</strong> {props.surveyType || 'Not specified'}</Text>
        <Hr style={hr} />
        <Heading as="h2" style={h2}>Customer Details</Heading>
        <Text style={text}><strong>Name:</strong> {props.fullName || '—'}</Text>
        <Text style={text}><strong>Email:</strong> {props.email || '—'}</Text>
        <Text style={text}><strong>Phone:</strong> {props.phone || '—'}</Text>
        <Text style={text}><strong>Address:</strong> {props.yourAddress || '—'}</Text>
        <Hr style={hr} />
        <Heading as="h2" style={h2}>Property Details</Heading>
        <Text style={text}><strong>Property Address:</strong> {props.propertyAddress || '—'}</Text>
        <Text style={text}><strong>Type:</strong> {props.propertyType || '—'}</Text>
        <Text style={text}><strong>Price:</strong> {props.propertyPrice || '—'}</Text>
        <Text style={text}><strong>Bedrooms:</strong> {props.numberOfBedrooms || '—'}</Text>
        <Hr style={hr} />
        <Heading as="h2" style={h2}>Agent / Vendor</Heading>
        <Text style={text}><strong>Agent:</strong> {props.agentName || '—'}</Text>
        <Text style={text}><strong>Agent Phone:</strong> {props.agentPhone || '—'}</Text>
        <Text style={text}><strong>Agent Email:</strong> {props.agentEmail || '—'}</Text>
        <Text style={text}><strong>Vendor:</strong> {props.vendorName || '—'}</Text>
        {props.additionalInfo && (
          <Section>
            <Hr style={hr} />
            <Heading as="h2" style={h2}>Additional Info</Heading>
            <Text style={text}>{props.additionalInfo}</Text>
          </Section>
        )}
        <Hr style={hr} />
        <Text style={footer}>This email was sent from the {SITE_NAME} website.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: QuoteRequestEmail,
  subject: (data: Record<string, any>) => `Quote Request — ${data.fullName || 'New Enquiry'} — ${data.surveyType || 'Survey'}`,
  to: 'info@victorysurveys.co.uk',
  displayName: 'Quote request notification',
  previewData: {
    surveyType: 'Home Buyer / Condition Survey',
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    phone: '07700 900000',
    yourAddress: '10 High Street, Norwich, NR1 1AA',
    propertyAddress: '25 Beach Road, Great Yarmouth, NR30 3AB',
    propertyType: 'Detached house',
    propertyPrice: '£200,000 – £250,000',
    numberOfBedrooms: '3',
    agentName: 'Abbotts — Great Yarmouth',
    agentPhone: '01493 331333',
    agentEmail: 'greatyarmouth@abbotts.co.uk',
    vendorName: 'Mr Jones',
    additionalInfo: 'Access via side gate only.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Montserrat', Arial, sans-serif" }
const container = { padding: '20px 25px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1a1a1a', margin: '0 0 20px' }
const h2 = { fontSize: '16px', fontWeight: '600' as const, color: '#b5914a', margin: '0 0 10px' }
const text = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0 0 8px' }
const hr = { borderColor: '#e5e5e5', margin: '16px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0' }
