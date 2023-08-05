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
import ChangeStatus from "../components/useredit/ChangeStatus";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditSocials from "../components/useredit/EditSocials";
import EditEmails from "../components/useredit/EditEmails";
import EditPhones from "../components/useredit/EditPhones";

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
  const { id } = useParams();
  const [value, setValue] = React.useState(0);
  const [user_data, setUser] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    axios
      .get(`https://alumni-backend-lavs.onrender.com/userbyid/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setUser(res.data.data);
        } else {
          setUser(null);
        }
      })
      .catch((error) => {
        setUser(null);
        console.error(error);
      });
  }, [id]);

  return (
    <div className="flex flex-wrap">
      <SideBar />
      {
        // if user_data is not empty or null
        user_data ? (
          <div className="m-5">
            <div className="text-sm breadcrumbs mb-10">
              <ul>
                <li>
                  <a href="/users">Users</a>
                </li>
                <li> {id}</li>
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
                  <Tab label="Status" {...a11yProps(1)} />
                  <Tab label="Works" {...a11yProps(2)} />
                  <Tab label="Education" {...a11yProps(3)} />
                  <Tab label="Socials" {...a11yProps(4)} />
                  <Tab label="Phones" {...a11yProps(5)} />
                  <Tab label="Emails" {...a11yProps(6)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <General user={user_data} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ChangeStatus user={user_data} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <EditWork user={user_data} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <EditEducation user={user_data} />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <EditSocials user={user_data} />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <EditPhones user={user_data} />
              </TabPanel>
              <TabPanel value={value} index={6}>
                <EditEmails user={user_data} />
              </TabPanel>
            </Box>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-2xl">No User Found</h1>
          </div>
        )
      }
    </div>
  );
}
