// import React from "react";

// export default function Cells({ClickedArray, handleClick}){
//     return(
//         <div className="board">
//             {ClickedArray.map((item, index) =>{
//                 if(item === ""){
//                     return(
//                         <div key={index} className="cell" onClick={() => handleClick(index)}>
//                             {item}
//                         </div>
//                     )
//                 }else{
//                     return(
//                         <div key={index} className="cell clicked">
//                             {item}
//                         </div>
//                     )
//                 }
//             })}
//         </div>
//     )
// }

import React from "react";

function Square({ clickedArray, handleClick }) {
  return (
    <div className="board">
      {clickedArray.map((item, index) => {
        if (item === "") {
          return (
            <div
              key={index}
              className="square"
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          );
        } else {
          return (
            <div key={index} className="square clicked">
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Square;