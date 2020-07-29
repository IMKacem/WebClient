import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import DivideIcon from "@material-ui/icons/Remove";
import BoolIcon from "@material-ui/icons/Done";
import FloatIcon from "@material-ui/icons/ExposureZeroSharp";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />

        <div className={classes.drawerContainer}>
          <List>
<ListItem
           button
           key="TypedElement"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="TypedElement" />
         </ListItem>
<ListItem
           button
           key="NamedElement"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="NamedElement" />
         </ListItem>
<ListItem
           button
           key="BaseTask"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="BaseTask" />
         </ListItem>
<ListItem
           button
           key="TaskOutput"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="TaskOutput" />
         </ListItem>
<ListItem
           button
           key="LibraryFunction"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="LibraryFunction" />
         </ListItem>
<ListItem
           button
           key="LibraryTask"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="LibraryTask" />
         </ListItem>
<ListItem
           button
           key="Workflow"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="Workflow" />
         </ListItem>
<ListItem
           button
           key="Setter"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="Setter" />
         </ListItem>
<ListItem
           button
           key="Connection"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="Connection" />
         </ListItem>
<ListItem
           button
           key="CustomTask"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="CustomTask" />
         </ListItem>
<ListItem
           button
           key="Nsetter"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="Nsetter" />
         </ListItem>
<ListItem
           button
           key="IsInitSetter"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="IsInitSetter" />
         </ListItem>
<ListItem
           button
           key="IsNotInitSetter"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="IsNotInitSetter" />
         </ListItem>
<ListItem
           button
           key="Input"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="Input" />
         </ListItem>
<ListItem
           button
           key="Output"
           draggable={true}
           onDragStart={event => {
             event.dataTransfer.setData(
               "storm-diagram-node",
               JSON.stringify({ type: "in" })
             );
           }}
           className="tray-item"
         >
           <ListItemIcon>
             <AddIcon />
           </ListItemIcon>
           <ListItemText primary="Output" />
         </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
