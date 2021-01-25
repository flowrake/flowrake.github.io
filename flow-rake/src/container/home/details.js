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
import ReactPlayer from "react-player";
import logo from './FlowRakeLogo.jpg';
import product1 from './FlowrakeSmall.JPG';
import product2 from './FlowrakeLarge.JPG';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    flexGrow: 1,
  },
  divFlexRow: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    padding: 10
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  photo: {
    height: 'auto',
    width: '100%',
    margin: 10,
    padding: 10
  },
  videoWrapper: {
    width: 'auto', // Reset width
    height: 'auto', // Reset height
  },
  video: {
    paddingTop: '56.25%', // Percentage ratio for 16:9
    position: 'relative', 
  }
}));

const cards = [1, 2];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {<img src={logo} className="photo" alt="logo" />}
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Catching potentials before they become problems!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/">
                    <Button variant="contained" color="primary">
                      Home
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
                <h3>FLOWRAKE Specifications</h3>
                <div className={classes.divFlexRow}>
                <Typography paragraph>
                A waste capturing device used for catching and retaining nondispersible articles which are discharged from a sewer conduit to prevent these articles from
                interfering with the proper operation of a sanitary lift station. More particularly, the device
                includes a mount that is extended over a discharge pipe and includes a peg extendable
                into the discharge pipe. The mount supports the FLOWRAKE assembly that is
                positioned below the discharge pipe and extends generally horizontally therefrom.
                The mount includes a grip for removing the device from the pipe as well as a
                rod socket, which therein a threaded rod or bolt may be threaded, that extends in
                an opposite direction from the rake and abuts the wall to retain the rake in the proper
                orientation. As fluid flows outwardly from the pipe, any non-dispersible articles such as
                wet wipes and the like are captured by the FLOWRAKE and held thereon until the rake
                is removed for cleaning.
                </Typography>
                {<img src={product1} className="photo" alt="logo" />}
                </div>
                <div className={classes.divFlexRow}>
                {<img src={product2} className="photo" alt="logo" />}
                <Typography paragraph>
                <br></br>
                <br></br>
                <b>Standard sizes are available in (.119) stainless steel:</b> <br></br>
                4-inch FLOWRAKE can attach to pipe sizes from 2 to 4 inch. <br></br>
                6-inch FLOWRAKE can attach to pipe sizes from 4 to 6 inch. <br></br>
                8-inch FLOWRAKE can attach to pipe sizes from 6 to 8 inch. <br></br>
                *Larger sizes are available for quote.
                </Typography>
                </div>
                <h3>Mounting and Removal</h3>
                <Typography paragraph>
                A 3/8-inch hole is drilled into the topside of the pipe approximately 1+1/2 inch from its end with a minimum of three
                inches of exposed pipe for proper mounting. The FLOWRAKE is then lowered by use of an extension pole and hook
                and fitting the peg inside of the previously drilled hole. Removal is accomplished by simply lifting the rake from its
                resting mount with extension pole and hook.
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}