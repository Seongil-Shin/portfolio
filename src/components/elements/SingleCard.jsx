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

const useStyles = makeStyles((theme) => ({
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

function SingleCard({ item }) {
   const classes = useStyles();
   const history = useHistory();
   const clickGithub = () => {
      window.open(item.github);
   };

   const clickDetail = () => {
      history.push("/project", item);
   };

   return (
      <Card className={classes.root}>
         <CardMedia component="img" className={classes.media} src={item.img} />
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
            <Button
               size="small"
               className={classes.buttonColor}
               onClick={clickGithub}>
               Github
            </Button>
            <Button
               size="small"
               className={classes.buttonColor}
               onClick={clickDetail}>
               자세히
            </Button>
         </CardActions>
      </Card>
   );
}
export default SingleCard;
