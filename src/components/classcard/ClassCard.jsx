import React from "react";
import { Check } from "lucide-react";

/* 1️⃣ Class details object */
const classDetails = {
  title: "Guitar Master Class",
  level: "Beginner",
  image:
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  duration: "45 min / 60 min",
  levels: "3 Levels",
  type: "Electric Guitar",
  description:
    "Master both acoustic and electric guitar with our comprehensive curriculum covering everything from basic chords to advanced techniques.",
  features: [
    "Individual and group lessons",
    "Music theory fundamentals",
    "Popular songs and classical pieces",
  ],
};

function ClassCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-4 max-w-sm">
      {/* Image */}
      <img
        src={classDetails.image}
        alt={classDetails.title}
        className="rounded-xl w-full h-48 object-cover"
      />

      {/* Title + Level */}
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-lg font-semibold">
          {classDetails.title}
        </h2>
        <span className="px-3 py-1 text-sm border border-yellow-400 text-yellow-600 rounded-full">
          {classDetails.level}
        </span>
      </div>

      {/* Info row */}
      <div className="flex gap-4 text-sm text-gray-500 mt-2">
        <span>⏱ {classDetails.duration}</span>
        <span>⭐ {classDetails.levels}</span>
        <span>🎸 {classDetails.type}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-3">
        {classDetails.description}
      </p>

      {/* Features */}
      <ul className="mt-4 space-y-2">
        {classDetails.features.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-yellow-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassCard;
