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

function Video() {
  const classes = useStyles();

  return (
    <div className={classes.videoWrapper}>
      <ReactPlayer
        width="100%"
        url="https://www.youtube.com/watch?v=Vk_W2iufffQ"
      />
    </div>
  )
}

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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  photo: {
    height: 250,
    width: 200,
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
                <Video></Video>
                <br></br>
                <br></br>
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
              </CardContent>
            </Card>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}