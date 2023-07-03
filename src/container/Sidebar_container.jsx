import { Grid } from "@mui/material"
import Sidebar from "../components/sidebar/Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { darktheme, lighttheme } from "./theme";

const Sidebar_container = () => {

    const selector = useSelector(state => state.theme);
    let theme = selector.mode? darktheme : lighttheme;

    return (
        <Grid
            item
            xs={0}
            // sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{
                background: theme.palette.primary.main, display: {
                    xs: "none", sm: "none", md: "block"
                }
            }}
        >
            <Sidebar></Sidebar>
        </Grid>
    )
};
export default Sidebar_container;