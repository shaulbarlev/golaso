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
    },
    {
      id: "school",
      title: "בתי ספר",
      description:
        "גולאסו מביאים את חווית הספורט המושלמת לבתי ספר! נתאים את האירוע לצרכים שלכם עם פעילויות מרתקות שמחזקות את הגיבוש יוצרות הנאה, והכי חשוב - זכרונות שילוו את התלמידים/ות שנים קדימה.",
    },
    {
      id: "company",
      title: "אירועי חברה / עיריות",
      description:
        "מחפשים לשבור את שגרת העבודה בדרך יחודית? בא לכם לפנק את תושבי העיר, הילדים והילדות ואת המשפחות? גולאסו זו הכתובת.",
    },
  ];

  return (
    <section id="events" className="py-16 px-5">
      <h3 className="text-3xl font-semibold text-center mb-10">
        גולאסו מתאים לכל סוג אירוע!
      </h3>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventTypes.map((event) => (
            <EventButton
              key={event.id}
              title={event.title}
              description={event.description}
              isSelected={selectedEvent === event.id}
              onClick={() => setSelectedEvent(event.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
