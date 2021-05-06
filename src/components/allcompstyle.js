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
      backgroundColor: '#1E293B',
      marginLeft: '1px',
      borderRadius: '8px',
      paddingTop: '32px'
      
     
     
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
      marginBottom: '32px',
    },

    itemContainer: {
      display: 'flex',
      padding: '0px',
      
    },

    // News

    newsContainerStyle: {
      background: '#2A3752',
      padding: '16px',
      borderRadius: '4px',
      color: '#ffffff',
      height: '360px',
      overflow: 'auto',
      width: '640px',
      fontFamily: 'Inter'
  },

  newsHeadingStyle: {
      fontFamily: 'Inter',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '20px',
      opacity: '0.75',
      marginBottom: '16px'
  },

  newsList: {
      fontSize: '14px',
      fontWeight: '400'
  }
  




  }
    ));
    