import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";


const Content_container = () => {
    return (
        <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={10}
            xl={10}
            sx={{ background: "#e0e5e6", }}
        >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                width: 1,
                height: "100vh",
                overflowX: "hidden",
                overflowY: "auto",
            }}>
                <Box sx={{ width: 1, m: 3 }}>
                    <Outlet></Outlet>
                </Box>
            </Box>

        </Grid>
    )
};
export default Content_container;