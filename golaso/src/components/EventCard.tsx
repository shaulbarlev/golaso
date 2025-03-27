import React from "react";

interface EventCardProps {
  title: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow">
      <h4 className="text-xl font-bold mb-2 text-right rtl">{title}</h4>
      <p className="text-gray-600 text-right leading-relaxed rtl">
        {description}
      </p>
    </div>
  );
};

export default EventCard;
