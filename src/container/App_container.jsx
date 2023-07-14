import { Box, Grid } from "@mui/material";
import Sidebar_container from "./Sidebar_container";
import Content_container from "./Content_container";
import { Outlet } from "react-router-dom";
import DrawerActionButton from "../components/sidebar/DrawerActionButton";
import SidebarDrawer from "../components/sidebar/SidebarDrawer";

const App_container = () => {
    return (

        <>

            <Grid container sx={{ height: "100vh" }}>

                <Sidebar_container></Sidebar_container>
                <Content_container></Content_container>
                <DrawerActionButton></DrawerActionButton>
                <SidebarDrawer></SidebarDrawer>
            </Grid>



        </>
    )
};

export default App_container;