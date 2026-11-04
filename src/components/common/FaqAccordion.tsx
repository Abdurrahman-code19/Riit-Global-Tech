import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`} className="border-border">
          <AccordionTrigger className="gap-6 py-6 text-left font-display text-base font-medium tracking-tight hover:no-underline sm:text-lg">
            <span className="flex items-start gap-4">
              <span className="mt-1 font-sans text-[10px] tracking-[0.18em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.question}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="max-w-2xl pb-2 pl-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
