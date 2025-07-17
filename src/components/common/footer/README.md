# Footer Components

This directory contains modular footer components that can be used to build a complete footer.

## Components

### FooterLogo
Displays the company logo, tagline, and social media links.

**Props:**
- `tagline: string` - The company tagline text

**Usage:**
```tsx
<FooterLogo tagline="Your company tagline here" />
```

### FooterSection
A reusable component for navigation sections like courses, categories, or company links.

**Props:**
- `title: string` - The section title
- `items: Array<{ label: string; href: string }>` - Array of navigation items
- `error?: string` - Optional error message to display

**Usage:**
```tsx
const items = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

<FooterSection title="Company" items={items} />
```

### FooterContact
Displays contact information and app store download links.

**Props:**
- `address: string` - Company address
- `email: string` - Contact email
- `phone: string` - Contact phone number

**Usage:**
```tsx
<FooterContact 
  address="123 Main St, City, Country"
  email="contact@company.com"
  phone="+1-234-567-8900"
/>
```

### FooterBottom
Displays copyright information and legal links.

**Usage:**
```tsx
<FooterBottom />
```

## Main Footer Component

The main `app-footer.tsx` component combines all these smaller components to create a complete footer. It handles:

- Data transformation (converting arrays to the required format)
- Error handling
- Layout structure

## Benefits of This Structure

1. **Reusability**: Each component can be used independently
2. **Maintainability**: Easier to update specific sections
3. **Testability**: Each component can be tested in isolation
4. **Flexibility**: Easy to customize individual sections
5. **Separation of Concerns**: Each component has a single responsibility 