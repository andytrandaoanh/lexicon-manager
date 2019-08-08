import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../theme/theme';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';

import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Subject from '@material-ui/icons/Subject';
import WbAuto from '@material-ui/icons/WbAuto';
import SvgIcon from '@material-ui/core/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


import { NavLink } from 'react-router-dom';

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },

  icon: {
    margin: theme.spacing(2, 0),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  hide: {
    display: 'none',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },  

  drawerPaper: {
    width: drawerWidth,
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },

  navLink: {
    textDecoration: 'none', color: 'unset' 
    }
  }

}));

export default function AppBarWithDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function toggleDrawerState() {
    setOpen(!open);
  }



  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawerState}
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h5"  noWrap>              
              Data Management
            </Typography>
         </Toolbar>
        </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

       <div><Box m={8} /></div>

        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <List>


          <NavLink to='/' style={{ textDecoration: 'none', color: 'unset' }}>
            <ListItem button key="home">
                <ListItemIcon><HomeIcon className={classes.icon} /></ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItem>
          </NavLink>
           
        </List>

        <Divider />
        <List>
            <NavLink to='/book' style={{ textDecoration: 'none', color: 'unset' }}>
              <ListItem button key='books'>
                <ListItemIcon><LibraryBooks /></ListItemIcon>
                <ListItemText primary="Books"/>
              </ListItem>            
            </NavLink>
              

        </List>
        <Divider />
        <List>

            <NavLink to='/quote' style={{ textDecoration: 'none', color: 'unset' }}>
              <ListItem button key='quotes'>
                <ListItemIcon><Subject /></ListItemIcon>
                <ListItemText primary="Sentences"/>
              </ListItem>            
            </NavLink>            
        </List>

       <Divider />
        <List>
       
             <NavLink to='/word' style={{ textDecoration: 'none', color: 'unset' }}>
              <ListItem button key='words'>
                <ListItemIcon><WbAuto /></ListItemIcon>
                <ListItemText primary="Words"/>
              </ListItem>            
            </NavLink>               
        </List>




      </Drawer>        
      </div>
      <div><Box m={4} /></div>
    </MuiThemeProvider>
    
  );
}



