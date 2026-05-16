const SocialLink = ({ href, imgSrc, altText, text = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-cream-200 hover:bg-vermillion/10 border border-gallery-border hover:border-vermillion/30 transition-all duration-300 group"
    >
      <img src={imgSrc} alt={altText} className="h-5 w-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
      {text && (
        <span className="text-sm font-medium text-gallery-dark group-hover:text-vermillion transition-colors">
          {text}
        </span>
      )}
    </a>
  );
};

export default SocialLink;
