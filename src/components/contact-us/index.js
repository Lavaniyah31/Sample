import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import React from "react";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import emailjs from "@emailjs/browser";

function ContactUs() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Footer />
    </DashboardLayout>

    // <div>
    //   <Grid>
    //     <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", marginTop: 100 }}>
    //       <CardContent>
    //         <Typography gutterBottom variant="h5">
    //           Contact Us
    //         </Typography>
    //         <br />
    //         <form>
    //           <Grid container spacing={2}>
    //             <Grid xs={12} sm={6} item>
    //               <TextField
    //                 placeholder="Enter first name"
    //                 label="First Name"
    //                 variant="outlined"
    //                 fullWidth
    //                 required
    //               />
    //             </Grid>
    //             <Grid xs={12} sm={6} item>
    //               <TextField
    //                 placeholder="Enter last name"
    //                 label="Last Name"
    //                 variant="outlined"
    //                 fullWidth
    //                 required
    //               />
    //             </Grid>
    //             <Grid item xs={12}>
    //               <TextField
    //                 type="email"
    //                 placeholder="Enter email"
    //                 label="Email"
    //                 variant="outlined"
    //                 fullWidth
    //                 required
    //               />
    //             </Grid>
    //             <Grid item xs={12}>
    //               <TextField
    //                 type="number"
    //                 placeholder="Enter phone number"
    //                 label="Phone"
    //                 variant="outlined"
    //                 fullWidth
    //                 required
    //               />
    //             </Grid>
    //             <Grid item xs={12}>
    //               <TextField
    //                 label="Message"
    //                 multiline
    //                 rows={4}
    //                 placeholder="Type your message here"
    //                 variant="outlined"
    //                 fullWidth
    //                 required
    //               />
    //             </Grid>
    //             <Grid item xs={12}>
    //               <Button
    //                 type="submit"
    //                 variant="contained"
    //                 color="primary"
    //                 sx={{ color: "#e0f2f1" }}
    //                 fullWidth
    //               >
    //                 Submit
    //               </Button>
    //             </Grid>
    //           </Grid>
    //         </form>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </div>
  );
}

export default ContactUs;
