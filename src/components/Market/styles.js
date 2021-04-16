import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({


    mainContainer: {
      background: '#151C29',
      padding: '16px',
      height: '100%',
      margin: '0'
    },

    logo: {
      height: '48px',
      marginBottom: '8px'
    },

    root: {
      flexGrow: 1,
      backgroundColor: '#1E293B',
      display: 'flex',
      marginLeft: '1px',
      borderRadius: '8px',
      height: '100vh'
     
     
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      marginTop:'60px',
      marginLeft:'0px',
      display: 'inline-block',
      color: '#fff',
      

    },

    sepTabs: {
      marginTop: '80px'
    }
  }
    ));