/* eslint-disable react/prop-types */
import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import pickAddOnList from "./PickAddOnList";
function PickAddOn({addOn}) {
  const [picking, setPicking] = React.useState([])
  const [pick, setPick] = React.useState(false)
  
  const handlePick =(event) =>{
    event.preventDefault()
    set
    if(!picking)return;
  }
const handlePicking = (e, id) => {
    setPicking(prev => prev.concat(id))
    // if(checked){
    //   setPicking((prev)=> prev.concat({id: Number(id), value}))
    // }
    handlePick(e)
    addOn(picking)
  
  }
  return (
    <>
      {pickAddOnList.map((item) => (
        <Paper
          style={picking === true ? {backgroundColor: "navajowhite"} : {}}
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
              <ButtonBase sx={{ width: 10, height: 10 }}>
                <input type="checkbox" checked={pick} name="check" value={pick} onChange={() => handlePicking(item)}/>
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
