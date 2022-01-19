import { useEffect } from "react";
import lottie from "lottie-web";
import { replaceColor } from "lottie-colorify";
import loaderAnimation from "public/lottie/loader.json";
import FullscreenContainer from "components/FullscreenContainer";

type LoaderProps = {
  message?: string;
};

// TODO: FIX THIS BUG
export default function Loader({ message }: LoaderProps) {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#loaderContainer") as Element,
      animationData: replaceColor("#eeeeee", "#eeeeee", loaderAnimation),
    });
  }, []);
  return (
    // TODO: FIX BUG WHERE LOADER STAYS ON SCREEN
    // <FullscreenContainer>
    //   <div id="loaderContainer" className="w-56" />
    //   {message && <h5>{message}</h5>}
    // </FullscreenContainer>
    <div className="h-96 grid place-items-center">
      <div>Loading...</div>
      {message && <h5>{message}</h5>}
    </div>
  );
}
