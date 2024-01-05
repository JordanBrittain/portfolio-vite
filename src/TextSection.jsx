function TextSection({title, copy}) {
    return (
<div className="w-full pt-24 pb-20 flex flex-col items-center">
    <div className="w-[680px] flex flex-col gap-2">
        <h1 className="text-xl font-bold w-full text-slate-950">{title}</h1>
        <p className="text-lg font-normal text-slate-950">{copy}</p>
    </div>
</div>

    );
};

export default TextSection;