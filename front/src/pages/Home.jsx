/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import ProfileContainer from "../containers/ProfileContainer";
import WorksContainer from "../containers/WorksContainer";
import ContactContainer from "../containers/ContactContainer";
import { css, jsx } from "@emotion/react";
import { Player, play } from "@lottiefiles/react-lottie-player";
import scrollVideo from "../assets/scrollVideo.json";

const CurrntPageStyle = (isCur) =>
   `z-index:${isCur ? "300" : "-300"};
   opacity:${isCur ? "1" : "0"}; 
   transition: opacity 1s linear 0s`;

const ScrollContainer = () =>
   `position:fixed;
   bottom:10px;
   width:1200px; 
   height:100px;
   text-align:center;`;

const ScrollVideoStyle = (showScroll) =>
   `opacity:${showScroll ? 0.5 : 0}; 
   width:100px;
   height:100px;`;

function Home() {
   const [curPage, setCurPage] = useState(0);
   const [transition, setTransition] = useState(false);
   const [showScroll, setShowScroll] = useState(true);
   const [touchLast, setTouchLast] = useState(false);

   useEffect(() => {
      const handleWheelEvent = (e) => {
         if (transition) {
            return;
         }

         setShowScroll(false);
         if (e.wheelDeltaY < 0) {
            setCurPage((prev) => (prev >= 2 ? prev : prev + 1));
            setTimeout(() => setShowScroll(true), 2000);
         } else {
            setCurPage((prev) => (prev <= 0 ? prev : prev - 1));
            setTimeout(() => setShowScroll(true), 2000);
         }
      };

      const handleTransitionStart = () => setTransition(true);
      const handleTransitionEnd = () => setTransition(false);

      window.addEventListener("wheel", handleWheelEvent);
      window.addEventListener("transitionstart", handleTransitionStart);
      window.addEventListener("transitionend", handleTransitionEnd);
      return () => {
         window.removeEventListener("wheel", handleWheelEvent);
         window.removeEventListener("transitionstart", handleTransitionStart);
         window.removeEventListener("transitionend", handleTransitionEnd);
      };
   }, [transition]);
   useEffect(() => {
      if (curPage >= 2) {
         setTouchLast(true);
      }
   }, [curPage]);

   const handleVideoEvent = (e) => {
      if (e === "loop") {
         if (showScroll) {
            setShowScroll(false);
         } else {
            setShowScroll(true);
         }
      }
   };

   return (
      <div className="App-body">
         <div
            className="MainPage"
            css={css`
               ${CurrntPageStyle(curPage === 0)}
            `}>
            <ProfileContainer />
         </div>
         <div
            className="MainPage"
            css={css`
               ${CurrntPageStyle(curPage === 1)}
            `}>
            <WorksContainer />
         </div>
         <div
            className="MainPage"
            css={css`
               ${CurrntPageStyle(curPage === 2)}
            `}>
            <ContactContainer />
         </div>
         {!touchLast && (
            <div
               css={css`
                  ${ScrollContainer()}
               `}>
               <Player
                  src={scrollVideo}
                  onEvent={(e) => handleVideoEvent(e)}
                  speed="0.9"
                  css={css`
                     ${ScrollVideoStyle(showScroll)}
                  `}
                  renderer="svg"
                  controls
                  loop
                  autoplay></Player>
            </div>
         )}
      </div>
   );
}
export default Home;
