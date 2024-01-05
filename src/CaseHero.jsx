function CaseHero({title, description}) {
return (
<div className="w-full pt-32 flex flex-col items-center">
    <div className="w-cs flex flex-col gap-8">
        <h1 className="font-display text-6xl font-semibold w-full text-slate-950">{title}</h1>
        <div className="text-lg 2xl:text-xl 2xl:leading-8 font-normal text-slate-950 flex flex-col gap-4">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
    </div>
</div>
);
};

export default CaseHero;