import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import React from "react";
import { CourseCardProps } from "@/types/skills";

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
  return (
    <Card className="w-full bg-white max-w-sm max-w-[280px] sm:max-w-[340px] md:max-w-[300px] flex-shrink-0 flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full h-[180px] sm:h-[220px] md:h-[268px] overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-4 flex-1">
        <div className="relative group">
          <h3 
            className="font-[700] text-[20px] text-[#282837] leading-tight line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem]"
          >
            {title}
          </h3>
          <div className="absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {title}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
        <p className="text-[#6B6B6B] text-[14px] font-[400] truncate">
          {instructor}
        </p>
        <div className="flex items-center flex-wrap gap-1">
          <span className="text-[#282837] font-[700] text-[16px]">
            {rating}
          </span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-[#000000] text-[16px] font-[400] ">
            ({reviews.toLocaleString()})
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <span className="font-[700] text-[#282837] text-[20px]">
            SR {currentPrice}
          </span>
          <span className="text-[#979292] line-through text-[20px] font-[400]">
            SR {originalPrice}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              className={`min-w-[70px] sm:min-w-[93px] h-[30px] sm:h-[37px] font-[700] text-[14px] ${
                badge === "Best seller"
                  ? "bg-[#FFDEDE] text-[#BF6F6F]"
                  : "bg-[#FFF6DE] text-[#BFA66F]"
              }`}
            >
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;