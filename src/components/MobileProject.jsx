/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Button, Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import palette from "../lib/styles/palette";

const title = `
   text-align:center;
`;
const container = `
    width:100%;
`;
const imageContainer = `
    padding:10px;
`;
const ImgStyle = `
   height: auto;
   width: 100%;
   border-radius:10px;
`;

const containerText = `
    margin : 50px 30px;
`;
const goBackContainer = `
   position:relative;
   bottom:10px;
   left:5px;
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
               <img
                  src={`${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image}`}
                  alt="error"
                  css={css`
                     ${ImgStyle}
                  `}
               />
            </div>
            <div>
               <div
                  css={css`
                     ${containerText}
                  `}
                  dangerouslySetInnerHTML={{ __html: data.detail }}></div>
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
            <div
               css={css`
                  ${goBackContainer}
               `}>
               <Button onClick={() => history.goBack()}>뒤로가기</Button>
            </div>
         </div>
      </>
   );
}
export default MobileProject;
