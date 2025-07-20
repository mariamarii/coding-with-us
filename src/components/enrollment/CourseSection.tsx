"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypographyH4, TypographyH6, TypographyP } from "@/components/ui/typography";
import { courseSectionData } from "@/types/courseSectionData";

export function CourseSection() {
  return (
    <div className="bg-[#F2F2F2] py-10">
      <div className="max-w-[737.5px] mx-auto px-4 md:px-6 flex flex-col gap-6">

        <TypographyH4 className="text-[#282837] font-bold">
          {courseSectionData.sectionTitle}
        </TypographyH4>

        <TypographyP className="text-[#75757E] font-normal">
          {courseSectionData.sectionDescription}
        </TypographyP>

        <TypographyH6 className="text-[#282837] font-bold">
          {courseSectionData.subSectionTitle}
        </TypographyH6>

        <div className="flex flex-col">
          {courseSectionData.lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`flex flex-col md:flex-row md:items-center justify-between py-3 gap-2 ${
                lesson.isDisabled ? "text-gray-400 cursor-not-allowed select-none" : ""
              }`}
            >
              <Button
                variant="ghost"
                disabled={lesson.isDisabled}
                className="flex items-center gap-3 text-sm px-0 h-auto text-left"
              >
                <Image src={lesson.icon} alt="Icon" width={16} height={16} priority />
                <TypographyP className="m-0 p-0 text-[#282837]">
                  {lesson.id}: {lesson.title} ({lesson.duration})
                </TypographyP>
                <Image src={lesson.lockIcon} alt="Lock" width={16} height={16} priority />
              </Button>

              {lesson.isPreviewable && (
                <Button
                  size="sm"
                  className="bg-[#76B729] hover:bg-[#689f25] text-white font-semibold"
                >
                  Preview
                </Button>
              )}
            </div>
          ))}
        </div>

        <Button
          variant="link"
          size="sm"
          className="text-[#76B729] hover:text-[#689f25] font-semibold gap-1 self-center mt-4"
        >
          See all lessons items
          <Image src="/arrow-up.svg" alt="Expand" width={16} height={16} priority />
        </Button>
      </div>
    </div>
  );
}
