import { Grid } from "@mui/material";
import Sidebar_container from "./Sidebar_container";
import Content_container from "./Content_container";

const App_container = () => {
    return (

        <Grid container sx={{height:"100vh"}}>
            <Sidebar_container></Sidebar_container>
            <Content_container></Content_container>
        </Grid>

    )
};

export default App_container;