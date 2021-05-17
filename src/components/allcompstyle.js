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
      margin: '0px'
      
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
      fontFamily: 'Inter',
      marginLeft: '0px'
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
      fontWeight: 'normal'
  },
  
  chartContainer: {
    fontFamily : 'Inter',
    background: '#2A3752',
    padding: '16px',
    borderRadius: '4px'

  },

  tableMain: {
    color: '#fff',
    background: '#2A3752',
    padding: '16px',
    borderRadius: '4px',
    width: '98%',
    marginTop: '32px',
    marginBottom: '32px',
    padding: '16px'
    
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
},

//Pie

PieContainerStyle: {
  background: '#2A3752',
  borderRadius: '4px',
  color: '#ffffff',
  height: '360px',
  width: '480px',
  marginLeft: '0px',
  padding: '0px'



},



PieGridStyle: {
  margin: '8px 0px',
  width: '368px',
  padding: '0px'


},

PieTitleStyle: {
  fontSize: '18px',
  lineHeight: '20px',
  fontFamily: 'Inter',
  color: '#F1F5F9',
  marginBottom: '4px'
},

PieNumberStyle: {
  fontSize: '20px',
  lineHeight: '24px',
  fontFamily: 'Inter',
  fontWeight: 'bold',
},

PiePositiveNumber: {
  color:'#4ADE80',
  fontSize: '20px',
  lineHeight: '24px',
  fontFamily: 'Inter',
  fontWeight: 'bold',
},

PieNegativeNumber: {
  color:'#DE4A4A',
  fontSize: '20px',
  lineHeight: '24px',
  fontFamily: 'Inter',
  fontWeight: 'bold',
},

PieNeutralNumber: {
  color:'#BCD2EE',
  fontSize: '20px',
  lineHeight: '24px',
  fontFamily: 'Inter',
  fontWeight: 'bold',
},

PieTooltipStyle: {
  background: '#1E293B',
  fomtFamily: 'Inter',
  fontWeight: '600',

}





  }
    ));
    