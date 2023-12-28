function CaseHero({title, description}) {
return (
<div className="w-full pt-32 flex flex-col items-center">
    <div className="w-[680px] flex flex-col gap-8">
        <h1 className="font-display text-5xl font-medium w-full text-slate-950">{title}</h1>
        <p className="text-lg font-normal text-slate-950">{description}</p>
    </div>
</div>
);
};

export default CaseHero;