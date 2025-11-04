"use client";
import { ReactNode, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  // Handle closing animation
  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 300); // match duration of animation
  };

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      onClick={handleClose} // click on backdrop closes modal
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-3/4 h-3/4 p-6 relative overflow-y-auto transform transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2 border-gray-100 border-[0.5px] rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer" onClick={handleClose}>
          <IoMdClose size={20} className="" />
        </button>

        {/* Title */}
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

        {/* Content */}
        <div className="text-gray-700 text-lg">{children}</div>
      </div>
    </div>
  );
}
