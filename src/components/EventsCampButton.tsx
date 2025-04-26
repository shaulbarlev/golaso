"use client";

import MainButton from "./MainButton";
import { useRouter } from "next/navigation";
const EventsCampButton = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row gap-4">
      <MainButton onClick={() => router.push("/camp")} text="קייטנות ⛺️" />
      <MainButton onClick={() => router.push("/events")} text="אירועים 🎉" />
    </div>
  );
};

export default EventsCampButton;
