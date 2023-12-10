function SectionHeader({title}) {
    return (
        <div className="w-full pt-14 pb-8 px-site">
            <div className="border-t border-zinc-200 py-7 flex flex-row gap-3 items-center">
                <div className="w-2 h-2 bg-zinc-950 rounded-full"></div>
                <h5 className="text-zinc-950 text-base">{title}</h5>
            </div>

        </div>
    )
}

export default SectionHeader;