import { Box, Divider,Button } from '@mui/material';
import logo from '../../assets/logo5.jpg';
import Themebutton from '../common/Themebutton';


const Sidebar_header = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Themebutton></Themebutton>
            </Box>
            <Divider sx={{ mt: 1 }} variant="middle" color={"gray"} variant="middle" />
            <Box component="div" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                {/* <Box component="img" src={logo} sx={{ height: "250px", maxWidth: "80%", width: 1,borderRadius:"150px" }} className='logo_img' /> */}
            </Box>
            <Divider sx={{ mt: 0 }} variant="middle" color={"gray"} variant="middle" />

        </>
    )
};

export default Sidebar_header;