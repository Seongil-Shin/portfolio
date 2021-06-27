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
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { css } from "@emotion/react";

const ImgStyle = `
   --height: 150px;
   --width: auto;
`;

const useStyles = makeStyles(() => ({
   root: {
      flexGrow: 1,
   },
   buttonColor: {
      color: palette.thatch,
      fontFamily: "jeju",
   },
   media: {
      width: "100%",
      height: "150px",
   },
   font: {
      fontFamily: "jeju",
   },
}));

function SingleCard({ item, setOnMod }) {
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
            <AmplifyS3Image
               imgKey={item.image}
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
            {!setOnMod ? (
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
                     자세히
                  </Button>
               </>
            ) : (
               <>
                  <Button
                     size="small"
                     className={classes.buttonColor}
                     onClick={() => setOnMod([`update`, item])}>
                     수정
                  </Button>
                  <Button
                     size="small"
                     className={classes.buttonColor}
                     onClick={() =>
                        setOnMod(["delete", { id: item.id, image: item.image }])
                     }>
                     삭제
                  </Button>
               </>
            )}
         </CardActions>
      </Card>
   );
}
export default SingleCard;
