import useScroll from "../../hooks/useScroll";
import scrollToDownImg from "./scrollBtnDown.png";
import scrollToUpImg from "./scrollBtnUp.png";
import "./scrollBtnGroup.scss";

const ScrollBtnGroup = () => {
  const { scrollToTop, scrollToDown, visability } = useScroll();

  return (
    <div className={visability ? "container__show" : "container"}>
      <div className="container__scroll-button-group">
        <button onClick={scrollToTop} type="button">
          <img src={scrollToUpImg} alt="scrollDown"></img>
        </button>
        <button onClick={scrollToDown} type="button">
          <img src={scrollToDownImg} alt="scrollDown"></img>
        </button>
      </div>
    </div>
  );
};

export default ScrollBtnGroup;
