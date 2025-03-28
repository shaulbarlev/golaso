"use client";

import React, { useState } from "react";
import EventButton from "@/components/EventButton";

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState("bdays");

  const eventTypes = [
    {
      id: "bdays",
      title: "ימי הולדת ומסיבות כיתה",
      description:
        "ימי הולדת שהופכים לחוויה ספורטיבית סוחפת, מלאה באקשן, צחוק וגיבוש. אנחנו נתאים לכם את הפעילויות ונדאג לאירוע שאף אחד לא ישכח.",
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=300&fit=crop",
      ],
    },
    {
      id: "school",
      title: "בתי ספר",
      description:
        "גולאסו מביאים את חווית הספורט המושלמת לבתי ספר! נתאים את האירוע לצרכים שלכם עם פעילויות מרתקות שמחזקות את הגיבוש יוצרות הנאה, והכי חשוב - זכרונות שילוו את התלמידים/ות שנים קדימה.",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=300&fit=crop",
      ],
    },
    {
      id: "company",
      title: "אירועי חברה / עיריות",
      description:
        "מחפשים לשבור את שגרת העבודה בדרך יחודית? בא לכם לפנק את תושבי העיר, הילדים והילדות ואת המשפחות? גולאסו זו הכתובת.",
      images: [
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop",
      ],
    },
  ];

  return (
    <section id="events" className="py-16 px-5">
      <h3 className="text-3xl font-semibold text-center mb-10">
        גולאסו מתאים לכל סוג אירוע!
      </h3>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-6">
          {eventTypes.map((event) => (
            <div key={event.id}>
              <EventButton
                title={event.title}
                description={event.description}
                isSelected={selectedEvent === event.id}
                onClick={() => setSelectedEvent(event.id)}
                images={event.images}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
