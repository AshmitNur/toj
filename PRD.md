# PRD — TØJ Sourcing Website Revamp
**Product Requirements Document**
Version 1.0 | May 2026
Prepared for: TØJ Sourcing Company Limited

---

## 1. Executive Summary

TØJ Sourcing is a USD 45M/year apparel virtual manufacturer and supply chain intermediary headquartered in Dhaka, Bangladesh, serving international fashion retailers and brands across the USA, UK, Europe, and Australia. The current website fails to communicate the sophistication, global scale, and design-led identity that defines the business.

This PRD defines the complete revamp of tojsourcing.com — transforming it from a static informational site into an immersive, high-conversion brand experience that positions TØJ as a premium partner for global fashion enterprises.

---

## 2. Problem Statement

### 2.1 Current State Gaps

| Problem Area | Current State | Impact |
|---|---|---|
| **Brand Perception** | Generic WordPress/Elementor layout with stock photography | Undercuts premium positioning |
| **Trust Signals** | Client logos are image-only; no case studies or impact numbers | Low credibility for new prospects |
| **Navigation Depth** | Service sub-pages are thin and near-identical in copy | Visitors can't differentiate service lines |
| **Global Story** | "We Think / We Display / We Assemble" is listed as plain text | Fails to convey the geographic intelligence of the model |
| **Sustainability** | A single paragraph with no data, no certifications named | Missed opportunity for ESG-conscious buyers |
| **CTAs** | Weak or absent throughout; no lead capture mechanism | Near-zero conversion architecture |
| **Mobile Experience** | Not optimized for modern mobile browsing | Losing significant traffic |
| **Performance** | Elementor bloat; slow load | Poor SEO and bounce rate |

### 2.2 Core Business Need

International fashion buyers and sourcing managers evaluating TØJ against competitors will judge the brand within seconds of landing. The website must do the work of a senior salesperson — communicating trust, creative capability, scale, and ethical credibility in a single, cohesive journey.

---

## 3. Goals & Success Metrics

### 3.1 Goals

- **G1** — Elevate brand perception to match or exceed competitor sourcing houses operating at the same revenue tier.
- **G2** — Generate qualified inbound leads from international buyers via structured contact/inquiry flows.
- **G3** — Communicate TØJ's full service depth (R&D → Design → Production → Operations) in a way that is memorable and differentiated.
- **G4** — Establish TØJ's sustainability and ethical sourcing credentials as a first-class narrative, not an afterthought.
- **G5** — Support SEO visibility in key markets (UK, EU, USA) for terms like "apparel sourcing Bangladesh", "ethical garment manufacturer", "fashion supply chain partner".

### 3.2 Success Metrics

| Metric | Baseline (Est.) | 90-Day Target |
|---|---|---|
| Avg. session duration | ~45 sec | > 2:30 min |
| Bounce rate | ~75% | < 50% |
| Inquiry form submissions | ~0/month | 15+ qualified leads/month |
| Page load (LCP) | > 4s | < 1.8s |
| Mobile usability score | Poor | 95+ (Lighthouse) |
| SEO visibility (target keywords) | None tracked | Top 20 for 5 core terms |

---

## 4. Target Audience

### 4.1 Primary — International Sourcing Managers
- Role: Head of Sourcing, Buying Manager, Supply Chain Director
- Company size: Mid-to-large fashion retailer or DTC brand
- Location: UK, EU, USA, Australia
- Pain points: Unreliable factories, missed lead times, greenwashing, lack of design support
- Decision signals: Portfolio quality, certifications, geographic footprint, responsiveness

### 4.2 Secondary — Brand Founders / Startup Labels
- Role: Founder building a fashion label needing end-to-end manufacturing support
- Pain points: No factory relationships, don't know where to start, need design + production in one partner
- Decision signals: Ease of contact, clear process explanation, trust

### 4.3 Tertiary — Investors & Press
- Looking for: Scale proof (revenue, staff, countries), sustainability posture, growth trajectory

---

## 5. Sitemap & Information Architecture

```
tojsourcing.com/
│
├── / (Home)
│   ├── Hero — Brand statement + primary CTA
│   ├── About Snapshot — Who TØJ is in 3 lines
│   ├── Numbers Bar — Key stats (animated)
│   ├── Services Overview — 4 cards
│   ├── Global Presence — Interactive world map
│   ├── Sustainability Teaser
│   ├── Client Logos
│   └── Contact CTA
│
├── /about
│   ├── Origin Story (2016 founding narrative)
│   ├── Mission & Values
│   ├── Team / Leadership (placeholder if no photos)
│   ├── Milestones Timeline
│   └── Why Choose TØJ
│
├── /services
│   ├── Overview
│   ├── /services/research-development
│   ├── /services/design
│   ├── /services/production
│   └── /services/operations-support
│
├── /global-presence
│   ├── Interactive map with Think / Display / Assemble layers
│   └── Country detail callouts
│
├── /sustainability
│   ├── Philosophy
│   ├── Certifications (named, linked)
│   ├── Recycle–Reuse–Reborn initiative
│   └── Manufacturing partner compliance
│
├── /display (Portfolio / Product Showcase)
│   └── Product category grid with filters
│
└── /contact
    ├── Inquiry form (structured: name, company, country, inquiry type)
    ├── Direct contacts
    └── Office map embed
```

---

## 6. Feature Requirements

### 6.1 Home Page

**F1.1 — Hero Section**
- Full-viewport cinematic hero with a single, bold brand statement
- Looping ambient video or high-res editorial photography (fashion/fabric/production)
- Animated tagline reveal on load
- Two CTAs: "Partner With Us" (→ /contact) and "Explore Our Work" (→ /display)
- Priority: P0

**F1.2 — Stats Counter Strip**
- Animated count-up on scroll: Years in Business, Countries, Offices, Staff, Annual Turnover
- The counters must work (the current site has a JS bug leaving them at 0)
- Priority: P0

**F1.3 — Services Snapshot**
- Four service cards with distinct iconography and a hover state that reveals a one-line description
- Each links to the relevant /services sub-page
- Priority: P0

**F1.4 — Global Presence Teaser**
- A static or lightly animated world map SVG showing Think / Display / Assemble nodes
- Links to /global-presence for full interaction
- Priority: P1

**F1.5 — Client Logo Strip**
- Named, properly spaced client logos in a slow marquee scroll
- Priority: P1

**F1.6 — Sustainability Signal**
- A one-line sustainability commitment with a "Learn More" link
- Visually distinct — should feel like a brand promise, not a footnote
- Priority: P1

**F1.7 — Contact CTA Banner**
- Full-width bottom section with a strong CTA: "Ready to Build Together?"
- Priority: P0

---

### 6.2 Services Pages

**F2.1 — Service Detail Pages (×4)**
Each service page must include:
- A clear process breakdown (numbered steps or visual flow)
- What TØJ does specifically (not generic copy)
- What the client receives (outputs/deliverables)
- A relevant visual or short video
- Cross-link to related services
- Priority: P0

**F2.2 — Services Overview Page**
- All four services shown as a scannable comparison layout
- Clear differentiation of each pillar
- Priority: P0

---

### 6.3 Global Presence Page

**F3.1 — Interactive World Map**
- Three toggle layers: "We Think" / "We Display" / "We Assemble"
- Clicking a country node shows a tooltip with city name and function
- Built in SVG + JS (no external map library dependency required)
- Priority: P1

---

### 6.4 Sustainability Page

**F4.1 — Certifications Section**
- Named certifications with logo + what it means for buyers
- Not just images from texbridgebd.com — proper copy per certification
- Priority: P1

**F4.2 — Recycle–Reuse–Reborn Section**
- Visual breakdown of what this initiative means operationally
- Priority: P2

---

### 6.5 Contact Page

**F5.1 — Structured Inquiry Form**
Fields: Full Name, Company Name, Country, Inquiry Type (dropdown: New Partnership / Design Request / Production Query / General), Message, Email
- Form submission goes to info@tojsourcing.com
- Auto-acknowledgment email on submission
- Priority: P0

**F5.2 — Office Location**
- Google Maps embed for Mirpur DOHS, Dhaka
- Priority: P1

---

### 6.6 Display / Portfolio Page

**F6.1 — Product Grid**
- Category-filtered grid (Knitwear / Woven / Denim / Sustainable / etc.)
- Each card: product image, category tag, brief descriptor
- Priority: P1

---

## 7. Non-Functional Requirements

### 7.1 Performance
- Lighthouse score: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- LCP < 1.8s on 4G mobile
- No Elementor — custom-built in Next.js (recommended) or Astro

### 7.2 Technology Stack (Recommended)
- **Framework**: Next.js 14 (App Router) — SSG for most pages, ISR for dynamic sections
- **Styling**: Tailwind CSS + CSS custom properties for design tokens
- **Animations**: Framer Motion
- **CMS**: Sanity.io or Contentful (for client logos, product display, team bios)
- **Forms**: React Hook Form + Resend (email delivery)
- **Hosting**: Vercel
- **Analytics**: Plausible (privacy-friendly, EU-compliant)

### 7.3 SEO
- Semantic HTML structure throughout
- Open Graph + Twitter Card meta per page
- Structured data (Organization, LocalBusiness schema)
- Sitemap.xml auto-generated
- robots.txt properly configured (current site has `noindex, nofollow` — this must be removed)

> ⚠️ **Critical**: The current site has `meta-robots: noindex, nofollow` sitewide — it is completely invisible to search engines. This is a P0 fix.

### 7.4 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigable
- ARIA labels on all interactive elements
- Color contrast ratio ≥ 4.5:1

### 7.5 Multilingual (Future Phase)
- Architecture should support i18n from day one (Next.js i18n routing)
- Phase 2 target languages: Spanish, French (for EU market expansion)

---

## 8. Content Requirements

### 8.1 Content Gaps to Fill Before Launch

| Page | Gap |
|---|---|
| /about | Leadership team bios and photos |
| /services | Detailed process copy per service line |
| /display | High-quality product photography |
| /sustainability | Named certifications with descriptions |
| Home | Named client brand logos (with permission) |
| All | Replace stock photography with owned/licensed editorial imagery |

### 8.2 Brand Voice
- **Confident, not boastful** — the numbers speak; the copy should be spare
- **Design-literate** — vocabulary that resonates with creative directors and buyers alike
- **Globally fluent, locally grounded** — acknowledge Bangladesh identity proudly
- **Precise** — short sentences, no filler, no corporate jargon

---

## 9. Phased Delivery Plan

### Phase 1 — Foundation (Weeks 1–4)
- Fix `noindex` issue immediately (deploy a holding page if needed)
- Design system + component library
- Home, About, Contact pages live
- Structured inquiry form functional

### Phase 2 — Services & Presence (Weeks 5–8)
- All four service detail pages
- Global presence interactive map
- Sustainability page (with named certs)
- Display/portfolio grid (initial product set)

### Phase 3 — Growth (Weeks 9–12)
- SEO content expansion
- CMS integration for dynamic content
- Analytics dashboard
- Performance audit & optimization pass

---

## 10. Stakeholder Sign-Off Checklist

- [ ] Brand voice approved by TØJ leadership
- [ ] Client logos approved for display
- [ ] Product photography delivered
- [ ] Certification names and descriptions confirmed
- [ ] Contact form routing confirmed (email/CRM destination)
- [ ] Domain ownership and DNS access confirmed
- [ ] Legal: Privacy Policy and Cookie Notice content prepared

---

*Document Owner: TØJ Sourcing Digital Team*
*Last Updated: May 2026*
