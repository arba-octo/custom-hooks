'use client';

import { useContext } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import SyntaxHighlighter from 'react-syntax-highlighter';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ModalHookCodeContext } from '@/context/ModalHookCodeContext';
import { ModalOpenContext } from '@/context/ModalOpenContext';

function Modal() {

  const { hookCode, hookName } = useContext(ModalHookCodeContext);
  const { isOpen, toToggleOpen } = useContext(ModalOpenContext);

  return (
    <div className={`${isOpen ? '' : 'hidden'} fixed top-0 right-0 left-0 bottom-0`}>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-white opacity-50" onClick={toToggleOpen}>
      </div>
        
      <div className="relative top-50 mt-10 mx-auto w-[800px] bg-slate-300 p-3 z-[102]">
        <h1 className="font-bold">{ hookName }</h1>
        <SyntaxHighlighter language="javascript" style={docco}>
          { hookCode }
        </SyntaxHighlighter>
      </div>

    </div>

  );
}
export default Modal;