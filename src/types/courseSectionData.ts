export type LessonItem = {
    id: string;
    title: string;
    duration: string;
    icon: string; // Icon path (e.g., /play-circle.svg)
    lockIcon: string; // Lock/unlock icon path
    isPreviewable?: boolean; // Optional preview button
    isDisabled?: boolean; // Optional disabled state
  };
  
  export type CourseSectionData = {
    sectionTitle: string;
    sectionDescription: string;
    subSectionTitle: string;
    lessons: LessonItem[];
  };
  
  export const courseSectionData: CourseSectionData = {
    sectionTitle: "Section: Welcome and Introduction",
    sectionDescription: "Available once you start the course. Estimated time to complete: 1 hour 38 mins.",
    subSectionTitle: "Sub-section: Welcome and Introduction",
    lessons: [
      {
        id: "1.1",
        title: "Welcome and Introduction",
        duration: "18 mins",
        icon: "/play-circle.svg",
        lockIcon: "/unlock.svg",
        isPreviewable: true,
      },
      {
        id: "1.2",
        title: "Why and When to Use Surveys",
        duration: "17 mins",
        icon: "/chevron-down.svg",
        lockIcon: "/lock.svg",
      },
      {
        id: "1.3",
        title: "Why and When to Use Surveys",
        duration: "17 mins",
        icon: "/chevron-down.svg",
        lockIcon: "/lock.svg",
      },
      {
        id: "1.4",
        title: "Welcome and Introduction",
        duration: "18 mins",
        icon: "/play-circle.svg",
        lockIcon: "/lock.svg",
        isDisabled: true,
      },
      {
        id: "1.5",
        title: "Welcome and Introduction",
        duration: "15 mins",
        icon: "/play-circle.svg",
        lockIcon: "/lock.svg",
        isDisabled: true,
      },
      {
        id: "1.6",
        title: "Welcome and Introduction",
        duration: "21 mins",
        icon: "/play-circle.svg",
        lockIcon: "/lock.svg",
        isDisabled: true,
      },
    ],
  };
  