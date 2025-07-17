import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

const LanguageToggle = ({
  selected,
  onLanguageChange,
}: {
  selected: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}) => (
  <ToggleGroup
    type="single"
    value={selected}
    onValueChange={(value) => value && onLanguageChange(value as 'en' | 'ar')}
    className="border border-[#D9D9D9] rounded-lg overflow-hidden w-[75px] h-[39px] bg-transparent"
  >
    <ToggleGroupItem
      value="en"
      className={cn(
        "flex-1 text-sm font-normal h-full rounded-none border-none transition-all duration-200",
        selected === 'en'
          ? 'bg-[#76B729] text-white data-[state=on]:bg-[#76B729] data-[state=on]:text-white'
          : 'bg-transparent text-[#75757E] hover:bg-gray-50 data-[state=on]:bg-[#76B729] data-[state=on]:text-white'
      )}
    >
      En
    </ToggleGroupItem>
    <ToggleGroupItem
      value="ar"
      className={cn(
        "flex-1 text-sm font-normal h-full rounded-none border-none transition-all duration-200",
        selected === 'ar'
          ? 'bg-[#76B729] text-white data-[state=on]:bg-[#76B729] data-[state=on]:text-white'
          : 'bg-transparent text-[#75757E] hover:bg-gray-50 data-[state=on]:bg-[#76B729] data-[state=on]:text-white'
      )}
    >
      AR
    </ToggleGroupItem>
  </ToggleGroup>
);

export default LanguageToggle;