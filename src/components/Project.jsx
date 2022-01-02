/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Button, Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import palette from "../lib/styles/palette";
import ReactMarkdown from "react-markdown";
import ReactImageGallery from "./elements/ReactImageGallery";

const title = `
   text-align:center;
`;
const container = `
    height: 65vh;
    display: flex;
    position :relative;
    align-items: center;
`;
const galleryContainer = `
    flex-basis:50%;
    max-width: 50%;
    height:50vh;
`;
const detailContainer = `
    flex-basis:50%;
    height:50vh;
    padding:20px;

    overflow-y: scroll;
`;
const containerText = `
    margin : 10px 10px;
`;
const goBackContainer = `
   position:absolute;
   top:0px;
   left:10px;
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

function Project({ data }) {
   const history = useHistory();

   return (
      <div
         css={css`
            ${`position:relative;`}
         `}>
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
                  ${galleryContainer}
               `}>
               <ReactImageGallery images={data.images} isMobile={false} />
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
         <div
            css={css`
               ${goBackContainer}
            `}>
            <Button onClick={() => history.goBack()}>뒤로가기</Button>
         </div>
      </div>
   );
}
export default Project;
