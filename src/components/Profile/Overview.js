/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "../MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
// import Footer from "../../examples/Footer";
import ProfileInfoCard from "../../examples/Cards/InfoCards/ProfileInfoCard";
import { TransitionsModal } from "./Model";

// Overview page components
// import Header from "../../layouts/profile/components/Header";
// import PlatformSettings from "../../layouts/profile/components/PlatformSettings";

// import { TransitionsModal } from "../../components/";
// Data

// Images

// form component

function Overview() {
  return (
    <DashboardLayout>
      <MDBox mb={5} />
      <MDBox mt={5} mb={5}>
        <Grid container spacing={-2}>
          <Grid item xs={12} md={12} xl={4} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileInfoCard
              title="profile information"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              info={{
                fullName: "Farmer 1",
                mobile: "+94 777 777 777",
                email: "farmer1@gmail.com",
                location: "Kurunagala",
              }}
              social={[]}
              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
            />
            <Divider orientation="vertical" sx={{ mx: 0 }} />
          </Grid>
        </Grid>
      </MDBox>
      <TransitionsModal />
    </DashboardLayout>
  );
}

export default Overview;
