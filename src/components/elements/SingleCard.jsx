/** @jsxImportSource @emotion/react */
import React from "react";
import {
   makeStyles,
   Card,
   CardMedia,
   CardContent,
   Button,
   Typography,
   CardActions,
} from "@material-ui/core";
import palette from "../../lib/styles/palette";
import { useHistory } from "react-router";
import { css } from "@emotion/react";
import fonts from "../../lib/styles/fonts";

const ImgStyle = `
   height: 150px;
   width: auto;
   object-fit:contain;
`;

const useStyles = makeStyles(() => ({
   root: {
      flexGrow: 1,
   },
   buttonColor: {
      color: palette.thatch,
      fontFamily: fonts.regular,
   },
   media: {
      width: "100%",
      height: "150px",
   },
   font: {
      fontFamily: fonts.regular,
   },
}));

function SingleCard({ item, setOnMod, isAdmin }) {
   const classes = useStyles();
   const history = useHistory();

   const clickGithub = () => {
      window.open(item.github);
   };
   const clickDetail = (item) => {
      history.push(`/project`, item);
   };

   return (
      <Card className={classes.root}>
         <CardMedia className={classes.media}>
            <img
               src={`${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${item.images[0]}`}
               alt="error"
               css={css`
                  ${ImgStyle}
               `}
            />
         </CardMedia>
         <CardContent>
            <Typography
               gutterBottom
               variant="h5"
               component="h2"
               className={classes.font}>
               {item.title}
            </Typography>
            <Typography
               variant="body2"
               color="textSecondary"
               component="p"
               className={classes.font}>
               {item.summary}
            </Typography>
         </CardContent>
         <CardActions>
            {!isAdmin ? (
               <>
                  <Button
                     size="small"
                     className={classes.buttonColor}
                     onClick={clickGithub}>
                     Github
                  </Button>
                  <Button
                     size="small"
                     className={classes.buttonColor}
                     onClick={() => clickDetail(item)}>
                     ?????????
                  </Button>
               </>
            ) : (
               <>
                  <Button
                     size="small"
                     className={classes.buttonColor}
                     onClick={() => setOnMod([`update`, item])}>
                     ??????
                  </Button>
                  <Button
                     size="small"
                     className={classes.buttonColor}
                     onClick={() => {
                        if (window.confirm("?????? ?????????????????????????")) {
                           setOnMod([
                              "delete",
                              { id: item.id, image: item.image },
                           ]);
                        }
                     }}>
                     ??????
                  </Button>
               </>
            )}
         </CardActions>
      </Card>
   );
}
export default SingleCard;
