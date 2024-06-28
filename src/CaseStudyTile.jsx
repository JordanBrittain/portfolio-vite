import { Link } from "react-router-dom";
import Button from "./Button";

function CaseStudyTile({ imgSrc, title, overline, target }) {
  return (
    <div className="flex flex-col py-16 lg:flex-row gap-4 lg:py-20 2xl:py-24 border-t border-slate-200">
      <img
        className="aspect-4/3 lg:w-3/5 rounded-lg border border-slate-200"
        src={imgSrc}
      ></img>
      <div className="flex flex-col gap-10 justify-between lg:w-80 2xl:w-96 mx-auto lg:-translate-y-5 lg:justify-center lg:gap-10">
        <div className="flex flex-col gap-3">
      <div className="text-lg lg:text-xl text-slate-700 font-normal 2xl:text-lg">{overline}</div>
        <div className="text-lg text-slate-950 font-semibold lg:text-xl 2xl:text-3xl 2xl:leading-normal">{title}</div>
        </div>
        <Link to={target}>
          <Button text="Read case study" />
        </Link>
      </div>
    </div>
  );
}

export default CaseStudyTile;
