import Content from "./Content";

function ContentSection({style, contentOne, contentTwo}) {

return (
<div className={`px-site pt-10 pb-16 flex flex-col lg:flex-row ${style === 'inline' ? 'w-cs px-0 mx-auto pt-0' : 'w-full'} gap-16`}>

<Content
type={contentOne.type} 
ratio={style === 'single' ? 'rectangle' : 'square'}
source={contentOne.source}
alt={contentOne.alt}
caption={contentOne.caption}
captionText={contentOne.captionText}
/>

{style === 'double' && contentTwo && 
<Content 
type={contentTwo.type} 
ratio={style === 'single' ? 'rectangle' : 'square'}
source={contentTwo.source}
alt={contentTwo.alt}
caption={contentTwo.caption}
captionText={contentTwo.captionText}
/>
}

</div>


);

};

export default ContentSection;