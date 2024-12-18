'use client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import SyntaxHighlighter from 'react-syntax-highlighter';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ModalHookCodeContext } from '@/context/ModalHookCodeContext';
import { ModalCloseContext } from '@/context/ModalCloseContext';
import { useContext } from 'react';

function Modal() {

  const { hookCode, hookName } = useContext(ModalHookCodeContext);
  const { isClose, toClose } = useContext(ModalCloseContext);

  if (isClose) {
    return null;
  }

  return (
    <div>
      <div className={`${isClose ? 'hidden' : ''} fixed top-0 right-0 left-0 bottom-0 bg-white opacity-5`} onClick={toClose}>
      </div>
      <div className={`${isClose ? 'hidden' : ''} mt - 10 mx-auto w-[800px] bg-slate-300 p-3`}>
        <h1 className="font-bold">{ hookName }</h1>

        <SyntaxHighlighter language="javascript" style={docco}>
          { hookCode }
        </SyntaxHighlighter>

      </div>
    </div>

  );
}
export default Modal;