import Grid from "@mui/material/Grid";

import { useState } from "react";
import "./createGroupPolly.css";
import * as React from "react";
import News from "./News";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import CreateGroup from "./CreateGroup.js";
<<<<<<< HEAD
import RangeDate from "../Date/RangeDate";
=======
import RangeDate from "../../pages/RangeDate.js";
>>>>>>> 6b75ab52178655d3e9629db1be5c85deade41ee3

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
<<<<<<< HEAD
        <Grid item xs={6}>
=======
        <Grid className="middle_grid" item xs={6}>
>>>>>>> 6b75ab52178655d3e9629db1be5c85deade41ee3
          <div className="field">
            <CreateGroup
              title={title}
              setTitle={updateTitle}
              description={description}
              setDescription={updateDescription}
              location={location}
              setLocation={updateLocation}
<<<<<<< HEAD
              video={video}
=======
              onContraction={onContraction}
>>>>>>> 6b75ab52178655d3e9629db1be5c85deade41ee3
              setVideo={updateVideo}
              checked={checked}
              setChecked={updateCheck}
              error={error}
<<<<<<< HEAD
            />
          </div>
          <div className="field" item xs={6}>
=======
              onExpand={onExpand}
            />
          </div>
          <div className="field">
>>>>>>> 6b75ab52178655d3e9629db1be5c85deade41ee3
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
