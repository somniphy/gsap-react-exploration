import "./button.css";

const OHButton = ({ href, text }) => {
  return (
    <button>
      <a href={href} className="button-roll">
        <span className="button-text">{text}</span>
        <span className="button-text">{text}</span>
      </a>
    </button>
  );
};

export default OHButton;
