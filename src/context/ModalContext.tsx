'use client';

import { createContext, ReactNode, useState, useMemo } from 'react';

//Создаем контекст для модального окна
export const ModalContext = createContext({});

type TProps = {
    children: ReactNode
}
type THookCodeData = string;

// Создаем функциональный компонент, в котором прописываем содержание контекста и подключаем контекст при помощи Provider
// children - компоненты, которые будут подписаны на данный контекст
function ModalContextProvider({ children }: TProps) {

  // стейт, который отвечает за текущее состояние модального окна
  const [isOpen, setOpen] = useState(false);
  const changeOpen = () => {
    setOpen(!isOpen);
  };
  //стейт, который отвечает за отображение в модельном окне конкретного hook кода
  const [hookCode, setHookCode] = useState('');
  const changeHookCode = (hookCodeData: THookCodeData) => {
    setHookCode(hookCodeData);
  };

  return (
    <ModalContext.Provider value={{ isOpen, changeOpen, hookCode, changeHookCode }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;

