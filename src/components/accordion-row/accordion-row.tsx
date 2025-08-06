'use client';

import Image from 'next/image';
import styles from './accordion-row.module.scss';

import { useEffect } from 'react';
import { useAnimate } from 'motion/react';
import useAccordionRowState from '@/hooks/use-accordion-row-state';

type AccordionRowProps = {
  rowId: string;
  title: string;
  content: string;
};

const AccordionRow: React.FC<AccordionRowProps> = ({
  rowId,
  title,
  content
}) => {
  const [scope, animate] = useAnimate();
  const { getIsRowOpen, toggleRow } = useAccordionRowState();
  const isOpen = getIsRowOpen(rowId);

  useEffect(() => {
    const element = scope.current;
    if (!element) return;

    const measureHeight = element.scrollHeight;

    void animate(
      scope.current,
      { height: isOpen ? `${measureHeight}px` : '0px' },
      { type: 'tween', duration: 0.25, ease: 'easeIn' }
    );
  }, [animate, isOpen, scope]);

  return (
    <>
      <div className={styles.accordion__row} onClick={() => toggleRow(rowId)}>
        <h3>{title}</h3>
        <Image
          src={isOpen ? 'arrowUp.svg' : 'arrowDown.svg'}
          alt="Toggle icon"
          width={16}
          height={16}
        />
      </div>
      <div ref={scope} className={styles.accordion__content}>
        <p>{content}</p>
      </div>
    </>
  );
};

export default AccordionRow;
