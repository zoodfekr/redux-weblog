import { Box, Fab } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { red, purple } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../feature/slices/sidebarSlice";


const DrawerActionButton = () => {

    const dispatch = useDispatch();
    const selector = useSelector(state => state.sidebar);

    const handleEvent = () => {
        dispatch(toggleSidebar());
    }

    return (

        <Box sx={{
            position: "absolute",
            display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none"
            }
        }}>
            <Fab color="secondary"
                aria-label="menu"
                size="medium"
                onClick={handleEvent}
                sx={{

                    m: 1,
                    backgroundColor: purple[300],
                }}>
                <AiOutlineMenu />
            </Fab>
        </Box>
    )
};

export default DrawerActionButton;