import Grid from "@mui/material/Grid";

import { useState } from "react";
import "./createGroupPolly.css";
import * as React from "react";
import News from "./News";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import CreateGroup from "./CreateGroup.js";
import RangeDate from "../Date/RangeDate";


const CreateGroupPolly = ({ news }) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[600]),
    backgroundColor: grey[600],
    "&:hover": {
      backgroundColor: grey[700],
    },
  }));

  const [error, setError] = useState(false);

  const [title, setTitle] = useState("");

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
    if (newTitle !== "") setError(false);
  };

  const [description, setDescription] = useState("");

  const updateDescription = (newDescription) => {
    setDescription(newDescription);
    // console.log(description);
  };

  const [location, setLocation] = useState("");

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
    // console.log(location);
  };

  const [video, setVideo] = useState("Zoom");

  const updateVideo = (newVideo) => {
    // console.log("new ", newVideo);
    // setVideo(newVideo);
  };

  const [checked, setChecked] = React.useState(false);

  const updateCheck = (event) => {
    setChecked(event.target.checked);
    // console.log(event.target.checked);
  };

  const onExpand = () => {
    const btn = document.getElementsByClassName("field");
    btn[0].style.marginBottom = "120px";
  };

  const onContraction = () => {
    const btn = document.getElementsByClassName("field");
    btn[0].style.marginBottom = "0px";
  };

  const submitForm = () => {
    if (title === "") {
      setError(true);
      const element = document.getElementById("title_form");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      console.log(
        "title ",
        title,
        " description ",
        description,
        " location ",
        location
      );
      console.log("checked ", checked);
      if (checked) console.log("video ", video);
      updateTitle("");
      setChecked(false);
      updateDescription("");
      updateLocation("");
      updateVideo("");
    }
  };

  return (
    <div className="CreateGroupPolly">
      <Grid container spacing={2}>
        <Grid className="sx_news" item xs={3}>
          <News news={news} start={0} numberOfDivsNews={2} />
        </Grid>

        

        <Grid className="middle_grid" item xs={6}>

          <div className="field">
            <CreateGroup
              title={title}
              setTitle={updateTitle}
              description={description}
              setDescription={updateDescription}
              location={location}
              setLocation={updateLocation}

              video={video}

              onContraction={onContraction}

              setVideo={updateVideo}
              checked={checked}
              setChecked={updateCheck}
              error={error}
              onExpand={onExpand}
            />
          </div>
          <div className="field">
            <RangeDate />
          </div>
          <div style={{ textAlign: "end" }}>
            <ColorButton
              style={{ margin: 20, textAlign: "end" }}
              onClick={submitForm}
              variant="contained"
            >
              Create Invate and Continue
            </ColorButton>
          </div>
        </Grid>
        <Grid className="dx_news" item xs={3}>
          <News news={news} start={3} numberOfDivsNews={5} />
        </Grid>
        </Grid>
        
    </div>
  );
};

export default CreateGroupPolly;
