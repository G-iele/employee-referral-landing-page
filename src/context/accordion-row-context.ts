import { createContext } from 'react';

type AccordionRowState = {
  getIsRowOpen: (rowId: string) => boolean;
  toggleRow: (rowId: string) => void;
};

const AccordionRowContext = createContext<AccordionRowState>({
  getIsRowOpen: () => {
    throw new Error('No context given for a row');
  },
  toggleRow: () => {
    throw new Error('No context given for a row');
  }
});

export default AccordionRowContext;
