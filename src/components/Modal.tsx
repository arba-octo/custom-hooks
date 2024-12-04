'use client';

import { ModalHookCodeContext } from '@/context/ModalHookCodeContext';
import { ModalCloseContext } from '@/context/ModalCloseContext';
import { useContext } from 'react';

function Modal() {

  const { hookCode } = useContext(ModalHookCodeContext);
  const { isClose, toClose } = useContext(ModalCloseContext);

  return (
    <div className={`${isClose ? 'hidden' : ''} fixed top-0 right-0 left-0 bottom-0 bg-amber-100`}
      onClick={toClose}>
      <div className="flex justify-center mt-10">
        <div className='w-[800px] bg-orange-400 p-3'>
          { hookCode }
        </div>
      </div>
    </div>

  );
}
export default Modal;