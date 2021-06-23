/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { Grid, makeStyles } from "@material-ui/core";
import palette from "../lib/styles/palette";
import SingleCard from "./elements/SingleCard";
import Pagination from "@material-ui/lab/Pagination";

const Container = () => `text-align:center`;

const HeaderStyle = () => `
    margin-top:100px;
    margin-bottom:150px;
`;

const ListContainer = () => `
    width:80%;
    margin:0px auto;
`;

const AlignPage = (length) => `
   width:${(length + 2) * 38}px; 
   margin : 50px auto 0px auto; `;

const useStyles = makeStyles((theme) => ({
   pagination: {
      color: palette.thatch,
      "& button": {
         color: palette.thatch,
      },
   },
}));
function Works({ list }) {
   const classes = useStyles();
   const [page, setPage] = useState(0);

   const handleChange = (e, n) => {
      setPage(n - 1);
   };
   return (
      <div
         css={css`
            ${Container()}
         `}>
         <h2
            css={css`
               ${HeaderStyle()}
            `}>
            Projects
         </h2>
         <div
            css={css`
               ${ListContainer()}
            `}>
            <Grid container spacing={3}>
               {list.slice(page * 4, page * 4 + 4).map((item, idx) => {
                  return (
                     <Grid item xs={3} key={idx}>
                        <SingleCard item={item} />
                     </Grid>
                  );
               })}
            </Grid>
         </div>
         <div
            css={css`
               ${AlignPage(Math.ceil(list.length / 4))}
            `}>
            <Pagination
               count={Math.ceil(list.length / 4)}
               className={classes.pagination}
               onChange={handleChange}
               disabled={false}
            />
         </div>
      </div>
   );
}
export default Works;
