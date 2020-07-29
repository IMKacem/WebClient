import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GetAppIcon from "@material-ui/icons/GetApp";
import PublishIcon from "@material-ui/icons/Publish";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import data from "./workflow.json";


const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus() {


  const [keys, setKeys] = useState('')
  const [values, setValues] = useState('')

  const myObjStr = JSON.stringify(data);

  JSON.parse(myObjStr, (key, value) => {
    console.log("Key:"+key)
    if (typeof value === 'string') {
      console.log("Value:" +value.toUpperCase());
      return value.toUpperCase();
    }
    return value;
  });
  console.log(myObjStr)
  console.log("*******************************************")
  console.log(JSON.parse(myObjStr));
  console.log("*******************************************")

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      role: ""
    });


  const [myValue, setValue] = useState('')
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setAnchorEl(null);
    setOpen(true);

  };

  const handleCloseForm = () => {
    setOpen(false);
  };

  Object.keys(data).map((key, i) => {
    Object.values(data).map((value, j) => {
    console.log("ttttttttttttttttttttttttttttttttt")
                      console.log(key)
                      console.log(data[key])
                      console.log(Object.keys(data[key]))
                      console.log(value)
                  });  });
  return (

    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <PublishIcon fontSize="small" />
          </ListItemIcon>
          <div>
      <ListItemText primary="Import WF" variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </ListItemText>
      <Dialog open={open} onClose={handleCloseForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Workflow</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Workflow description.
          </DialogContentText>
          {JSON.parse(myObjStr, (key, value) => {
                return  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label={key}
                    type="email"
                    fullWidth
                    defaultValue={value}
                  />
                })}
          </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseForm} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>

        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <GetAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Export WF" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );

}
