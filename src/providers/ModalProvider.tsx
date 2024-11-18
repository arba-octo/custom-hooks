'use client';

import { ModalContext } from '@/context/ModalContext';
import { ReactNode, useState, useMemo } from 'react';

type TProps = {
    children: ReactNode
}

function ModalProvider({ children }: TProps) {
  const [isOpen, setOpen] = useState(false);

  const handlToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{}}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;