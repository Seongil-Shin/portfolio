/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { Button, Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import palette from "../lib/styles/palette";
import ReactMarkdown from "react-markdown";
import ReactImageGallery from "./elements/ReactImageGallery";

const container = `
   position:relative;
`;
const title = `
   text-align:center;
`;
const innerContainer = `
    width:100%;
`;
const imageContainer = `
    padding:10px;
`;
const detailContainer = `
    height:500px;
    overflow-y: scroll;
`;
const containerText = `
    margin : 10px 10px;
`;
const goBackContainer = `
   padding:10px;
   button {
      background-color:${palette.thatch};
      color:white;
   }
   
   button:hover {
      background-color:${palette.thatch};
      opacity:0.5;
      color:white;
   }
`;

function MobileProject({ data }) {
   const history = useHistory();

   useEffect(() => window.scrollTo(0, 0), []);

   return (
      <div
         css={css`
            ${container}
         `}>
         <h1
            css={css`
               ${title}
            `}>
            {data.title}
         </h1>

         <div
            css={css`
               ${goBackContainer}
            `}>
            <Button onClick={() => history.goBack()}>뒤로가기</Button>
         </div>
         <div
            css={css`
               ${innerContainer}
            `}>
            <div
               css={css`
                  ${imageContainer}
               `}>
               <ReactImageGallery images={data.images} isMobile={true} />
            </div>
            <div
               css={css`
                  ${detailContainer}
               `}>
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <ReactMarkdown children={data.detail} />
               </div>
               <Divider />
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <div>
                     깃허브 :{" "}
                     <a href={data.github} target="_blank" rel="noreferrer">
                        {data.github}
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default MobileProject;
