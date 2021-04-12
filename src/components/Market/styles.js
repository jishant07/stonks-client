import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      marginLeft: '1px'
     
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      marginTop:'60px',
      marginLeft:'0px',
      display: 'inline-block',

    },
  }
    ));