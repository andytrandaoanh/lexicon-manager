import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../theme/theme';



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function QuoteDisplay(props) {
  const classes = useStyles();
  

  return (

   <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Sentences
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A collection of great sentences from books.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}

          <Grid container spacing={4}>

                <Grid item key='card_1' xs={12} sm={6} md={4}>
                	
                  	<Card className={classes.card}>  
                  		<CardContent className={classes.cardContent}>             
                     		<Typography gutterBottom variant="h6" component="h2">
         					 	Book 1
      						</Typography>
      					</CardContent>	
                  	</Card>
                  	
                </Grid>   

                <Grid item key='card_2' xs={12} sm={6} md={4}>
                  	<Card className={classes.card}>  
                  		<CardContent className={classes.cardContent}>             
                     		<Typography gutterBottom variant="h6" component="h2">
         					 	Book 2
      						</Typography>
      					</CardContent>	
                  	</Card>
                </Grid>  
                <Grid item key='card_3' xs={12} sm={6} md={4}>
                  	<Card className={classes.card}>  
                  		<CardContent className={classes.cardContent}>             
                     		<Typography gutterBottom variant="h6" component="h2">
         					 	Book 3
      						</Typography>
      					</CardContent>	
                  	</Card>
                </Grid>  
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copyright (C) 2019-2020 DigiNet Corporation 
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Developed with ReactJS, Material-UI, Flask and MongoDB and MySQL
        </Typography>
        
      </footer>
      {/* End footer */}
    </React.Fragment>
    </MuiThemeProvider>
  );
}





