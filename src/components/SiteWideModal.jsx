import React, { useRef, useEffect } from "react";

const SiteWideModal = ({ isOpen, setIsOpen, children, className = "" }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-[2px] flex items-center justify-center z-[1000] px-2.5">
      <div
        className="bg-[#232626] lg:p-6 p-4 rounded-lg max-w-xs w-full shadow-lg max-h-[30rem] overflow-y-scroll relative"
        ref={modalRef}
      >
        {" "}
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
};

export default SiteWideModal;
