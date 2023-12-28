import Author from "./Author";

function QuoteSection({text, name, title, image, alt}) {

return (
<div className="w-full bg-slate-100 pt-36 pb-36 flex flex-col items-center">
<div className="w-cs flex flex-col gap-10 items-center">
    <p className="text-lg text-center text-slate-950 font-normal">{text}</p>
    <Author
    title={title}
    name={name}
    image={image}
    alt={alt}
    />
</div>
</div>
);
};

export default QuoteSection;