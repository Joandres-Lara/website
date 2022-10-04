import classesTimeline from "./timeline.module.css";

// TODO: Make this data dynamic
const years = [2017, 2018, 2019, 2020, 2021, 2022];

export default function Timeline() {
 return (
  <div className="flex flex-col-reverse md:flex-row items-center py-10">
   {years.map((year, i) => (
    <div key={i} className={classesTimeline.timeline__item}>
     <span className={classesTimeline.year}>{year}</span>
     <div className={classesTimeline.timeline__icon}>
      <span className={classesTimeline.left_separator} />
      <span className={classesTimeline.indicator} />
      <span className={classesTimeline.right_separator} />
     </div>
    </div>
   ))}
  </div>
 );
}
