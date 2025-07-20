import { X } from 'lucide-react';

interface SidebarHeaderProps {
  onToggle: () => void;
}

export function SidebarHeader({ onToggle }: SidebarHeaderProps) {
  return (
    <div className="flex flex-col justify-start mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Section Navigator</h2>
        <button
          onClick={onToggle}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <button
        onClick={onToggle}
        className="text-sm text-[#76B729] self-start hover:text-[#91C554] transition-colors hidden lg:block"
      >
        &lt;&lt; Hide
      </button>
    </div>
  );
}