import LinkHover from "../link-hover/link-hover";
import "./button.css";

const OHButton = ({ title }) => {
  return (
    <div className="button-container">
      <button>
        <LinkHover href="#contact" text={title} />
      </button>
    
    </div>
  );
};

export default OHButton;
