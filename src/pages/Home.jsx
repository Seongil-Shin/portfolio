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
import { Route, useHistory } from "react-router";

const CurrntPageStyle = (isCur, curOpacity) =>
   ` z-index:${isCur ? 1 : -1};
   opacity:${isCur ? curOpacity : "0"}; 
   transition: opacity 0.5s linear 0s
   `;

const PageChangeContainer = (page, isMobile) => `
   position:absolute;
   bottom:10px;
   width:100%; 
   height: 10vh;
   text-align:center;
   line-height:10vh;
   z-index:10;

   @media only screen and (max-width:767px) {
      ${
         page === 1 &&
         `position:relative; top:${600 + (window.innerWidth / 2) * 1.3 + 50}px;`
      }
   }
   @media only screen and (max-width:599px) {
      ${page === 2 && "position:relative; top:1600px;"}
   }
`;
const ScrollVideoStyle = (showScroll) =>
   `opacity:${showScroll ? 0.7 : 0}; 
   width:100px;
   height: 10vh;
   transition: opacity 1s linear 0s
   :hover {
      cursor:pointer;
   }
   `;
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

const paths = ["/", "/profile", "/projects", "/contact"];

function Home() {
   const [showScroll, setShowScroll] = useState(true);
   const [touchLast, setTouchLast] = useState(false);
   const curPage = useSelector(({ pageIndex }) => pageIndex);
   const dispatch = useDispatch();
   const isMobile = useSelector(
      ({ isMobileReducer }) => isMobileReducer.isMobile
   );
   const history = useHistory();
   const [curOpacity, setCurOpacity] = useState(0);

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
         let className = e.path ? e.path[0].className : e.target.className;

         if (
            typeof className === "string" &&
            className.includes("MuiGridList")
         ) {
            canEnter = true;
            return;
         }

         if (e.wheelDeltaY < 0 || e.deltaY > 0) {
            dispatch(increase());
            setTimeout(checkIsTransitioning, 50);
         } else {
            dispatch(decrease());
            setTimeout(checkIsTransitioning, 50);
         }
      };

      const handleTransitionStart = () => {
         transitionStart = true;
      };
      const handleTransitionEnd = () => {
         canEnter = true;
         transitionStart = false;
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
      if (window.innerWidth < 1280) {
         setTouchLast(true);
      }
      if (curPage >= 3) {
         setTouchLast(true);
      }
      setCurOpacity(0);
      setTimeout(() => {
         history.push(paths[curPage]);
         setTimeout(() => setCurOpacity(1), 5);
      }, 600);
   }, [curPage, history]);

   const handlePageChangeClick = (offset) => {
      if (offset < 0) {
         dispatch(decrease());
      } else {
         dispatch(increase());
      }
   };

   return (
      <div>
         <Route exact path="/">
            <div
               className="MainPage Landing"
               css={css`
                  ${CurrntPageStyle(curPage === 0, curOpacity)}
               `}>
               <LandingContainer />
            </div>
         </Route>

         <Route exact path="/profile">
            <div
               className="MainPage"
               css={css`
                  ${CurrntPageStyle(curPage === 1, curOpacity)}
               `}>
               <ProfileContainer />
            </div>
         </Route>

         <Route exact path="/projects">
            <div
               className="MainPage"
               css={css`
                  ${CurrntPageStyle(curPage === 2, curOpacity)}
               `}>
               <WorksContainer />
            </div>
         </Route>

         <Route exact path="/contact">
            <div
               className="MainPage"
               css={css`
                  ${CurrntPageStyle(curPage === 3, curOpacity)}
               `}>
               <ContactContainer />
            </div>
         </Route>

         <div
            css={css`
               ${PageChangeContainer(curPage, isMobile)}
            `}>
            {" "}
            {!isMobile ? (
               !touchLast ? (
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
                  <></>
               )
            ) : (
               <>
                  {curPage !== 0 && (
                     <span
                        onClick={() => handlePageChangeClick(-1)}
                        css={css`
                           ${PageChangeLeft()}
                        `}>
                        Prev
                     </span>
                  )}
                  {curPage !== 3 && (
                     <span
                        onClick={() => handlePageChangeClick(1)}
                        css={css`
                           ${PageChangeRight()}
                        `}>
                        Next
                     </span>
                  )}
               </>
            )}
         </div>
      </div>
   );
}
export default Home;
