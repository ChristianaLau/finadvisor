"use client";
import { useState } from "react";
import Modal from "./Modal";

export default function PopUpModal({ buttontype = "text", text = "Open", children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {buttontype === "text" ? text : buttontype === "add" ? "+" : text}
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </div>
  );
}
