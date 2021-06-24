/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const imageContainer = `
    width:35%;
    height:90vh;
    float:left;
    padding:10px;
    line-height:100vh;
`;
const image = ` 
    transform: translateY(20%);
    border-radius:10px;
`;
const detailContainer = `
    height:90vh;
    padding:10px;
    width:60%;
    float:right;
`;

function Project({ data }) {
   return (
      <div>
         <div
            css={css`
               ${imageContainer}
            `}>
            <img
               id="project-image"
               src={data.img}
               width="100%"
               height="auto"
               alt="error"
               css={css`
                  ${image}
               `}
            />
         </div>
         <div
            css={css`
               ${detailContainer}
            `}>
            detail
         </div>
      </div>
   );
}
export default Project;
