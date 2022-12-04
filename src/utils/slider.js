import SliderOne from "../components/SlideOne";
import SliderThree from "../components/SliderThree";
import SlideTwo from "../components/slideTwo";

export const slider = (index) => {
  if (index === 0) {
    return <SliderOne />;
  } else if (index === 1) {
    return <SlideTwo />;
  } else {
    return <SliderThree />;
  }
};
