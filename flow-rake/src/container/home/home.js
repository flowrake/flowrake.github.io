import { Link }  from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from './FlowRakeLogo.jpg';
import product from './FlowrakeExample.JPG';

/**
 * TODO: change padding to fix mobile view
 * TODO: change details header to match home page
 */

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
    display: 'flex',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
  logo: {
    height: 250,
    width: 200,
  },
  photo: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
  },
  divFlexRow: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    padding: 10
  },
}));


export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          {<img src={logo} className="logo" alt="logo" />}
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Catching potentials before they become problems!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/Details">
                    <Button variant="contained" color="primary" src="details.js">
                      Details
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" href="https://www.usabluebook.com/search?searchterm=flowrake" target="_blank">
                    Buy Now
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div className={classes.divFlexRow}>
                  {<img src={product} className={classes.photo} />}
                  <br></br>
                  <Typography paragraph className={classes.para}>
                    The FlowRake is a device designed to protect employees and extend equipment life. It's main purpose is the removal of non-dispersible matters such as feminine products, baby wipes, etc.
                    <br></br>
                    <br></br>
                    The FlowRake can be installed for use as pretreatment to wastewater treatment facilities and installation should be made on isolated lift stations. The FlowRake is intended for non-pressurized lines and should be installed on influent gravity lines.
                    <br></br>
                    <br></br>
                    Once installed, the FlowRake must be maintained regularly and is serviced from outside the lift stations wet well and without entry. The safety of employees always comes first.  
                    <br></br>
                    <br></br>
                    The FlowRake can be installed for use as pretreatment to wastewater treatment facilities and installation should be made on isolated lift stations. The FlowRake is intended for non-pressurized lines and should be installed on influent gravity lines.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}