import timeImage from "../images/time.png";
import locationImage from "../images/location.png";
import videoImage from "../images/video.png";
import descriptionImage from "../images/description.png";
import correctImage from "../images/correct.png";
import noImage from "../images/no.png";
import waitImage from "../images/wait.png";
import maybeImage from "../images/maybe.png";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TableMeeting from "./TableMeeting";

const ManageMeeting = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[600]),
    backgroundColor: grey[600],
    "&:hover": {
      backgroundColor: grey[700],
    },
  }));

  const ColorButton2 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    "&:hover": {
      backgroundColor: grey[50],
    },
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h2>Title meeting</h2>
            <p style={{ marginLeft: 24 }}>Owner meeting</p>
            <div className="manage_div_info">
              <img src={timeImage} alt="time.png" />
              <nobr>Time meeting</nobr>
            </div>
            <div className="manage_div_info">
              <img src={locationImage} alt="location.png" />
              <nobr>Location meeting</nobr>
            </div>
            <div className="manage_div_info">
              <img src={videoImage} alt="video.png" />
              <nobr>Video meeting</nobr>
            </div>
            <div className="manage_div_info">
              <img src={descriptionImage} alt="description.png" />
              <nobr>Description meeting</nobr>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: "end" }}>
              <div style={{ width: "-webkit-fill-available" }}>
                <ColorButton2
                  style={{ width: 100, margin: 20, textAlign: "end" }}
                  onClick={console.log("edit")}
                  variant="contained"
                >
                  Edit
                </ColorButton2>
              </div>
              <div style={{ width: "-webkit-fill-available" }}>
                <ColorButton2
                  style={{ width: 100, margin: 20, textAlign: "end" }}
                  onClick={console.log("delete")}
                  variant="contained"
                >
                  Delete
                </ColorButton2>
              </div>
              <div style={{ width: "-webkit-fill-available" }}>
                <ColorButton
                  style={{ width: 100, margin: 20, textAlign: "end" }}
                  onClick={console.log("share")}
                  variant="contained"
                >
                  Share
                </ColorButton>
              </div>
            </div>
          </Grid>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <h4 style={{ marginLeft: 20, marginTop: 15 }}>
                  Availabilities
                </h4>
              </Grid>
              <Grid item xs={8}>
                <nobr className="manage_nobr_info">
                  <img src={correctImage} alt="correct.png" />
                  <nobr>Yes</nobr>
                </nobr>
                <nobr className="manage_nobr_info">
                  <img src={maybeImage} alt="maybe.png" />
                  <nobr>Maybe</nobr>
                </nobr>
                <nobr className="manage_nobr_info">
                  <img src={noImage} alt="no.png" />
                  <nobr>No</nobr>
                </nobr>
                <nobr className="manage_nobr_info">
                  <img src={waitImage} alt="wait.png" />
                  <nobr>Wait</nobr>
                </nobr>
              </Grid>
            </Grid>
          </Box>
          {/* <TableMeeting /> */}
        </Grid>
      </Box>
    </div>
  );
};

export default ManageMeeting;
