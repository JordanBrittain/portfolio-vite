function HeaderSection({title}) {
    
    const containerClass = `w-full pt-12 lg:pt-20 2xl:pt-32 pb-14 lg:pb-16 2xl:pb-20 flex flex-col items-center`;
    
    return (
      <div className={containerClass}>
        <div className="w-cs">
          <h1 className="text-3xl lg:text-4xl 2xl:text-4xl font-bold w-full text-slate-950">
            {title}
          </h1>
        </div>
      </div>
    );
  }
  
  export default HeaderSection;
  