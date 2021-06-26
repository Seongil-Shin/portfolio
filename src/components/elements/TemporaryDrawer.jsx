import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
   list: {
      width: 250,
   },
});

export default function TemporaryDrawer({ setPage }) {
   const classes = useStyles();
   const list = () => (
      <div className={classes.list} role="presentation">
         <List>
            {["Landing", "Profile", "Projects"].map((text) => (
               <ListItem button key={text} onClick={() => setPage(text)}>
                  <ListItemText primary={text} />
               </ListItem>
            ))}
         </List>
      </div>
   );

   return (
      <div>
         <Drawer open variant="permanent">
            {list()}
         </Drawer>
      </div>
   );
}
