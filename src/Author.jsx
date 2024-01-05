function Author({name, title, image, alt}) {
return (
<div className="flex flex-row gap-5 items-center">
    <img className="w-12 h-12 rounded-full object-cover" src={image} alt={alt}></img>
    <div className="flex flex-col gap-0">
        <p className="text-base text-slate-50 font-medium">{name}</p>
        <p className="text-base text-slate-300 font-normal">{title}</p>
    </div>
</div>

);
}

export default Author;