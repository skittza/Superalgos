import React from 'react'
import { Typography } from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'
import styles from '../styles'

class History extends React.Component {
  render () {
    const classes = this.props.classes
    return (
      <Typography
        className={classes.title}
        variant='display1'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        Your old competitions (maybe here, maybe not, who knows)
      </Typography>
    )
  }
}

export default withStyles(styles)(History)
