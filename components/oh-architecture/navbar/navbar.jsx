import OHButton from '../button/button';
import LinkHover from '../link-hover/link-hover';
import './navbar.css';

const OHNavbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <p>OH Architecture</p>
        </div>
        <div className="oh-navbar-links">
          <LinkHover href="#works" text="Works" />
            <div className="comma">,</div>
          <LinkHover href="#services" text="Studio" />
          <div className="comma">,</div>
          <LinkHover href="#contact" text="Process" />
          <div className="comma">,</div>
          <LinkHover href="#gallery" text="Gallery" />
        </div>
        <div>
          <OHButton text="Get In Touch" />
        </div>
      </nav>
    </header>
  );
};

export default OHNavbar;
