import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import "../Components/CreationMeeting/createGroup.css";
import "../Components/ManageMeeting/manage.css";
import ManageMeeting from "../Components/ManageMeeting/ManageMeeting";
import News from "../Components/CreationMeeting/News";
import news from "../news.json";

const Manage = () => {
  const [numberOfDivsNews, setNumberOfDivsNews] = useState(0);

  news.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const calculatePageHeight = () => {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      console.log(height);
      setNumberOfDivsNews(Math.ceil(height / 500) - 1);
    };

    window.onload = calculatePageHeight;

    return () => {
      window.onload = null;
    };
  });

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid className="sx_news" item xs={3}>
            <News news={news} start={0} numberOfDivsNews={2} />
          </Grid>
          <Grid className="field" item xs={6}>
            <ManageMeeting />
          </Grid>
          <Grid item xs={3}>
            <News news={news} start={3} numberOfDivsNews={5} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Manage;

{
  /* <Grid container spacing={2}>
          <Grid className="manage_information" item xs={6}>
            
          </Grid>
          <Grid className="manage_button" item xs={6}></Grid>
        </Grid> */
}
