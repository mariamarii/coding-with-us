# MyCourses API Integration

This document explains how the recommended and top sold courses sections now fetch data from the API endpoint.

## Overview

The recommended and top sold courses sections have been updated to fetch real data from the API endpoint:
```
https://localhost:7061/Api/V1/courses?PageIndex=1&PageSize=5
```

## Components

### Server Components (Recommended)
- **`RecommendedCoursesServer`** - Server component that fetches recommended courses
- **`TopSoldCoursesServer`** - Server component that fetches top sold courses

### Client Components (Alternative)
- **`RecommendedCourses`** - Client component with loading/error states
- **`TopSoldCourses`** - Client component with loading/error states

## API Integration

### New API Endpoint
Added to `src/config/api.ts`:
```typescript
coursesPaginated: (pageIndex: number = 1, pageSize: number = 5) => 
  `${API_BASE_URL}/Api/V1/courses?PageIndex=${pageIndex}&PageSize=${pageSize}`,
```

### Query Function
New function in `src/queries/courses.ts`:
```typescript
export async function fetchPaginatedCourses(pageIndex: number = 1, pageSize: number = 5): Promise<CourseCardProps[]>
```

### Data Mapping
The API response is mapped to the `CourseCardProps` interface:
```typescript
const mappedCourses = rawCourses.map((course) => ({
  title: course.name || course.title,
  imageUrl: course.image,
  categoryId: course.categoryId,
  instructor: "Unknown Instructor",
  rating: 5,
  reviews: 10000,
  currentPrice: course.price,
  originalPrice: 349.99, 
  badges: ["Top Rated"], 
  level: "Beginner", 
}));
```

## Features

### Loading States
- Skeleton loading animations while fetching data
- Smooth transitions between loading and loaded states

### Error Handling
- Graceful fallback to empty state when API fails
- Error messages displayed to users
- Console logging for debugging

### Fallback Data
- Uses mock data when API is unavailable
- Configurable via `NEXT_PUBLIC_USE_MOCK_DATA` environment variable

## Usage

### Server Components (Recommended)
```tsx
import RecommendedCoursesServer from '@/components/mycourses/RecommendedCoursesServer';
import TopSoldCoursesServer from '@/components/mycourses/TopSoldCoursesServer';

// In a server component
export default async function MyPage() {
  return (
    <div>
      <RecommendedCoursesServer />
      <TopSoldCoursesServer />
    </div>
  );
}
```

### Client Components
```tsx
import RecommendedCourses from '@/components/mycourses/RecommendedCourses';
import TopSoldCourses from '@/components/mycourses/TopSoldCourses';

// In a client component
export default function MyPage() {
  return (
    <div>
      <RecommendedCourses />
      <TopSoldCourses />
    </div>
  );
}
```

### Custom Hook
```tsx
import { usePaginatedCourses } from '@/hooks/usePaginatedCourses';

const { fetchRecommendedCourses, fetchTopSoldCourses } = usePaginatedCourses();

// Fetch courses manually
const courses = await fetchRecommendedCourses();
```

## Configuration

### Environment Variables
- `NEXT_PUBLIC_API_BASE_URL` - API base URL (defaults to `https://localhost:7061`)
- `NEXT_PUBLIC_USE_MOCK_DATA` - Force use of mock data when set to "true"

### Cache Duration
- API responses are not cached by default
- Consider implementing caching if needed for performance

## Error Scenarios

1. **API Unavailable**: Falls back to mock data
2. **Network Error**: Shows error state with retry option
3. **Invalid Response**: Logs error and uses fallback data
4. **Empty Response**: Shows empty state

## Performance Considerations

- Server components fetch data at build/request time
- Client components fetch data on mount
- Loading states provide good UX during data fetching
- Error boundaries prevent component crashes

## Future Enhancements

- Add caching layer for API responses
- Implement retry logic for failed requests
- Add pagination controls for more courses
- Support for different sorting options
- Real-time data updates 