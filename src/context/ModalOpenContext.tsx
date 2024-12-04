'use client';

import { createContext, ReactNode, useState } from 'react';

type TModalOpenContext = {
  toOpen: () => void;
  isOpen: boolean;
}

export const ModalOpenContext = createContext({} as TModalOpenContext);

type TProps = {
    children: ReactNode
}

function ModalOpenContextProvider({ children }: TProps) {

  const [isOpen, setOpen] = useState(false);
  const toOpen = () => {
    setOpen(true);
  };

  return (
    <ModalOpenContext.Provider value={{ isOpen, toOpen }}>
      {children}
    </ModalOpenContext.Provider>
  );
}

export default ModalOpenContextProvider;