import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../feature/slices/sidebarSlice';


const Sidebar_content = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const btnStyle = { my: 2, width: "150px", color: "gray", p: 0, m: 2, display: "flex", justifyContent: "start" };
    const boxStyle = { display: "flex", flexDirection: "column", alignItems: "center" };

    return (
        <Box sx={boxStyle}>
            <Button onClick={() => { dispatch(toggleSidebar()), navigate('/') }} startIcon={<AiOutlineHome className="mx-3 text-bold" />} sx={btnStyle}> <Typography><b>home</b></Typography> </Button>
            <Button onClick={() => { dispatch(toggleSidebar()), navigate('/add') }} startIcon={<RiAdminLine className="mx-3 text-bold" />} sx={btnStyle}> <Typography><b>Add</b></Typography> </Button>
            <Button startIcon={<BiMessageAltDetail className="mx-3" />} sx={btnStyle}> <Typography><b>call</b> </Typography></Button>
            <Button startIcon={<SiAboutdotme className="mx-3" />} sx={btnStyle}>  <Typography><b>about</b> </Typography> </Button>

        </Box>
    )
};

export default Sidebar_content;