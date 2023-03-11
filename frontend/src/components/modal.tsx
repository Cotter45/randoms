import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import '../modal.css';

const ModalContext = React.createContext(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return
    }

    setValue(modalRef.current);
  }, [modalRef]);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ onClose, children }: IModalProps) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id='modal'>
      <div id='modal-background' onClick={onClose} />
      <div className='fade_in' id='modal-content'>{children}</div>
    </div>,
    modalNode
  );
}