import CourseCardClient from './CourseCartButton';
import { cartCourse } from '@/types/cart';




const CourseCard = ({
  title,
  isBestSeller,
  updatedDate,
  summary,
  skills,
  inCart = false,
}: cartCourse) => {
  return (
<div className="relative w-full max-w-[344px] min-h-[400px] bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col justify-between border border-[#f2f2f2] overflow-hidden mx-auto">
      {/* Z-10 = Content on top */}
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        
        {/* Tags */}
       <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
  {isBestSeller && (
    <span className="bg-[#FFDEDE] text-[#DA7373] px-2 py-[2px] rounded-md leading-none">
      Best seller
    </span>
  )}
  <span className="text-[#78C040] font-light leading-none">
    Updated <span className="font-bold">June 2025</span>
  </span>
</div>


        <p className="font-semibold text-sm sm:text-[15px] text-gray-800 mb-1">Course Summary</p>
        <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed line-clamp-3">{summary}</p>

        <p className="font-semibold text-sm sm:text-[15px] text-gray-800 mb-1">Skills you will learn</p>
        <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700">
          {skills.map((skill, i) => (
            <li key={i} className="line-clamp-1">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="relative z-10 mt-4">
        <CourseCardClient inCart={inCart} />
      </div>

      {/* SVG behind everything */}
      <svg
        viewBox="0 0 176 176"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-8 -right-8 w-24 h-24 sm:w-36 sm:h-36 opacity-20 z-0 pointer-events-none"
      >
        <circle cx="88" cy="88" r="88" fill="#76B729" />
      </svg>
    </div>
  );
};

export default CourseCard;