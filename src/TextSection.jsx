function TextSection({ title, copy, chopped = false }) {
  // Use a conditional class name based on the 'chopped' prop
  const containerClass = `w-full ${
    chopped ? "pt-0 lg:pt-0 2xl:pt-0" : "pt-12 lg:pt-20 2xl:pt-36"
  } pb-14 lg:pb-20 2xl:pb-32 flex flex-col items-center`;

  return (
    <div className={containerClass}>
      <div className="w-cs flex flex-col gap-2">
        <h1 className="text-xl 2xl:text-2xl font-bold w-full text-slate-950">
          {title}
        </h1>

        <div className="text-lg 2xl:text-xl 2xl:leading-8 font-normal text-slate-950 flex flex-col gap-4">
          {copy.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextSection;
