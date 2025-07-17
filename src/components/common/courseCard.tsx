import React from 'react';
import { Star } from 'lucide-react';
import { CourseCardProps } from '@/types/skills';

const CourseCard: React.FC<CourseCardProps> = ({title,
  instructor,
  rating,
  reviews,
  currentPrice,
  originalPrice,
  badges,
  level,
  imageUrl
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex-shrink-0 w-80">
          <div className="relative w-[397.18px] h-[268px] overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-10"></div>
    </div>

      <div className="p-4">
      <h3 className="font-bold text-gray-900 mb-2 text-xl leading-none tracking-normal line-clamp-2">
        {title}
      </h3>
        
        <p className="text-gray-600 mb-3 text-sm">{instructor}</p>

        <div className="flex items-center mb-3">
          <span className="text-yellow-500 font-bold mr-1 text-sm">{rating}</span>
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm">({reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="font-bold text-gray-900 text-xl leading-none tracking-normal" style={{ fontWeight: 700, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}>
            SR {currentPrice}
          </span>
          <span className="text-[#979292] line-through text-xl ml-2 leading-none tracking-normal" style={{ fontWeight: 400, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}>
            SR {originalPrice}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`w-[93px] h-[37px] flex items-center justify-center text-sm rounded font-bold leading-none tracking-normal ${
                badge === 'Best seller'
                  ? 'bg-[#FFDEDE] text-[#BF6F6F]'
                  : 'bg-[#FFF6DE] text-[#BFA66F]'
              }`}
              style={{ fontWeight: 700, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%' }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;