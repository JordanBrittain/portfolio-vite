function Media({ type, ratio, source, alt }) {
  const aspectRatioClasses = {
    "rectangle": "aspect-2/1",
    "square": "aspect-square",
    // Add more mappings as needed
  };

  const aspectRatioClass = aspectRatioClasses[ratio] || "aspect-w-16 aspect-h-9";

  return (
    <div className="rounded-lg overflow-hidden">
      {type === "image" && (
        <img src={source} alt={alt} className={`object-cover ${aspectRatioClass}`} />
      )}
      {type === "video" && (
        <video src={source} muted loop autoPlay className={`object-cover ${aspectRatioClass}`} />
      )}
    </div>
  );
}

export default Media;
