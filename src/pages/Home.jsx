/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import ProfileContainer from "../containers/ProfileContainer";
import WorksContainer from "../containers/WorksContainer";
import ContactContainer from "../containers/ContactContainer";
import LandingContainer from "../containers/LandingContainer";
import { css } from "@emotion/react";
import { Player } from "@lottiefiles/react-lottie-player";
import scrollVideo from "../assets/scrollVideo.json";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/pageIndex";

const CurrntPageStyle = (isCur) =>
   ` z-index:${isCur ? 1 : -1};
   opacity:${isCur ? "1" : "0"}; 
   transition: opacity 0.5s linear 0s`;

const PageChangeContainer = () =>
   `position:absolute;
   bottom:10px;
   width:100%; 
   height:100px;
   text-align:center;
   line-height:100px;
   z-index:10;
   `;
const ScrollVideoStyle = (showScroll) =>
   `opacity:${showScroll ? 0.5 : 0}; 
   width:100px;
   height:100px;
   transition: opacity 1s linear 0s`;
const PageChangeLeft = () => `
   position:absolute;
   left:50px;
   &:hover {
      cursor:pointer;
   }
`;
const PageChangeRight = () => `
   position:absolute;
   right:50px;
   &:hover {
      cursor:pointer;
   }
`;

function Home() {
   const [showScroll, setShowScroll] = useState(true);
   const [touchLast, setTouchLast] = useState(false);
   const curPage = useSelector(({ pageIndex }) => pageIndex);
   const dispatch = useDispatch();
   useEffect(() => {
      let canEnter = true;
      let transitionStart = false;

      const checkIsTransitioning = () => {
         if (!transitionStart) {
            canEnter = true;
         }
      };
      const handleWheelEvent = (e) => {
         if (!canEnter) {
            return;
         }
         canEnter = false;
         if (e.wheelDeltaY < 0) {
            dispatch(increase());
            setShowScroll(false);
            setTimeout(checkIsTransitioning, 50);
         } else {
            dispatch(decrease());
            setShowScroll(false);
            setTimeout(checkIsTransitioning, 50);
         }
      };

      const handleTransitionStart = () => {
         transitionStart = true;
      };
      const handleTransitionEnd = () => {
         canEnter = true;
         transitionStart = false;
         setShowScroll(true);
      };

      window.addEventListener("wheel", handleWheelEvent);
      window.addEventListener("transitionstart", handleTransitionStart);
      window.addEventListener("transitionend", handleTransitionEnd);
      return () => {
         window.removeEventListener("wheel", handleWheelEvent);
         window.addEventListener("transitionstart", handleTransitionStart);
         window.removeEventListener("transitionend", handleTransitionEnd);
      };
   }, [dispatch]);

   useEffect(() => {
      if (curPage >= 3) {
         setTouchLast(true);
      }
   }, [curPage]);

   const handlePageChangeClick = (offset) => {
      if (offset < 0) {
         dispatch(decrease());
      } else {
         dispatch(increase());
      }
   };

   return (
      <div>
         <div
            className="MainPage Landing"
            css={css`
               ${CurrntPageStyle(curPage === 0)}
            `}>
            <LandingContainer />
         </div>
         <div
            className="MainPage"
            css={css`
               ${CurrntPageStyle(curPage === 1)}
            `}>
            <ProfileContainer />
         </div>
         <div
            className="MainPage"
            css={css`
               ${CurrntPageStyle(curPage === 2)}
            `}>
            <WorksContainer />
         </div>
         <div
            className="MainPage"
            css={css`
               ${CurrntPageStyle(curPage === 3)}
            `}>
            <ContactContainer />
         </div>
         <div
            css={css`
               ${PageChangeContainer()}
            `}>
            {" "}
            {!touchLast ? (
               <Player
                  src={scrollVideo}
                  speed="0.9"
                  css={css`
                     ${ScrollVideoStyle(showScroll)}
                  `}
                  renderer="svg"
                  controls
                  loop
                  autoplay
               />
            ) : (
               <>
                  {curPage !== 0 && (
                     <span
                        onClick={() => handlePageChangeClick(-1)}
                        css={css`
                           ${PageChangeLeft()}
                        `}>
                        Left
                     </span>
                  )}
                  {curPage !== 3 && (
                     <span
                        onClick={() => handlePageChangeClick(1)}
                        css={css`
                           ${PageChangeRight()}
                        `}>
                        Right
                     </span>
                  )}
               </>
            )}
         </div>
      </div>
   );
}
export default Home;
