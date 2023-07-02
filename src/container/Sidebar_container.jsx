import { Grid } from "@mui/material"
import Sidebar from "../components/sidebar/Sidebar";

const SIdebar_container = () => {
    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{ background: "#AAABA8",display:{
                xs:"none",sm:"none",md:"block"
            } }}
        >
            <Sidebar></Sidebar>
        </Grid>
    )
};
export default SIdebar_container;