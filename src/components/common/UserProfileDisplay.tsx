"use client";
import React from 'react';
import { useUserProfileManager } from '@/hooks/useUserProfileManager';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UserProfileDisplay: React.FC = () => {
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

  if (!isAuthenticated) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Please log in to view your profile</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          User Profile
          <div className="flex gap-2">
            {hasValidCache && (
              <Badge variant={isExpired ? "destructive" : "default"}>
                {isExpired ? "Expired" : "Cached"}
              </Badge>
            )}
            {needsRefresh && (
              <Badge variant="secondary">Needs Refresh</Badge>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentProfile ? (
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-500">Name</label>
              <p className="text-lg font-semibold">{currentProfile.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Email</label>
              <p className="text-sm">{currentProfile.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Phone</label>
              <p className="text-sm">{currentProfile.phoneNumber || 'Not provided'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Email Confirmed</label>
              <Badge variant={currentProfile.emailConfirmed ? "default" : "secondary"}>
                {currentProfile.emailConfirmed ? "Yes" : "No"}
              </Badge>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Roles</label>
              <div className="flex gap-1 mt-1">
                {currentProfile.roles.map((role, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No profile data available</p>
        )}
        
        <div className="flex flex-wrap gap-2 pt-4">
          <Button 
            onClick={fetchAndCacheProfile}
            size="sm"
            variant="default"
          >
            Refresh Profile
          </Button>
          <Button 
            onClick={forceRefreshProfile}
            size="sm"
            variant="outline"
          >
            Force Refresh
          </Button>
          <Button 
            onClick={clearCachedProfile}
            size="sm"
            variant="destructive"
          >
            Clear Cache
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileDisplay; 