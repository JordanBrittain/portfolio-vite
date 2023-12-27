import ArrowIcon from "./ArrowIcon";
import { Link } from "react-router-dom";

function CaseStudyTile ({ imgSrc, title, subtext, target }) {
return (
    <Link to={target}>
    <div className="flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 group">
        <img className="aspect-4/3 rounded-lg" src={imgSrc}></img>
<div className="flex flex-row gap-8 items-end justify-between lg:items-start lg:justify-start lg:flex-col lg:gap-4">

        <div className="flex flex-col flex-1">
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-base">{subtext}</div>
        </div>

<div className="w-14 h-14 group-hover:bg-primary-500 transition-all duration-500 rounded-full bg-slate-200 flex items-center justify-center">
    <div className="group-hover:fill-slate-50 fill-slate-950 w-7 h-7 -rotate-90 transition-all duration-500"><ArrowIcon/>
    </div>
    </div>

        </div>
    </div>
    </Link>
)
}

export default CaseStudyTile;