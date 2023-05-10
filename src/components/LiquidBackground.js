import React from "react";
import Lottie from "react-lottie";
import animationData from "../utils/liquidBackground.json";

class LiquidBackground extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          //   height={`${"100%"}`}
          //   width={`${"100%"}`}
          //   width={400}
          //   color={"red"}
        />
      </div>
    );
  }
}

export default LiquidBackground;