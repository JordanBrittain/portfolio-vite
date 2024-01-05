function TextSection({title, copy}) {
    return (
<div className="w-full pt-24 pb-14 lg:pb-20 2xl:pt-40 2xl:pb-32 flex flex-col items-center">
    <div className="w-cs flex flex-col gap-2">
        <h1 className="text-xl 2xl:text-2xl font-bold w-full text-slate-950">{title}</h1>
        <p className="text-lg 2xl:text-xl 2xl:leading-8 font-normal text-slate-950">{copy}</p>
    </div>
</div>

    );
};

export default TextSection;