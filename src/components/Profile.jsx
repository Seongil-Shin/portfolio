/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import CustomGridList from "./elements/CustomGridList";

const ShortProfile = `
   flex-basis:35%;
   height:80vh;
   display:flex;
   flex-direction:column;
`;
const container = `
   display:flex
`;
const Stacks = `
   flex-basis:65%;
   height:80vh;
   text-align:center;
`;
const ImgStyle = `
   flex-basis:40%;
   display:flex;
   text-align:center;
   align-items: flex-end;justify-content: center;
   img {
      border-radius:10px;
      width:70%;
      height:auto;
   }
`;
const ShortIntroduction = `
   flex-basis:60%;
   padding-top:30px;
   text-align:center;
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
         {" "}
         <h2>프로필</h2>
         <div
            css={css`
               ${container}
            `}>
            <div
               css={css`
                  ${ShortProfile}
               `}>
               <div
                  css={css`
                     ${ImgStyle}
                  `}>
                  <img
                     src={`${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image}`}
                     alt="error"
                  />
               </div>
               <div
                  css={css`
                     ${ShortIntroduction}
                  `}>
                  <h4>{data.name}</h4>
                  <div style={{ textAlign: "left", paddingLeft: "30px" }}>
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
            </div>
            <div
               css={css`
                  ${Stacks}
               `}>
               <h2>Stacks</h2>
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
