# Design Guidelines for Globit Solutions Landing Page

## Design Approach
**Hybrid Approach**: Combining Linear's clean professionalism with Stripe's trust-building patterns. Focus on credibility, clarity, and conversion optimization for B2B decision-makers in education and enterprise sectors.

## Typography System
- **Primary Font**: Inter (Google Fonts) - clean, professional, highly readable
- **Headings**: Font weights 700-800, sizes: Hero (text-5xl to text-7xl), H2 (text-4xl to text-5xl), H3 (text-2xl to text-3xl)
- **Body Text**: Font weight 400-500, sizes: base to lg
- **Accents**: Font weight 600 for CTAs and highlights
- **Line Heights**: Generous spacing (leading-relaxed for body, leading-tight for headlines)

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 lg:py-32
- Component gaps: gap-8 to gap-12
- Container: max-w-7xl mx-auto px-6 lg:px-8
- Content width: max-w-prose for text-heavy sections

## Page Structure (8 Sections)

1. **Header/Navigation**: Sticky navigation with logo left, menu items center, "Get Demo" CTA button right, subtle shadow on scroll

2. **Hero Section**: 
   - Full-width with large background image (modern office/classroom with technology)
   - Two-column layout: Left: Compelling headline, subheadline, dual CTAs ("Schedule Demo" + "Learn More"), trust indicator ("Trusted by 500+ institutions")
   - Right: Dashboard preview image or 3D illustration showcasing platform
   - Height: min-h-screen with proper vertical centering

3. **Solutions Showcase**: 
   - 3-column grid (grid-cols-1 md:grid-cols-3)
   - Each card: Icon, title, 2-3 line description, "Learn more" link
   - Solutions: Student Management, Process Automation, Data Analytics, Cloud Infrastructure, Security Solutions, Integration Services
   - Icons: Heroicons via CDN

4. **Benefits Section**:
   - Alternating two-column layouts (image + content)
   - 3-4 key benefits with supporting visuals
   - Include metrics/stats: "50% faster processing", "99.9% uptime", "Save 20 hours/week"

5. **Client Testimonials**:
   - 2-column grid featuring 4 testimonials
   - Each: Client photo, quote, name, title, institution name
   - Include school/organization logos below

6. **Case Study Highlight**:
   - Single featured case study with large visual
   - Problem-solution-results format
   - Prominent CTA to view full case studies

7. **Trust & Credentials**:
   - Single row showcasing: Years of experience, clients served, certifications/partnerships
   - Partner logos (Microsoft, Google Workspace, AWS, etc.)
   - Security badges/compliance indicators

8. **Contact/CTA Section**:
   - Two-column: Left: Contact form (Name, Email, Organization, Message), Right: Office locations, contact info, response time indicator
   - Background: Subtle gradient or image with overlay
   - Final CTA: "Ready to Transform Your Organization?"

9. **Footer**:
   - Three-column: Company info + Quick Links, Solutions menu, Contact details
   - Newsletter signup: "Get IT insights for education"
   - Social media icons, Privacy/Terms links

## Component Library

**Cards**: Elevated with shadow-lg, rounded-xl corners, hover:shadow-2xl transition, p-8 spacing

**Buttons**: 
- Primary: Large, rounded-lg, px-8 py-4
- Secondary: Outline style with border-2
- On images: Backdrop-blur-md with semi-transparent background

**Forms**: Input fields with focus:ring, rounded-md, consistent height (h-12), form validation states

**Icons**: Heroicons (outline style), size-6 to size-12 depending on context

**Images**: 
- Hero: Professional tech/education environment, high quality, 1920x1080+
- Benefits: Interface screenshots, team collaboration photos, dashboard views
- Testimonials: Professional headshots, authentic customer photos
- All images: rounded-lg, object-cover, aspect ratios maintained

## Responsive Behavior
- Mobile: Single column stacking, reduced padding (py-12), smaller text scales
- Tablet: Two-column grids, adjusted spacing
- Desktop: Full multi-column layouts, maximum visual impact
- Breakpoints: md:768px, lg:1024px, xl:1280px

## Visual Hierarchy
- Clear F-pattern scanning on desktop
- Headlines drive attention with size/weight contrast
- CTAs stand out through size and strategic whitespace
- Progressive disclosure: Most important info above fold, supporting details below

## Interactions
- Smooth scroll to sections (scroll-behavior: smooth)
- Subtle hover states on cards (scale-105 on hover)
- Form field focus indicators
- Mobile: Hamburger menu with slide-in navigation
- NO distracting animations, focus on professional polish