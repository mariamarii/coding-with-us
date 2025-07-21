# User Profile LocalStorage Caching

This document explains how to use the enhanced user profile caching system that stores user data from the `/user/me` endpoint in localStorage.

## Overview

The system provides multiple ways to work with user profile data with localStorage caching:

1. **`useUserProfile`** - Basic hook with automatic caching
2. **`useUserProfileManager`** - Advanced hook with manual control
3. **`userProfileCache`** - Utility functions for direct cache access

## Features

- **Automatic Caching**: User profile data is automatically stored in localStorage
- **Cache Expiration**: Cache expires after 5 minutes to ensure data freshness
- **Error Handling**: Graceful handling of localStorage errors
- **Manual Control**: Ability to manually refresh, clear, or force update cache
- **Toast Notifications**: User feedback for cache operations

## Usage Examples

### Basic Usage with `useUserProfile`

```tsx
import { useUserProfile } from '@/hooks/useUserProfile';

const MyComponent = () => {
  const { userProfile, session, refetch, clearCache } = useUserProfile();
  
  if (!userProfile) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {userProfile.name}!</h1>
      <p>Email: {userProfile.email}</p>
      <button onClick={refetch}>Refresh Profile</button>
      <button onClick={clearCache}>Clear Cache</button>
    </div>
  );
};
```

### Advanced Usage with `useUserProfileManager`

```tsx
import { useUserProfileManager } from '@/hooks/useUserProfileManager';

const ProfileManager = () => {
  const {
    currentProfile,
    hasValidCache,
    isExpired,
    needsRefresh,
    fetchAndCacheProfile,
    clearCachedProfile,
    forceRefreshProfile,
    isAuthenticated
  } = useUserProfileManager();
  
  return (
    <div>
      {currentProfile && (
        <div>
          <h2>{currentProfile.name}</h2>
          <p>Cache Status: {hasValidCache ? 'Valid' : 'Invalid'}</p>
          <p>Expired: {isExpired ? 'Yes' : 'No'}</p>
          <p>Needs Refresh: {needsRefresh ? 'Yes' : 'No'}</p>
        </div>
      )}
      
      <div>
        <button onClick={fetchAndCacheProfile}>Refresh Profile</button>
        <button onClick={forceRefreshProfile}>Force Refresh</button>
        <button onClick={clearCachedProfile}>Clear Cache</button>
      </div>
    </div>
  );
};
```

### Direct Cache Access with `userProfileCache`

```tsx
import { userProfileCache } from '@/utils/userProfileCache';

// Get cached profile
const profile = userProfileCache.getProfile();

// Check cache status
const hasCache = userProfileCache.hasValidCache();
const isExpired = userProfileCache.isExpired();
const cacheAge = userProfileCache.getCacheAge();

// Manual cache operations
userProfileCache.setProfile(newProfile);
userProfileCache.clearProfile();
```

## Cache Configuration

The cache is configured with the following settings:

- **Cache Duration**: 5 minutes (300,000 milliseconds)
- **Storage Keys**: 
  - `user_profile` - The actual profile data
  - `user_profile_timestamp` - When the cache was created

## Error Handling

The system handles various error scenarios:

- **localStorage Unavailable**: Gracefully falls back to no caching
- **Invalid JSON**: Clears corrupted cache data
- **Network Errors**: Clears cache on fetch failures
- **Expired Cache**: Automatically clears expired data

## Best Practices

1. **Use `useUserProfile`** for simple cases where you just need the profile data
2. **Use `useUserProfileManager`** when you need manual control over cache operations
3. **Use `userProfileCache`** for utility functions or when working outside React components
4. **Always handle the case where `userProfile` might be `null`**
5. **Use the `refetch` function when you need fresh data**
6. **Clear cache when user logs out** to prevent stale data

## Integration with Existing Code

The enhanced hooks are backward compatible with existing code. You can gradually migrate from the old `useUserProfile` to the new enhanced version:

```tsx
// Old usage (still works)
const { userProfile, session } = useUserProfile();

// New usage (with additional features)
const { userProfile, session, refetch, clearCache, hasValidCache, isExpired } = useUserProfile();
```

## Example Component

See `src/components/common/UserProfileDisplay.tsx` for a complete example of how to use the caching system with a full UI component. 