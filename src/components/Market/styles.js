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
      height: '100vh',
      
     
     
    },
    tabs: {
      borderRight: `2px solid ${theme.palette.divider}`,
      marginTop:'60px',
      marginLeft:'0px',
      color: '#fff',
      fontFamily: 'Inter',
    },

  tabStyle: {
    display: 'flex',
    marginBottom:'16px',
    marginRight: '32px'
  },

    sepTabs: {
      marginTop: '80px'
    },

    sectionTitle: {
      display: 'flex',
      height: '48px',
      marginRight: '8px',
      color: '#fff',
      alignItems: 'center',
      fontSize: '32px',
      fontFamily: 'Inter',
      fontWeight: '600',
    },

    sectionSubTitle: {
      color: '#ffffff',
      marginTop: '32px',
      marginBottom: '32px'
    },

    itemContainer: {
      display: 'flex',
      padding: '0px',
      
    }
  




  }
    ));
    