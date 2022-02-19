import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";
// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";
// import RadioGroup from "@mui/material/RadioGroup";
// import Radio from "@mui/material/Radio";
// import EventNoteIcon from "@mui/icons-material/EventNote";

// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";

const CraeteSchedule = () => (
  <DashboardLayout>
    <DashboardNavbar />

    <Footer />
  </DashboardLayout>

  // <Grid>
  //   <Paper elevation={20} style={paperStyle}>
  //     <Grid align="center">
  //       <Avatar style={avatarStyle}>
  //         <EventNoteIcon />
  //       </Avatar>
  //       <h2 style={headerStyle}>Create Schedule</h2>
  //     </Grid>
  //     <form onSubmit={scheduleFormHandler}>
  //       <Grid container direction="column" spacing={2} sx={{ marginTop: 4 }}>
  //         <Grid item>
  //           <TextField
  //             fullWidth
  //             label="Meeting Name"
  //             placeholder="Meeting Name"
  //             onChange={(event) => setMeetingName(event.target.value)}
  //             value={meetingName}
  //           />
  //         </Grid>
  //         <Grid item>
  //           <TextField
  //             fullWidth
  //             label="Meeting Link"
  //             placeholder="Meeting Link"
  //             onChange={(event) => setMeetingLink(event.target.value)}
  //             value={meetingLink}
  //           />
  //         </Grid>
  //         <Grid item>
  //           <TextField
  //             id="outlined-multiline-static"
  //             label="Description"
  //             multiline
  //             rows={4}
  //             defaultValue=""
  //             fullWidth
  //             onChange={(event) => setMeetingDescription(event.target.value)}
  //             value={meetingDescription}
  //           />
  //         </Grid>
  //         <Grid item>
  //           <Grid container justifyContent="space-between">
  //             <Grid item>
  //               <TextField
  //                 id="date"
  //                 label="Date"
  //                 type="date"
  //                 defaultValue="2017-05-24"
  //                 // sx={{ width: 250 }}
  //                 InputLabelProps={{
  //                   shrink: true,
  //                 }}
  //                 fullWidth
  //                 onChange={(event) => setMeetingDate(event.target.value)}
  //                 value={meetingDate}
  //               />
  //             </Grid>
  //             <Grid item>
  //               <TextField
  //                 id="time"
  //                 label="Time"
  //                 type="time"
  //                 defaultValue="07:30"
  //                 InputLabelProps={{
  //                   shrink: true,
  //                 }}
  //                 inputProps={{
  //                   step: 300, // 5 min
  //                 }}
  //                 fullWidth
  //                 onChange={(event) => setMeetingTime(event.target.value)}
  //                 value={meetingTime}
  //               />
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //       <Grid container spacing={1} sx={{ marginTop: 2 }} justifyContent="flex-end">
  //         <Grid item>
  //           <Button
  //             variant="contained"
  //             sx={{ minWidth: 100, backgroundColor: "#e53935", color: "#e0f2f1" }}
  //             onClick={cancelHandler}
  //           >
  //             Cancel
  //           </Button>
  //         </Grid>
  //         <Grid item>
  //           <Button
  //             type="submit"
  //             variant="contained"
  //             color="primary"
  //             sx={{ minWidth: 100, color: "#e0f2f1" }}
  //           >
  //             Save
  //           </Button>
  //         </Grid>
  //       </Grid>
  //     </form>
  //   </Paper>
  // </Grid>
);

export default CraeteSchedule;
