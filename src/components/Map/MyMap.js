import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

import "./MyMap.css";

const position = [51.505, -0.09];

function MyMap() {
  const { sales } = reportsLineChartData;

  return (
    <MapContainer center={position} zoom={13} scrollwheelzoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {/* <Grid item xs={12} md={12} lg={12}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="opacity"
                title="Soil Mositure"
                count="55%"
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than Last week",
                }}
              />
            </MDBox>
          </Grid> */}

          <Grid item xs={12} md={12} lg={12}>
            <MDBox mb={1}>
              <ReportsLineChart
                color="success"
                title="Soil Mositure "
                description={
                  <>
                    (<strong>+15%</strong>) Last week updated in soil mositure.
                  </>
                }
                date="updated 1 week ago"
                chart={sales}
              />
            </MDBox>
          </Grid>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
