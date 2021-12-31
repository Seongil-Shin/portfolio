/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import CustomGridList from "./elements/CustomGridList";

const container = `
   display:flex
`;
const ShortProfile = `
   flex-basis:35%;
   height:80vh;
   text-align:center;
   img {
      border-radius:10px;
      width:auto;
      height:50vh;
      @media only screen and (max-width: 1280px) {
         height:40vh;
      }
   }
   .profile-list {
      text-align:left;
      padding-left:30px;
      @media only screen and (max-width: 1280px) {
         padding-left:0px;
      }
   }
`;
const Stacks = `
   flex-basis:65%;
   height:80vh;
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

function Profile({ data }) {
   return (
      <>
         <h2>프로필</h2>
         <div
            css={css`
               ${container}
            `}>
            <div
               css={css`
                  ${ShortProfile}
               `}>
               <div>
                  <img
                     src={`${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image}`}
                     alt="error"
                  />
               </div>
               <div>
                  <h4>{data.name}</h4>
                  <div className="profile-list">
                     <ul>
                        {data.aboutme?.map((item, idx) => (
                           <span key={`list-${idx}`}>
                              <li>{item?.line}</li>
                              <br />
                           </span>
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
         </div>
      </>
   );
}
export default Profile;
