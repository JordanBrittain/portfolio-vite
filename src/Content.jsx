import Media from "./Media";
import Caption from "./Caption";

function Content({ type, ratio, source, alt, caption, captionText }) {
    return (
<div className="flex flex-1 flex-col gap-5 items-center">
    <Media
    source={source}
    type={type}
    ratio={ratio}
    alt={alt}
    />
    {caption === true && (<Caption copy={captionText}/>)}

</div>
    );
};

export default Content;