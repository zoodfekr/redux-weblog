import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Writer_component = ({ userid }) => {
    
    let writer = useSelector(state => state.wr_gr.writers);
    console.log("ramin",writer)

    // if (writer) {
    //     return (
    //         <>
    //             <Typography sx={{ fontFamily: "vazir" }}>
    //                 نویسنده: {writer}
    //             </Typography>
    //         </>
    //     )
    // }
    return (
        <>
            <Typography sx={{ fontFamily: "vazir" }}>
                نویسنده ناشناس
            </Typography>
        </>
    )
};
export default Writer_component;