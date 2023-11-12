import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./createGroup.css";
import SwitchSelect from "./SwitchSelect";

const CreateGroup = ({
  title,
  setTitle,
  description,
  setDescription,
  location,
  setLocation,
  video,
  setVideo,
  checked,
  setChecked,
  error,
}) => {
  return (
    <div className="CreateGroup">
      <p id="title_form" className="title">
        Create Group Poll
      </p>
      <Box
        className="fieldCreateGroup"
        component="form"
        sx={{
          "& .MuiTextField-root": {
            marginBottom: 4,
            marginRight: 2,
            width: "-webkit-fill-available",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            helperText={error ? "Your invite needs a name" : ""}
            error={error}
            id="title-outlined-required"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            maxRows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <TextField
            id="outlined"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <SwitchSelect
          checked={checked}
          video={video}
          setChecked={setChecked}
          setVideo={setVideo}
        />
      </Box>
    </div>
  );
};

export default CreateGroup;
