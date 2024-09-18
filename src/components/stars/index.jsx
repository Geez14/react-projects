import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarsMetric = ({ noOfStars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function onPointerEnter(index) {
    setHover(index);
  }
  function onPointerLeave() {
    setHover(rating);
  }
  function onClick(index) {
    setRating(index);
  }

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={()=>{onClick(index)}}
            onPointerEnter={() => {
              onPointerEnter(index);
            }}
            onPointerLeave={() => {
              onPointerLeave();
            }}
            size={100}
          />
        );
      })}
    </div>
  );
};

// const Star = ({
//   key,
//   onClick = null,
//   onPointerEnter = null,
//   onPointerLeave = null,
//   size = 10,
// }) => {
//   return (
//     <div
//       id="Star"
//       key={key}
//       onClick={onClick}
//       onPointerEnter={onPointerEnter}
//       onPointerLeave={onPointerLeave}
//       style={{
//         "--star-size": `${size}px`, // this is how we can set css variables in react
//       }}
//     >
//       {size}
//     </div>
//   );
// };

export default StarsMetric;
