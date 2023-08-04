
import { Typography } from "@mui/material";
import { formatDistanceToNow, parseISO } from "date-fns-jalali";

const Date_write = ({ time }) => {
    let timeAgo = "";
    if (time) {
        let date = parseISO(time);
        let timer = formatDistanceToNow(date);
        timeAgo = `${timer} قبل`;
    }
    return (
        <>
            <Typography sx={{fontFamily:"vazir"}}>
                {timeAgo}
            </Typography>

        </>
    )
};
export default Date_write;