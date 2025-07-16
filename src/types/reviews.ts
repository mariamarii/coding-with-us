export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface ReviewsSectionProps {
  reviews: Review[];
}

export interface ReviewCardProps {
  review: Review;
  isTransitioning: boolean;
  onClick: (review: Review) => void;
}

export interface ReviewsCarouselProps {
  reviews: Review[];
  currentIndex: number;
  isTransitioning: boolean;
  onCardClick: (review: Review) => void;
}

export interface ReviewsNavigationProps {
  canGoPrevious: boolean;
  canGoNext: boolean;
  isTransitioning: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export interface ReviewsHeaderProps {
  canGoPrevious: boolean;
  canGoNext: boolean;
  isTransitioning: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export interface ReviewModalProps {
  review: Review | null;
  isOpen: boolean;
  onClose: () => void;
} 