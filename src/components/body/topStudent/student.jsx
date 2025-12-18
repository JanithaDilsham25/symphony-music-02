import Topic from "../topicComponent/Topic";
import LeftTopStudent from "./leftTopStudent";
import RightTopStudent from "./rightTopStudent";

export default function Student() {
  return (
    <>
      {/* desktop */}
      <section className="hidden lg:block relative">
        <div className="w-[1330px] mx-auto pt-[40px] ">
         <div className="flex justify-center">
             <Topic
            title="Our Top Students"
            subtitle="Meet our star performers who have achieved excellence through dedication and passion."
            
          />
         </div>

          <div className="relative mt-[80px]">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-[200px] absolute left-0 top-0">
              <LeftTopStudent />
              <LeftTopStudent />
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-[200px] absolute left-[541px] top-[379px]">
              <RightTopStudent />
              <RightTopStudent />
            </div>
          </div>
        </div>
      </section>
{/* mobile */}
      <section className="lg:hidden w-full">
        <div className="flex justify-center">
             <Topic
            title="Our Top Students"
            subtitle="Meet our star performers who have achieved excellence through dedication and passion."
            
          />
         </div>

        <div className="flex flex-col items-center gap-[32px] py-[32px]">
          <LeftTopStudent mobile />
          <RightTopStudent mobile />
          <LeftTopStudent mobile />
          <RightTopStudent mobile />
        </div>
      </section>
    </>
  );
}
