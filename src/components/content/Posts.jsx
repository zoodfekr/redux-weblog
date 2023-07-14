import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import img from '../../assets/post-img.png';
import { BiCommentDetail } from "react-icons/bi";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const Posts = () => {


    const selector = useSelector(state => state.blog);

    const posts = selector.map(data => {
        return (
            <Card sx={{ maxWidth: "1200px", m: 2, borderRadius: "20px" }}>
                <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", width: 1, p: 1, background: "#f2b8ff" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>

                        <Typography sx={{ my: 1 }}>
                            <Chip label={data.date} />
                            <Chip sx={{ mx: 1 }} label={data.group} />
                        </Typography>
                    </Box>

                    <CardMedia
                        component="img"
                        height="auto"
                        image={img}
                        alt="green iguana"
                        sx={{ width: 1, height: "250px" }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" align="justify">
                            {data.text}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>
        )

    })


    return (
        <>
            <Box sx={{ }}>
                {posts}
            </Box>

        </>
    )
};

export default Posts;