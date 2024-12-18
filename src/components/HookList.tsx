'use client';

import { Inter700 } from '@/styles/fonts';
import { useContext } from 'react';
import { ModalOpenContext } from '@/context/ModalOpenContext';
import { ModalHookCodeContext } from '@/context/ModalHookCodeContext';

type TProps = {
    hooksCollection: {
        hookName: string,
        hookCode: string
    }[]
}

const HookList = ({ hooksCollection }: TProps) => {
  const { toToggleOpen } = useContext(ModalOpenContext);
  const { toDoHook } = useContext(ModalHookCodeContext);

  return (
    <div className="bg-slate-100 pb-[50px]">
      <div className="max-w-7xl mx-auto px-20 max-[768px]:px-5">
        <h1 className={`${Inter700.className} text-[35px] text-center`}>
                Hooks
        </h1>
        <ul className="text-slate-700">
          {hooksCollection.map((hookItem) => {
            return <li
              className="flex justify-between items-center bg-white mb-3 px-5 py-3 rounded-xl text-[26px] hover:text-slate-400 cursor-pointer"
              key={hookItem.hookName}
              onClick={() => {
                toToggleOpen();
                toDoHook(hookItem.hookCode, hookItem.hookName);
              }}>
              {hookItem.hookName}
              <svg viewBox="0 0 16 16" fill="currentColor" width="20px" height="20px">
                <path d="M14.904 0H6.43105C5.82718 0 5.33594 0.463787 5.33594 1.03384V3.55556H7.11314V1.67777C7.06052 1.67777 7.11314 1.6281 7.11314 1.67777L14.2167 1.77778L14.222 8.88889C14.2746 8.88889 14.222 8.93859 14.222 8.88889H12.4395V10.6667H14.904C15.5079 10.6667 15.9992 10.3479 15.9992 9.77778V1.03384C15.9991 0.463787 15.5079 0 14.904 0Z" fill="currentColor"></path>
                <path d="M9.64958 5.33325H1.0179C0.456834 5.33325 0.000381877 5.78985 0.000381877 6.3511L-3.81347e-06 14.9821C2.71471e-05 15.5433 0.456452 15.9999 1.01752 15.9999H9.64958C10.2106 15.9999 10.6671 15.5433 10.6671 14.9821L10.6671 6.3511C10.6672 5.78985 10.2106 5.33325 9.64958 5.33325ZM8.88902 14.2221H1.77721L1.77722 7.11103H8.88902C8.88902 7.0621 8.93794 7.11103 8.88902 7.11103V14.2221Z" fill="currentColor"></path>
              </svg>
            </li>;
          })}
        </ul>
      </div>

    </div>
  );
};
export default HookList;