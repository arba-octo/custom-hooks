'use client';

import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { renderers } from '@/utils/renderers';
import { ModalContext } from '@/context/ModalContext';

function Modal() {

  const { isOpen, handlToggle } = useContext(ModalContext);

  return (
    <div className={`${isOpen ? '' : 'hidden'} fixed top-0 right-0 left-0 bottom-0 bg-amber-100`}>
      <div className="flex justify-center mt-10">
        <div className='max-w-[800px] bg-orange-400 mx-10'>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error*/}
          <ReactMarkdown renderers={renderers}>{'hookCode'}</ReactMarkdown>
        </div>
      </div>
    </div>


  );
}
export default Modal;