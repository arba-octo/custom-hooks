'use client';
import { createContext, ReactNode, useState, } from 'react';

type THookCode = string
type THookName = string
type TModalHookCodeContext = {
    hookCode: string;
    hookName: string;
    toDoHook: (hookCode: THookCode, hookName: THookName) => void;
}
type TProps = {
    children: ReactNode
}

export const ModalHookCodeContext = createContext({} as TModalHookCodeContext);

function ModalHookCodeContextProvider({ children }: TProps) {
  const [hookCode, setHookCode] = useState('');
  const [hookName, setHookName] = useState('');
  const toDoHook = (hookCode: THookCode, hookName: THookName) => {
    setHookCode(hookCode);
    setHookName(hookName);
  };

  return (
    <ModalHookCodeContext.Provider value={{ hookCode, hookName, toDoHook }}>
      {children}
    </ModalHookCodeContext.Provider>
  );
}
export default ModalHookCodeContextProvider;