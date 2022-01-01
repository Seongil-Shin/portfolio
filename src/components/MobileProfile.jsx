/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import CustomGridList from "./elements/CustomGridList";

const ShortProfile = `
   text-align:center;
   display : flex;
   
   .profile-img {
       flex-basis:50%;
   }
   img {
      border-radius:10px;
         width:100%;
         height:auto;
   }
   .profile-list {
      flex-basis:50%;
      text-align:left;
      padding-left:0px;

   }
`;
const Stacks = `
   height:600px;
   text-align:center;
   .header {
      margin-top:0px;
   }
`;
const StackFlex = `
   display:flex;
`;
const StackFrontEnd = `
   flex-basis:33%;
`;
const StackBackEnd = `
   flex-basis:33%;
`;
const StackEtc = `
   flex-basis:33%;
`;

function MobileProfile({ data }) {
   useEffect(() => window.scrollTo(0, 0), []);
   return (
      <>
         {" "}
         <h2>프로필</h2>
         <div
            css={css`
               ${ShortProfile}
            `}>
            <div className="profile-img">
               <img
                  src={`${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image}`}
                  alt="error"
               />
               <h4>{data.name}</h4>
            </div>
            <div className="profile-list">
               <ul>
                  {data.aboutme?.map((item, idx) => (
                     <>
                        <li key={`list-${idx}`}>{item?.line}</li>
                        <br />
                     </>
                  ))}
                  <li>
                     깃허브 :{" "}
                     <a
                        href="https://github.com/Seongil-Shin"
                        target="_blank"
                        rel="noreferrer">
                        https://github.com/Seongil-Shin
                     </a>
                  </li>
                  <br />
               </ul>
            </div>
         </div>
         <div
            css={css`
               ${Stacks}
            `}>
            <h2 className="header">Stacks</h2>
            <div
               css={css`
                  ${StackFlex}
               `}>
               <div
                  css={css`
                     ${StackFrontEnd}
                  `}>
                  <h3>Front end</h3>
                  <CustomGridList tileData={data?.stack?.front} />
               </div>

               <div
                  css={css`
                     ${StackBackEnd}
                  `}>
                  <h3>Back end</h3>
                  <CustomGridList tileData={data?.stack?.back} />
               </div>

               <div
                  css={css`
                     ${StackEtc}
                  `}>
                  <h3>Etc</h3>
                  <CustomGridList tileData={data?.stack?.etc} />
               </div>
            </div>
         </div>
      </>
   );
}
export default MobileProfile;
