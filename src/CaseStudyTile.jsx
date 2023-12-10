function CaseStudyTile ({ imgSrc, title, subtext }) {
return (
    <div className="flex flex-col gap-6">
        <img className="aspect-4/3 rounded-lg" src={imgSrc}></img>
        <div className="flex flex-col">
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-base">{subtext}</div>
        </div>
    </div>
)
}

export default CaseStudyTile;