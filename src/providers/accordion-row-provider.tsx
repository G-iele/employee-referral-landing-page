'use client';

import AccordionRowContext from '@/context/accordion-row-context';
import { useCallback, useState } from 'react';

type OpenedRows = Record<string, boolean>;

const AccordionRowProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [openedRows, setOpenedRows] = useState<OpenedRows>({});

  const getIsRowOpen = useCallback(
    (rowId: string) => {
      return !!openedRows[rowId];
    },
    [openedRows]
  );

  const toggleRow = useCallback((rowId: string) => {
    setOpenedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId]
    }));
  }, []);

  return (
    <AccordionRowContext.Provider value={{ getIsRowOpen, toggleRow }}>
      {children}
    </AccordionRowContext.Provider>
  );
};

export default AccordionRowProvider;
