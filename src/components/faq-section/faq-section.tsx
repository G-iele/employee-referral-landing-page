import AccordionRow from '../accordion-row/accordion-row';
import styles from './faq-section.module.scss';

type FaqItem = {
  title: string;
  content: string;
};

type FaqsData = FaqItem[];

const FaqSection = () => {
  const faqsData: FaqsData = [
    {
      title: 'Very long question name?',
      content:
        'Lorem ipsum dolor sit amet consectetur. Blandit hac semper cras at tellus aliquam sit. Massa justo nullam ut auctor integer id praesent iaculis. Quis euismod vitae consequat sed erat. Ut in sed facilisis cras. Venenatis risus vestibulum gravida lectus eget. Id porta diam vestibulum porta non fringilla quis vel.'
    },
    {
      title: 'Very long question name?',
      content:
        'Lorem ipsum dolor sit amet consectetur. Blandit hac semper cras at tellus aliquam sit. Massa justo nullam ut auctor integer id praesent iaculis. Quis euismod vitae consequat sed erat. Ut in sed facilisis cras. Venenatis risus vestibulum gravida lectus eget. Id porta diam vestibulum porta non fringilla quis vel.'
    },
    {
      title: 'Very long question name?',
      content:
        'Lorem ipsum dolor sit amet consectetur. Blandit hac semper cras at tellus aliquam sit. Massa justo nullam ut auctor integer id praesent iaculis. Quis euismod vitae consequat sed erat. Ut in sed facilisis cras. Venenatis risus vestibulum gravida lectus eget. Id porta diam vestibulum porta non fringilla quis vel.'
    },
    {
      title: 'Very long question name?',
      content:
        'Lorem ipsum dolor sit amet consectetur. Blandit hac semper cras at tellus aliquam sit. Massa justo nullam ut auctor integer id praesent iaculis. Quis euismod vitae consequat sed erat. Ut in sed facilisis cras. Venenatis risus vestibulum gravida lectus eget. Id porta diam vestibulum porta non fringilla quis vel.'
    }
  ];

  return (
    <section className={styles.faqSection}>
      <h2>FAQ</h2>
      <div className={styles.faqSection__list}>
        {faqsData.map((faq, i) => (
          <div key={`${faq.title}-${i}`}>
            <AccordionRow
              rowId={`${faq.title}-${i}`}
              title={faq.title}
              content={faq.content}
            />
            {i < faqsData.length - 1 && (
              <div className={styles.faqSection__divider} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
