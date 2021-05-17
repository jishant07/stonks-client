import React from 'react';
import Dashboard from '../dashboard';
import PropTypes from 'prop-types';
import {Tabs, Tab, Typography, Box, Container} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PlaylistAddOutlinedIcon  from '@material-ui/icons/PlaylistAddOutlined';
import GroupIcon from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TimelineIcon from '@material-ui/icons/Timeline';
import useStyles from './styles';
import Stonks from '../../images/Stonks.svg';
import MarketIcon from '../../images/MarketIcon.svg';

import PieSentiments from '../pie';
import News from '../news';
import Extra from '../extra';
import About from '../aboutus';
import Team from '../team';

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
        <Tab className={classes.tabStyle} icon={<TimelineIcon /> } label="Market Overview" {...a11yProps(0)} />
        <Tab className={classes.tabStyle} icon={<BusinessIcon />} label="All Companies" {...a11yProps(1)} />
        <Tab className={classes.tabStyle} icon={<ImportContactsIcon  />} label="About" {...a11yProps(3)} />
        <Tab className={classes.tabStyle} icon={<GroupIcon  />} label="Team" {...a11yProps(4)} />
        <Tab className={classes.tabStyle} icon={<ExitToAppIcon  />} label="Log Out" {...a11yProps(7)} />
      </Tabs>

     
      <TabPanel value={value} index={0}>

      <Container style={{marginTop: '32px'}}>
        <div direction="row" className={classes.sectionTitle}>
          <img src={MarketIcon} alt="logo" className={classes.sectionTitle} />
          <Typography className={classes.sectionTitle}>Market Overview</Typography>
        </div>

        <div className={classes.sectionSubTitle}>
          <Typography variant="h5" >Todays Sentiments</Typography>
          <Typography variant="subtitle1">As of {new Date().toLocaleString('default', { month: 'long',day: '2-digit',year: 'numeric' }) + ''}</Typography>
        </div>
        <Container className={classes.itemContainer}>
          <PieSentiments/>
          <News/>
   </Container>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Extra />
      </TabPanel>
  
      <TabPanel value={value} index={3}>
      <About />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Team />
      </TabPanel>
      <TabPanel value={value} index={5}>
      < Dashboard />
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item 8
      </TabPanel>

    </Container>
    </Container>
  

   
  );
};

export default Market;
