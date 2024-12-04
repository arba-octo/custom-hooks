'use client';
import { createContext, ReactNode, useState, } from 'react';

type THookCode = string
type TModalHookCodeContext = {
    hookCode: string;
    toDoHookCode: (hookCode: THookCode) => void;
}
type TProps = {
    children: ReactNode
}


export const ModalHookCodeContext = createContext({} as TModalHookCodeContext);

function ModalHookCodeContextProvider({ children }: TProps) {

  const [hookCode, setHookCode] = useState('');
  const toDoHookCode = (hookCode: THookCode) => {
    setHookCode(hookCode);
  };

  return (
    <ModalHookCodeContext.Provider value={{ hookCode, toDoHookCode }}>
      {children}
    </ModalHookCodeContext.Provider>
  );
}
export default ModalHookCodeContextProvider;