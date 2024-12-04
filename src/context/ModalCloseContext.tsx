'use client';

import { createContext, ReactNode, useState } from 'react';

type TModalCloseContext = {
    isClose: boolean;
    toClose: () => void;
}
type TProps = {
    children: ReactNode
}

export const ModalCloseContext = createContext({} as TModalCloseContext);

function ModalCloseContextProvider({ children }: TProps) {

  const [isClose, setClose] = useState(true);
  const toClose = () => {
    setClose(!isClose);
  };

  return (
    <ModalCloseContext.Provider value={{ isClose, toClose }}>
      {children}
    </ModalCloseContext.Provider>
  );
}

export default ModalCloseContextProvider;