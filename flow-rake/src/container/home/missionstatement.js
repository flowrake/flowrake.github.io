import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    display: 'flex',
  },
  details: {
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  }
}));

function MissionStatement(props) {
  const classes = useStyles(); 

  return (
    <Container maxWidth="sm">
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{props.Name}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {props.Details}The FlowRake is a device designed to protect employees and extend equipment life. It’s main purpose is the removal of non-dispersible matters such as feminine products, baby wipes, etc.

              The FlowRake can be installed for use as pretreatment to wastewater treatment facilities and installation should be made on isolated lift stations. The FlowRake is intended for non-pressurized lines and should be installed on influent gravity lines.

              Once installed, the FlowRake must be maintained regularly and is serviced from outside the lift stations wet well and without entry. The safety of employees always comes first.

              The FlowRake extends pump life and reduces times between service calls. One avoidable service call will easily pay for the cost of one FlowRake.

              Made from stainless steel, the FlowRake will outlast most pumps and other installed equipment.
            </Typography>
          </CardContent>
        </Card>
    </Container>
  );
}

MissionStatement.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default MissionStatement;