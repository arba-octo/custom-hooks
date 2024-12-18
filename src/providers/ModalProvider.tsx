'use client';

import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('@/components/Modal'), {
  ssr: false,
});

function ModalProvider() {
  return (
    <>
      <Modal/>
    </>
  );
}

export default ModalProvider;