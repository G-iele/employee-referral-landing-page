import FaqSection from '@/components/faq-section/faq-section';
import HowItWorksSection from '@/components/how-it-works-section/how-it-works-section';
import ReferSection from '@/components/refer-section/refer-section';
import AccordionRowProvider from '@/providers/accordion-row-provider';

const Page = () => {
  return (
    <>
      <ReferSection />
      <HowItWorksSection />
      <AccordionRowProvider>
        <FaqSection />
      </AccordionRowProvider>
    </>
  );
};

export default Page;
