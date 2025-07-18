import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import React, { useMemo } from "react";
import { CourseCardProps } from "@/types/skills";
import { formatNumber, formatCurrency } from "@/lib/utils";

const CourseCard: React.FC<CourseCardProps> = ({

  title,
  instructor,
  rating,
  reviews,
  currentPrice,
  originalPrice,
  badges,
  level,
  imageUrl,
}) => {
  // Default image fallback
  const defaultImage = "/course.png";
  
  // Filter out "Best seller" from bottom badges
  const bottomBadges = badges.filter(badge => badge !== "Best seller");
  const hasBestSeller = badges.includes("Top Rated");

  // Memoize the star rating calculation to prevent hydration issues
  const starRating = useMemo(() => {
    const fullStars = Math.floor(Number(rating) || 0);
    return Array.from({ length: 5 }, (_, i) => i < fullStars);
  }, [rating]);

  // Memoize the reviews count formatting with consistent formatting
  const formattedReviews = useMemo(() => {
    return formatNumber(reviews || 0);
  }, [reviews]);

  return (
    <Card className="w-full bg-white max-w-sm max-w-[280px] sm:max-w-[340px] md:max-w-[300px] flex-shrink-0 flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full h-[180px] sm:h-[220px] md:h-[268px] overflow-hidden rounded-t-lg">
          <img
            src={imageUrl || defaultImage}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = defaultImage;
            }}
          />
          {hasBestSeller && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-[#FFDEDE] text-[#BF6F6F] font-[700] text-[12px] px-2 py-1">
              Top Rated
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-4 flex-1">
        <div className="relative group">
          <h3 
            className="font-[700] text-[20px] text-[#282837] leading-tight line-clamp-2 min-h-[2.5rem] line-clamp-2"
          >
            {title}
          </h3>
          
        </div>
        <p className="text-[#6B6B6B] text-[14px] font-[400] truncate">
          {instructor}
        </p>
        <div className="flex items-center flex-wrap gap-1">
          <span className="text-[#282837] font-[700] text-[16px]">
            {rating}
          </span>
          <div className="flex">
            {starRating.map((isFilled, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  isFilled
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-[#000000] text-[16px] font-[400] ">
            ({formattedReviews})
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <span className="font-[700] text-[#282837] text-[20px]">
            {formatCurrency(currentPrice)}
          </span>
          <span className="text-[#979292] line-through text-[20px] font-[400]">
            {formatCurrency(originalPrice)}
          </span>
        </div>
        
      </CardContent>
    </Card>
  );
};

export default CourseCard;