# Design Guidelines: LEXIA Educational Platform

## Design Approach
**Reference-Based**: Professional educational SaaS platforms (Coursera, Khan Academy) with Arabic cultural refinement. Clean, trustworthy, academic aesthetic emphasizing credibility and accessibility.

## Core Design Principles
- **Arabic-First Design**: Full RTL (right-to-left) layout throughout
- **Educational Credibility**: Professional, clean, trustworthy visual language
- **Accessibility**: High contrast ratios, clear typography, intuitive navigation
- **Cultural Appropriateness**: Refined, respectful design suitable for Saudi educational context

## Color Palette Implementation
- **Primary Accent**: #29F3D9 (Turquoise) - CTAs, key highlights, interactive elements
- **Secondary**: #326C82 (Teal) - Headers, navigation backgrounds, section dividers
- **Neutral**: #A9AEB1 (Gray) - Body text, subtle backgrounds, borders
- **Base**: White backgrounds, Black text
- **Usage**: Turquoise for energy/action, Teal for trust/stability, Gray for sophistication

## Typography System
**Arabic Fonts** (Google Fonts):
- Primary: 'Tajawal' - Modern, highly legible Arabic sans-serif
- Headings: Bold (700), sizes 32px-48px
- Body: Regular (400), 16px-18px
- Buttons/Labels: Medium (500), 14px-16px

**Hierarchy**:
- H1: 48px/Bold - Hero titles
- H2: 36px/Bold - Section headers
- H3: 24px/Medium - Card titles
- Body: 18px/Regular - Paragraphs
- Small: 14px/Regular - Captions

## Layout System
**Spacing Units**: Tailwind scale - predominantly use 4, 6, 8, 12, 16, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Container max-width: max-w-6xl
- Grid gaps: gap-6 to gap-8

## Page Structures

### 1. Landing Page
**Header** (bg-[#326C82]):
- LEXIA logo (right-aligned for RTL)
- Navigation menu (centered): الرئيسية | الخدمات | من نحن | تواصل معنا
- Login button (left-aligned, bg-[#29F3D9])

**Hero Section** (py-24):
- Full-width background with subtle gradient overlay (#326C82 to darker)
- Centered content: Large heading + subtitle + CTA button
- Hero image: Abstract educational illustration or Saudi students engaging with technology
- Button with blurred background (backdrop-blur-sm bg-[#29F3D9]/90)

**Services Section** (py-20, bg-white):
- Grid layout: 3 columns on desktop, 1 on mobile
- Service cards with icons, titles, descriptions
- Icons: Font Awesome education-related icons
- Card styling: White background, subtle shadow, hover elevation

**About Section** (py-20, bg-gray-50):
- 2-column layout: Text + supporting image
- Professional company description
- Trust indicators (if available)

**Contact Section** (py-20, bg-[#326C82]):
- Contact form + contact information
- White text on teal background
- Form inputs with light borders, white backgrounds

**Footer** (bg-black, text-white):
- LEXIA logo + tagline
- Quick links, contact info
- Copyright notice

### 2. Login Page
**Centered Card Design**:
- Full viewport height, vertically centered
- White card (max-w-md) with shadow-xl
- LEXIA logo at top
- Form fields: Username, Password
- Submit button (bg-[#29F3D9], full-width)
- Minimal, focused design - no distractions

### 3. User Dashboards
**User1 Dashboard**:
- Welcome header with user name
- 2 prominent chat buttons in grid (gap-6)
- Button 1: "منهج التاريخ الوطني السعودي"
- Button 2: "منهج معالم في السيرة النبوية"
- Each button: Large (py-8), icon + text, bg-white with border, shadow on hover

**User2 Dashboard**:
- Same structure, single button
- Button: "منهج التاريخ الوطني السعودي"

## Component Library

**Buttons**:
- Primary: bg-[#29F3D9], rounded-lg, px-8 py-3, shadow-md
- Secondary: bg-white, border-2 border-[#326C82], text-[#326C82]
- Chat Buttons: bg-white, border border-gray-200, p-8, rounded-xl, hover:shadow-lg transition

**Cards**:
- White background, rounded-xl
- Shadow: shadow-md default, shadow-xl on hover
- Padding: p-6 to p-8

**Form Inputs**:
- Border: border-2 border-gray-200
- Focus: border-[#29F3D9], ring-2 ring-[#29F3D9]/20
- Rounded: rounded-lg
- Padding: px-4 py-3

**Navigation**:
- Sticky header with backdrop-blur
- Mobile: Hamburger menu (right-aligned for RTL)
- Smooth scroll transitions

## Icons
**Font Awesome** (via CDN):
- Educational: fa-graduation-cap, fa-book, fa-comments
- UI: fa-user, fa-lock, fa-bars, fa-arrow-left
- Consistent sizing: text-2xl for decorative, text-lg for functional

## Images
**Hero Section**: 
- High-quality photograph or illustration showing Saudi students with tablets/technology in modern learning environment
- Overlay with gradient for text readability
- Dimensions: 1920x800px minimum

**About Section**:
- Professional photo of educational technology or classroom setting
- Dimensions: 800x600px

**Placement**: Always use `object-cover` for responsive scaling

## RTL Considerations
- Text alignment: text-right for Arabic content
- Flex/Grid direction: flex-row-reverse where needed
- Padding/Margin: Use logical properties (start/end)
- Icons: Mirror directional icons (arrows)
- Form labels: Above inputs, right-aligned

## Responsive Breakpoints
- Mobile: Base (< 768px) - Single column, stacked navigation
- Tablet: md (768px) - 2-column grids
- Desktop: lg (1024px+) - Full layouts, 3-column grids

## Animations
**Minimal & Purposeful**:
- Button hover: Subtle shadow elevation (transition-all duration-200)
- Card hover: transform scale(1.02)
- Page transitions: Fade-in on load
- No scroll animations or excessive motion