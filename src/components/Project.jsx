/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Divider } from "@material-ui/core";

const title = `
   text-align:center;
`;
const container = `
    display: flex;
`;
const imageContainer = `
    flex-basis:40%;
    padding:10px;
    height:80vh;
`;
const image = ` 
    border-radius:10px;
    height:70%;
    transform: translateY(20%);
`;
const detailContainer = `
    flex-basis:60%;
    height:80vh;
    padding:50px;
    box-sizing: border-box;
`;

const ImgStyle = `
   --height: auto;
   --width: 100%;
`;
const containerText = `
    margin : 50px 30px;
`;

function Project({ data }) {
   return (
      <>
         <h1
            css={css`
               ${title}
            `}>
            {data.title}
         </h1>
         <div
            css={css`
               ${container}
            `}>
            <div
               css={css`
                  ${imageContainer}
               `}>
               <div
                  css={css`
                     ${image}
                  `}>
                  <AmplifyS3Image
                     imgKey={data.image}
                     css={css`
                        ${ImgStyle}
                     `}
                  />
               </div>
            </div>
            <div
               css={css`
                  ${detailContainer}
               `}>
               <div>
                  <div
                     css={css`
                        ${containerText}
                     `}>
                     {data.detail}
                  </div>
                  <Divider />
                  <div
                     css={css`
                        ${containerText}
                     `}>
                     <div>깃허브 : {data.github}</div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default Project;
