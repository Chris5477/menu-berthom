import lactose from "../assets/icons/milk.png";
import bio from "../assets/icons/bio.png";
import free from "../assets/icons/free.png";
import gluten from "../assets/icons/gluten.png";

export const getIndicator = (key) => {
    if (key === "Lactose") {
        return lactose;
      } else if (key === "Sans alcool") {
        return free;
      } else if (key === "Bio") {
        return bio;
      } else {
        return gluten;
      }
}