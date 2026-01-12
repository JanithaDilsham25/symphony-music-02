import React from 'react'
import { useState} from "react";
import StaffComponent from './staffComponent'
import Topic from "../topicComponent/Topic";
import StaffMobileCarousel from './StaffMobile';
import { staffData } from "./staffData";

export default function StaffSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full">
      {/* TITLE */}
      <div className="flex justify-center">
        <Topic
          title="Meet Our Staff"
          subtitle="Our faculty consists of professional musicians and dedicated educators committed to your success."
        />
      </div>

      {/* MOBILE CAROUSEL */}
      {!showAll && (
        <div className="md:hidden">
          <StaffMobileCarousel onShowAll={() => setShowAll(true)} />
        </div>
      )}

      {/* STAFF GRID */}
      <div
        className={`
          ${showAll ? "grid" : "hidden md:grid"}
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          lg:gap-5
          md:gap-0
          gap-0
          md:pt-[64px]
          pt-[24px]
          mx-auto
          xl:max-w-[1327.94px]
          lg:max-w-[1100px]
          md:max-w-[800px]
          justify-items-center
          md:px-6
          lg:px-6
          xl:px-2
        `}
      >
        {staffData.map((staff) => (
          <StaffComponent key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}