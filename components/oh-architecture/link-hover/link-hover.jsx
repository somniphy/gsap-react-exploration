

const LinkHover = ({ href, text }) => {
  return (
    <a href={href} className="roll">
      <span className="text">{text}</span>
      <span className="text">{text}</span>
    </a>
  );
};
export default LinkHover;