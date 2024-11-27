'use client';

import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from '@/utils/renderers';
import { ModalContext } from '@/context/ModalContext';

function Modal() {

  const { isOpen, hookCode, changeOpen } = useContext(ModalContext);// Подписываем компонент на контекст

  return (
    <div
      className={`${isOpen ? '' : ' opacity-0 hidden'} fixed top-0 right-0 left-0 bottom-0`}
      onClick={() => changeOpen()}
    >
      <div className="flex justify-center mt-10 ">
        <div className='max-w-[800px] p-10 rounded-md bg-orange-400'>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error*/}
          <ReactMarkdown renderers={renderers}>{hookCode}</ReactMarkdown>
        </div>
      </div>

    </div>


  );
}
export default Modal;