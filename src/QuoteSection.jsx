import Author from "./Author";

function QuoteSection({text, name, title, image, alt}) {

return (
<div className="w-full bg-gray-950 pt-36 pb-36 2xl:pt-48 2xl:pb-48 flex flex-col items-center">
<div className="w-cs flex flex-col gap-10">
    <p className="text-2xl leading-9 text-slate-50 font-medium">{text}</p>
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