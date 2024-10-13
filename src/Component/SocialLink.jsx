const SocialLink = ({ href, imgSrc, altText, text = "" }) => {
  return (
    <div className="w-auto bg-transparent backdrop-blur-lg text-white rounded-xl shadow-lg p-2 mx-2 hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-300 hover:text-gray-800 transition duration-300">
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center">
        <img src={imgSrc} alt={altText} className="mx-3 h-8" />
        {text && <span>{text}</span>}
      </a>
    </div>
  );
};

export default SocialLink;
