import React from "react";

interface EventButtonProps {
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

const EventButton: React.FC<EventButtonProps> = ({
  title,
  description,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-lg text-right transition-all duration-300 ${
        isSelected
          ? "bg-sky-400 text-white shadow-lg scale-105"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      <h4 className="text-2xl font-bold text-center">{title}</h4>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isSelected ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-lg text-white">{description}</p>
      </div>
    </button>
  );
};

export default EventButton;
