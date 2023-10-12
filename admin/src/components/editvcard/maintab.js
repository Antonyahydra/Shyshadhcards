import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Basicdetails from '../../Pages/editvcard/basicdetails/Basicdetails';
import Templates from '../../Pages/editvcard/vcardtemplates/Templates';
import Businesshours from '../../Pages/editvcard/businesshours/Businesshours';
import Viewservices from '../../Pages/editvcard/services/Viewservices';
import Viewproducts from '../../Pages/editvcard/products/Viewproducts';
import Apoinments from '../../Pages/editvcard/appoinments/Apoinments';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import Sociallink from '../../Pages/editvcard/sociallinks/Sociallink';
export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
  <Tab label="Basic Details" value={1} />
  <Tab label="VCard Templates" value={2} />
  <Tab label="Business Hours" value={3} />
  <Tab label="Services" value={4} />
  <Tab label="Products" value={5} />
  <Tab label="Apoinments" value={6} />
  <Tab label="Social Links-Website" value={7} />
</TabList>
      </Box>
      <TabPanel value={1}><Basicdetails/></TabPanel>
      <TabPanel value={2}><Templates/></TabPanel>
      <TabPanel value={3}>
        <Businesshours/>
       
        </TabPanel>
      <TabPanel value={4}><Viewservices/></TabPanel>
      <TabPanel value={5}><Viewproducts/></TabPanel>
      <TabPanel value={6}><Apoinments/></TabPanel>
      <TabPanel value={7}><Sociallink/></TabPanel>
    </TabContext>
  </Box>
    
  );
}
