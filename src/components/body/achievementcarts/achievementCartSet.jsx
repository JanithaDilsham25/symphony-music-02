import iconStudent from "../../../assets/achievementcart/iconStudent.png";
import iconInstrument from "../../../assets/achievementcart/iconInstrument.png";
import iconAward from "../../../assets/achievementcart/iconAward.png";
import iconExcellence from "../../../assets/achievementcart/iconExcellence.png";
import AchievementCart from "./achievementCart";

export default function AchievementCartSet() {
  return (
    <div className="xl:w-11/12 md:w-7/8 grid grid-cols-2 md:grid-cols-4  justify-center items-center">
      <AchievementCart
        icon={iconStudent}
        count="2,500+"
        title="Students Enrolled"
      />
      <AchievementCart
        icon={iconInstrument}
        count="20+"
        title="Instruments Taught"
      />

      <div className="hidden md:block">
        <AchievementCart icon={iconAward} count="50+" title="Awards Won" />
      </div>

      <div className="hidden md:block">
        <AchievementCart
          icon={iconExcellence}
          count="15+"
          title="Years of Excellence"
        />
      </div>
    </div>
  );
}
