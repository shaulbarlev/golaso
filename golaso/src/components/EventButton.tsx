import React from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface EventButtonProps {
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  images?: string[];
}

const EventButton: React.FC<EventButtonProps> = ({
  title,
  description,
  isSelected,
  onClick,
  images,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-lg text-right transition-all duration-300 ${
        isSelected
          ? "bg-sky-300 text-white shadow-lg scale-105"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      <h4 className="text-2xl text-black font-bold text-center">{title}</h4>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isSelected ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-lg font-semibold text-black mb-4 p-4">
          {description}
        </p>
        {images && (
          <div className="flex">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${title} - תמונה ${index + 1}`}
                className="
              w-1/2 h-48 object-cover rounded-lg p-1"
              />
            ))}
          </div>
        )}
        <WhatsAppButton
          className="mx-auto shadow-xl mt-4"
          text="צור / צרי קשר"
          href="https://wa.me/972546123456"
        />
      </div>
    </button>
  );
};

export default EventButton;
