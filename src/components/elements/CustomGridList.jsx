import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import fonts from "../../lib/styles/fonts";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      position: "relative",
      flex: "1 1 auto",
      flexWrap: "wrap",
      justifyContent: "space-around",
      "& img": {
         width: "100%",
         height: "180px",
         objectFit: "contain",
      },
   },
   gridList: {
      width: "90%",
      height: "450px",
   },
   icon: {
      color: "rgba(255, 255, 255, 0.54)",
   },
   item: {
      "& div.item-bar": {
         opacity: 0,
         height: "100%",
      },
      "& .MuiGridListTile-tile": {
         borderRadius: "30px",
      },
      marginBottom: "10px",
      "&:hover .item-bar": {
         opacity: 1,
         fontFamily: fonts.regular,
      },
   },
}));
export default function CustomGridList({ tileData, deleteStack }) {
   const classes = useStyles();
   const { signined } = useSelector((data) => data.auth);

   return (
      <div className={classes.root}>
         {tileData && (
            <GridList cellHeight={180} cols={1} className={classes.gridList}>
               {tileData.map((tile, idx) => (
                  <GridListTile
                     key={`tile-${tile.type}-${idx}`}
                     className={classes.item}>
                     {typeof tile.image === "object" ? (
                        <img
                           src={URL.createObjectURL(tile.image)}
                           alt="error"
                        />
                     ) : (
                        <img
                           src={`${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${tile.image}`}
                           alt={tile.title}
                        />
                     )}
                     <GridListTileBar
                        title={tile.title}
                        key={`tilebar-${tile.type}-${idx}`}
                        className="item-bar"
                        actionIcon={
                           signined && (
                              <Button
                                 color="secondary"
                                 onClick={() => deleteStack(tile)}>
                                 삭제
                              </Button>
                           )
                        }
                     />
                  </GridListTile>
               ))}
            </GridList>
         )}
      </div>
   );
}
