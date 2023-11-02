import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import pickAddOnList from "./PickAddOnList";
function PickAddOn({addOn}) {
  const [pick, setPick] = React.useState([])
  const handlePick = (e) => {
    const {value, checked} = e.target
    if(checked){
      setPick((prev)=>[...prev, value])
    }
  }
  return (
    <>
      {pickAddOnList.map((item) => (
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
          key={item.id}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <input type="checkbox" checked={pick} value={}*/ />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  ${item.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
}

export default PickAddOn;
