import React, { useEffect } from 'react';
import CornerPattern from './CornerPattern';
import { X } from 'lucide-react';
import useOutsideClick from '@/hooks/useOutsideClick';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useOutsideClick(() => {
    if (isOpen) onClose();
  });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 flex justify-center items-center p-4 md:p-8 bg-black/60 text-sm sm:text-base "
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-lightBeige "
          aria-label="닫기"
        >
          <X />
        </button>
        <div
          ref={modalRef}
          className="w-full max-w-6xl h-[40rem] p-2 sm:p-4 bg-lightBeige/40 dark:bg-lightNavy/50 z-40 rounded-xl border-2 border-darkBeige dark:border-lighterNavy"
        >
          <div className="relative w-full h-full p-4 bg-lightBeige dark:bg-lightNavy border-2 border-darkBeige dark:border-lighterNavy">
            <CornerPattern borderColor="border-darkBeige dark:border-lighterNavy" />
            <div className="relative w-full h-full p-4 sm:p-6 overflow-auto hide-scrollbar">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
