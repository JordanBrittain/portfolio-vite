function SectionHeader({title}) {
    return (
        <div id="section-header" className="w-full pt-14 pb-8 px-site">
            <div className="border-t border-zinc-200 py-7 flex flex-row gap-3 items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <h5 className="text-zinc-950 text-base font-medium">{title}</h5>
            </div>

        </div>
    )
}

export default SectionHeader;