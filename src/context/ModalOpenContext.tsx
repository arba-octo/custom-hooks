'use client';

import { createContext, ReactNode, useState } from 'react';

type TModalOpenContext = {
  toToggleOpen: () => void;
  isOpen: boolean;
}

export const ModalOpenContext = createContext({} as TModalOpenContext);

type TProps = {
    children: ReactNode
}

function ModalOpenContextProvider({ children }: TProps) {

  const [isOpen, setOpen] = useState(false);
  const toToggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <ModalOpenContext.Provider value={{ isOpen, toToggleOpen }}>
      {children}
    </ModalOpenContext.Provider>
  );
}

export default ModalOpenContextProvider;