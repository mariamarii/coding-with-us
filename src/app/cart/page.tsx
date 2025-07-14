import CourseCard from '@/components/cart/CourseCart';

export default function HomePage() {
  const summary = `This course is designed for anyone eager to unlock the potential of AI, regardless of prior experience. You will discover how to effortlessly create content, automate tasks, and enhance productivity using cutting-edge AI tools like ChatGPT.`;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center gap-8 p-8">
      <CourseCard
        title="The Complete AI Guide: Learn ChatGPT, Generative AI & More"
        isBestSeller={true}
        updatedDate="June 2025"
        summary={summary}
        skills={[
          'Crafting effective AI prompts',
          'Automating content creation',
          'Streamlining business operations',
          'Enhancing productivity with AI',
        ]}
      />

      
    </main>
  );
}
