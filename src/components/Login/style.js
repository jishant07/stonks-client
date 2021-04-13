import { makeStyles } from '@material-ui/core/styles';
import { InfoOutlined } from '@material-ui/icons';


export default makeStyles((theme) => ({
    root: {
      flexGrow: 2,
      backgroundColor: '#6366F1' ,
      display: 'flex-vertical',
      padding: '20px',
      marginTop: 'auto',
      marginBottom: 'auto'
    },

    logo: {
      height: '64px',
      display: 'block',
      marginBottom: '16px'
    },

    heading: {
      color: '#ffffff',
      fontFamily: 'Inter',
      marginBottom: '16px',
      maxWidth: '80%'
    },

    subheading: {
      color: '#ffffff',
      fontFamily: 'Inter',
      marginBottom: '16px',
      maxWidth: '80%'
    }
  }
    ));