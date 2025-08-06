'use client';

import AccordionRowContext from '@/context/accordion-row-context';
import { useContext } from 'react';

const useAccordionRowState = () => {
  return useContext(AccordionRowContext);
};

export default useAccordionRowState;
