// types/faqData.ts

export type FAQItem = {
    id: string;
    question: string;
    answer: string[]; // Use array of strings for flexible rendering
  };
  
  export const faqData: FAQItem[] = [
    {
      id: "faq-1",
      question: "Why are design skills so important right now?",
      answer: [
        "Design skills are incredibly valuable for both you personally and for your company.",
        "For you personally, design skills are important because:",
        "- Salaries for people who learn design are soaring, surpassing $200K in cities like San Francisco, with global job growth rates at 13%.",
        "- Many of your job competitors already possess design skills. Enhancing yours can elevate your personal brand and make you more competitive.",
        "- You learn skills that protect you from losing your job to AI.",
        "- You can ignite your passion through design and leverage it to make a meaningful impact."
      ]
    },
    {
      id: "faq-2",
      question: "Why are design skills so important right now?",
      answer: [
        "Same question for placeholder content."
      ]
    }
  ];
  