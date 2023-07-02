import { Grid } from "@mui/material";
import SIdebar_container from "./Sidebar_container";
import Content_container from "./Content_container";

const App_container = () => {
    return (

        <Grid container sx={{height:"100vh"}}>
            <SIdebar_container></SIdebar_container>
            <Content_container></Content_container>
        </Grid>

    )
};

export default App_container;