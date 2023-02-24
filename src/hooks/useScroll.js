import { useState, useEffect, useCallback} from "react";

const useScroll = () => {
  const [prevPos, setPrevPos] = useState(document.body.scrollHeight);
  const [visability, setVisability] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", setPositionByScroll);

    return () => {
      window.removeEventListener("scroll", setPositionByScroll);
    };
  }, []);

  const setPositionByScroll = useCallback(() => {
    if (window.pageYOffset >= 1190) {
      setVisability(true);
    }
  }, [visability]);

  const scrollToTop = useCallback(() => {
    setPrevPos(window.pageYOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToDown = useCallback(() => {
    if (prevPos) {
      window.scrollTo({ top: prevPos, behavior: "smooth" });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [prevPos]);

  const scrollToItem = useCallback(() => {
    setPrevPos(window.pageYOffset);
    window.scrollTo({ top: 400, behavior: "smooth" });
  }, [prevPos]);

  //   console.log('useScroll');
  //   console.log("!---Curr " + currPos);
  //   console.log("!---Prev " + prevPos);

  return {visability, scrollToItem, scrollToTop, scrollToDown };
};

export default useScroll;
