import React, { useEffect, useState } from "react";

function Home() {
   const [scroll, setScroll] = useState(0);
   const [zIndex, setZIndex] = useState(0);
   useEffect(() => {
      const handleWheelEvent = (e) => {
         setScroll((prev) => prev + e.wheelDeltaY);
      };
      window.addEventListener("wheel", handleWheelEvent);
      return () => {
         window.removeEventListener("wheel", handleWheelEvent);
      };
   }, []);

   useEffect(() => {
      if (scroll <= -400) {
         console.log("next");
         setScroll(0);
         setZIndex(1200);
      } else if (scroll >= 400) {
         console.log("prev");
         setScroll(0);
         setZIndex(0);
      }
   }, [scroll]);

   return (
      <div className="App-body">
         <div className="MainPage" style={{ zIndex: `${600 - zIndex}` }}>
            헤헤헤
         </div>
         <div className="MainPage" style={{ zIndex: `${zIndex - 600}` }}>
            프로젝트들...
         </div>
      </div>
   );
}
export default Home;
