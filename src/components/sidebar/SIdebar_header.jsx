import { Box, Divider } from '@mui/material';
import logo from '../../assets/logo.jpg';

const Sidebar_header = () => {
    return (
        <>
            <Box component="div" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <Box component="img" src={logo} sx={{ height: "auto", maxWidth: "400px", width: 1 }} className='logo_img' />
            </Box>
            <Divider sx={{mt:6}} variant="middle"  color={"red"} variant="middle" />
        </>
    )
};

export default Sidebar_header;