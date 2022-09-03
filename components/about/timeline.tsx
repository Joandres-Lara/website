import classesTimeline from "./timeline.module.css";

const years = [2017, 2018, 2019, 2020, 2021, 2022];

export default function Timeline() {
 return (
  <div className="flex flex-row py-10">
   {years.map((year, i) => (
    <div className={`flex flex-col ${classesTimeline.timeline__item}`}>
     <span className={classesTimeline.year}>{year}</span>
     <div className="flex flex-row w-full items-center">
      <span className={classesTimeline.left_separator} />
      <span className={classesTimeline.indicator} />
      <span className={classesTimeline.right_separator} />
     </div>
    </div>
   ))}
  </div>
 );
}
