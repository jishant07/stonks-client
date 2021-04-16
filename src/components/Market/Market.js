import React from 'react';
import Dashboard from '../dashboard';
import PropTypes from 'prop-types';
import {Tabs, Tab, Typography, Box,Icon, Container, Grid} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import CropSquareRoundedIcon from '@material-ui/icons/CropSquareRounded';
import PersonOutlineIcon  from '@material-ui/icons/PersonOutline';
import PlaylistAddOutlinedIcon  from '@material-ui/icons/PlaylistAddOutlined';
import TimelineIcon from '@material-ui/icons/Timeline';
import useStyles from './styles';
import Stonks from '../../images/Stonks.svg';
import MarketIcon from '../../images/MarketIcon.svg';
import PieSentiments from '../pie';
import News from '../news'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  

const Market = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  

  return (
    
    <>
    <Container maxWidth='xl' className={classes.mainContainer}>
    <img src={Stonks} alt="logo" className={classes.logo} />


    <Container maxWidth='xl' className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="off"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        
      >
        <Tab icon={<TimelineIcon /> } label="Market Overview" {...a11yProps(0)} />
        <Tab icon={<BusinessIcon />} label="All Companies" {...a11yProps(1)} />
        <Tab icon={<PlaylistAddOutlinedIcon />} label="WatchList" {...a11yProps(2)} />
        <Tab icon={<PersonOutlineIcon  />} label="Accounts" {...a11yProps(3)} />
        <Tab label="About" {...a11yProps(4)} className={classes.sepTabs} />
        <Tab label="Logout" {...a11yProps(7)} />
      </Tabs>

     
      <TabPanel value={value} index={0}>
      
        <div direction="row" className={classes.sectionTitle}>
          <img src={MarketIcon} alt="logo" className={classes.sectionTitle} />
          <Typography className={classes.sectionTitle}>Market Overview</Typography>
        </div>

        <div className={classes.sectionSubTitle}>
          <Typography variant="h5" >Todays Sentiments</Typography>
          <Typography variant="subtitle1">As of {new Date().toLocaleString('default', { month: 'long',day: '2-digit',year: 'numeric' }) + ''}</Typography>
        </div>

        {/* <PieSentiments /> */}
        <News />




















      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        < Dashboard />
      </TabPanel>

    </Container>
    </Container>
    </>

   
  );
};

export default Market;
