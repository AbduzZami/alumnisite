import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SideBar from "../components/sidebar";
import General from "../components/useredit/General";
import EditEducation from "../components/useredit/EditEducation";
import EditWork from "../components/useredit/EditWork";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function UserEditPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-wrap">
      <SideBar />
      <div className="m-5">
        <div className="text-sm breadcrumbs mb-10">
          <ul>
            <li>
              <a href="/posts">Posts</a>
            </li>
            <li>0</li>
          </ul>
        </div>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="Works" {...a11yProps(1)} />
              <Tab label="Education" {...a11yProps(2)} />
              <Tab label="Socials" {...a11yProps(3)} />
              <Tab label="Phones" {...a11yProps(4)} />
              <Tab label="Emails" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <General />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <EditWork />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <EditEducation />
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Three
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
