import { TableHead } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({


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


    //   Table Styling
  
    tableMain: {
        color: '#fff',
        background: '#2A3752',
        padding: '16px',
        borderRadius: '4px',
        width: '65vw'
        
    },

    tableHead: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '16px',
        opacity: '.5'
    },

    tableData: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '16px',
        cursor: 'pointer'
    }
  




  }
    ));
    