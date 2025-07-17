# Next.js Loading Patterns

This project uses Next.js native loading patterns instead of custom `isLoading` states.

## 🚀 Available Loading Patterns

### 1. **Page-Level Loading** (`loading.tsx`)

- **File**: `src/app/loading.tsx`
- **Usage**: Automatically shows when the page is loading
- **Next.js**: Automatically detected by Next.js App Router

### 2. **Section-Level Loading** (`loading.tsx` in component folders)

- **Files**:
  - `src/components/landing/skill/loading.tsx`
  - `src/components/landing/reviews/loading.tsx`
  - `src/components/landing/popular-topics/loading.tsx`
  - `src/components/common/header/loading.tsx`
- **Usage**: Shows when specific sections are loading

### 3. **Suspense Boundaries**

- **Usage**: Wrap components with `<Suspense>` and provide fallback skeletons
- **Example**: See `src/app/layout-with-suspense.tsx`

## 📁 File Structure

```
src/
├── app/
│   ├── loading.tsx                    # Page-level loading
│   └── layout-with-suspense.tsx       # Example with Suspense
├── components/
│   ├── ui/
│   │   └── skeleton.tsx               # Base skeleton component
│   ├── common/
│   │   ├── header-skeleton.tsx        # Header skeleton
│   │   └── course-card-skeleton.tsx   # Course card skeleton
│   └── landing/
│       ├── skills-section-skeleton.tsx
│       ├── reviews-section-skeleton.tsx
│       ├── popular-topics-skeleton.tsx
│       └── page-skeleton.tsx          # Full page skeleton
```

## 🎯 How to Use

### **Option 1: Automatic Loading (Recommended)**

Next.js automatically shows `loading.tsx` when:

- Page is loading
- Route is changing
- Data is being fetched

### **Option 2: Suspense Boundaries**

```tsx
import { Suspense } from "react";
import SkillsSectionSkeleton from "@/components/landing/skills-section-skeleton";
import SkillsWrapper from "@/components/landing/skills-wrapper";

<Suspense fallback={<SkillsSectionSkeleton />}>
  <SkillsWrapper coursesByCategory={data} categories={categories} />
</Suspense>;
```

### **Option 3: Async Components**

```tsx
// In your component
async function MyComponent() {
  const data = await fetchData(); // This will trigger loading.tsx
  return <div>{data}</div>;
}
```

## ✨ Benefits

1. **Automatic**: No need to manage `isLoading` states
2. **Performance**: Built-in optimizations from Next.js
3. **Consistent**: Standardized loading patterns across the app
4. **Accessible**: Proper loading states for screen readers
5. **SEO Friendly**: Better Core Web Vitals scores

## 🔧 Customization

### **Custom Skeleton Styles**

```tsx
import { Skeleton } from "@/components/ui/skeleton";

<Skeleton className="h-12 w-64 animate-pulse" />;
```

### **Loading Delays**

Next.js handles loading timing automatically, but you can customize with:

- `loading.tsx` for immediate loading states
- `Suspense` boundaries for component-level loading
- `async` components for data fetching loading

## 📱 Responsive Skeletons

All skeleton components are responsive and match the actual component layouts:

- Mobile: 1 column layouts
- Tablet: 2 column layouts
- Desktop: 3+ column layouts
