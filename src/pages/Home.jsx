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

const CurrntPageStyle = (isCur, curOpacity) => ` 
   z-index:${isCur ? 1 : -1};
   opacity:${isCur ? curOpacity : "0"}; 
   transition: opacity 0.5s linear 0s;
`;

const PageChangeContainer = `
   position:fixed;
   bottom:0;
   left:0;
   width:100%; 
   height: 10vh;
   text-align:center;
   line-height:10vh;
   z-index:10;
`;
const ScrollVideoStyle = `
   opacity:0.7;
   width:100px;
   margin :0px auto; 
   height: 10vh;
   transition: opacity 1s linear 0s
   :hover {
      cursor:pointer;
   }
`;
const PageChangeLeft = () => `
   position:absolute;
   left:30px;
   width:100px;
   &:hover {
      cursor:pointer;
   }
`;
const PageChangeRight = () => `
   position:absolute;
   right:30px;
   width:100px;
   text-align:right;
   &:hover {
      cursor:pointer;
   }
`;

const bottomNav = css`
   position: fixed;
   bottom: 0px;
   right: 0px;
   width: 100vw;
   height: 30px;
   z-index: 100;
   line-height: 30px;

   background-color: rgba(252, 250, 247, 1);
`;

const paths = ["/", "/profile", "/projects", "/contact"];

function Home() {
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
      }, 600);
   }, [curPage, history]);

   useEffect(() => {
      setTimeout(() => setCurOpacity(1), 5);
   }, [history.location.pathname]);

   const handlePageChangeClick = (offset) => {
      if (offset < 0) {
         dispatch(decrease());
      } else {
         dispatch(increase());
      }
   };

   return (
      <>
         <>
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

            {!isMobile ? (
               <div
                  css={css`
                     ${PageChangeContainer}
                  `}>
                  {!touchLast && curPage !== 2 ? (
                     <Player
                        src={scrollVideo}
                        speed="0.9"
                        css={css`
                           ${ScrollVideoStyle}
                        `}
                        renderer="svg"
                        controls
                        loop
                        autoplay
                     />
                  ) : (
                     <></>
                  )}
               </div>
            ) : (
               <div
                  css={css`
                     ${bottomNav}
                  `}>
                  <div
                     onClick={() => handlePageChangeClick(-1)}
                     css={css`
                        ${PageChangeLeft()}
                     `}>
                     &lt;
                  </div>

                  <div
                     onClick={() => handlePageChangeClick(1)}
                     css={css`
                        ${PageChangeRight()}
                     `}>
                     &gt;
                  </div>
               </div>
            )}
         </>
      </>
   );
}
export default Home;
