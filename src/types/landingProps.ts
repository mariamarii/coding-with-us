export interface FooterProps {
    courses: string[];
    categories: string[];
    error: string | null;
  }

 export interface HeaderProps {
    courses: string[];
    categories: string[]; 
    error: string | null;
  }

export interface ExploreMenuProps {
    open: boolean;
    onItemClick: (item: string, type: 'category' | 'course') => void;
    courses: string[];
    categories: string[];
    error: string | null;
  }

export interface FeatureItemProps {
    icon: string; 
    title: string;
    description: string;
  }

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface StepItemProps {
  step: Step;
  isLast: boolean;
}

export interface reviewsProps {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar?: string;
  }