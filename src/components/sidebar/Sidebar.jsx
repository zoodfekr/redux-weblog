import { Box, Card } from "@mui/material";
import Sidebar_content from "./Sidebar_content";
import Sidebar_header from "./Sidebar_header";
import { darktheme, lighttheme } from "../../container/theme";
import { useSelector } from "react-redux";


const Sidebar = () => {
    const selector = useSelector(state => state.theme);
    let theme = selector.mode ? darktheme : lighttheme;

    return (
        <>
            <Card sx={{
                height: "100vh",
                background: theme.palette.primary.main
            }}>
                <Sidebar_header></Sidebar_header>
                <Sidebar_content></Sidebar_content>
            </Card>
        </>
    )
};

export default Sidebar;

