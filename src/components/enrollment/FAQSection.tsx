"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData } from "@/types/faqData";

export function FAQSection() {
  return (
    <section className="w-full flex justify-center px-4 py-12 bg-white">
      <div className="w-[72%] mx-auto">
        <h2 className="text-[20px] md:text-[24px] font-semibold mb-6 text-[#282837]">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-[#E5E5E5]">
              <AccordionTrigger className="text-[16px] md:text-[18px] font-medium text-[#282837] hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent>
                <div className="bg-[#F2F2F2] rounded-[8px] p-6 md:p-8 text-[#000] text-[14px] md:text-[16px] leading-7">
                  {faq.answer.map((line, index) =>
                    line.startsWith("-") ? (
                      <li key={index} className="ml-6 list-disc">{line.replace("-", "").trim()}</li>
                    ) : (
                      <p key={index}>{line}</p>
                    )
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
