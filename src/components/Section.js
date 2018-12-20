import React from "react";
import withStyles from "@material-ui/core/styles/withStyles.js";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3
  }
});

const Section = props => {
  const { children, classes, title, subTitle } = props;
  return (
    <section className={classes.root}>
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <Divider className={classes.divider} />
      {subTitle && (
        <Typography variant="h5" component="h4">
          {subTitle}
        </Typography>
      )}
      {children}
    </section>
  );
};

export default withStyles(styles)(Section);
