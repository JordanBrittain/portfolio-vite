function CaseHero({title}) {
return (
<div className="w-full pt-16 pb-6 lg:pt-32 lg:pb-32 flex flex-col items-center">
    <div className="w-cs flex flex-col gap-8">
        <h1 className="font-display text-4xl lg:text-5xl lg:leading-tight font-semibold w-full text-slate-950">{title}</h1>
    </div>
</div>
);
};

export default CaseHero;