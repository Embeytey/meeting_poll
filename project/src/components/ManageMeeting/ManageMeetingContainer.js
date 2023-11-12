import Grid from "@mui/material/Grid";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import "../CreationMeeting/createGroup.css";
import "../CreationMeeting/createGroupPolly.css";
import "../ManageMeeting/manage.css";
import ManageMeeting from "../ManageMeeting/ManageMeeting";
import News from "../CreationMeeting/News";
import news from "../../news.json";
import TableMeeting from "../ManageMeeting/TableMeeting";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const Manage = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[600]),
    backgroundColor: grey[600],
    "&:hover": {
      backgroundColor: grey[700],
    },
  }));

  const submitForm = () => {
    console.log(selectedColumns);
  };

  const [selectedColumns, setSelectedColumns] = useState([]);

  const columnSelection = (columnName) => {
    // console.log("col ", columnName);
    if (columnName !== "partecipants") {
      if (selectedColumns.includes(columnName)) {
        setSelectedColumns(selectedColumns.filter((col) => col !== columnName));
      } else {
        setSelectedColumns([...selectedColumns, columnName]);
      }
      // console.log("list ", selectedColumns);
    }
  };

  return (
    <div className="CreateGroup">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid className="sx_news" item xs={3}>
            <News news={news} start={0} numberOfDivsNews={2} />
          </Grid>
          <Grid style={{ marginTop: 32, paddingLeft: 0 }} item xs={6}>
            <div className="field">
              <ManageMeeting />
              <TableMeeting
                selectedColumns={selectedColumns}
                columnSelection={columnSelection}
              />
              <div style={{ textAlign: "end" }}>
                <ColorButton
                  style={{ margin: 20, textAlign: "end" }}
                  onClick={submitForm}
                  variant="contained"
                >
                  Book it
                </ColorButton>
              </div>
            </div>
          </Grid>
          <Grid className="dx_news" item xs={3}>
            <News news={news} start={3} numberOfDivsNews={5} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Manage;
