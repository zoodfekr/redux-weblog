import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import img from '../../assets/post-img.png';
import { BiCommentDetail } from "react-icons/bi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Posts = () => {


    const selector = useSelector(state => state.blog);

    const posts = selector.map(data => {
        return (
            <Card sx={{ maxWidth: "1200px", m: 1, borderRadius: "20px" }}>
                <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", width: 1, p: 1, background: "#f2b8ff" }}>
                        <Typography gutterBottom variant="h5" component="div" fontFamily={"vazir"} >
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
                    <CardContent className="d-flex flex-column border w-100" >
                        <Typography variant="body1" color="text.secondary" align="justify"  fontFamily={"vazir"} sx={{lineHeight: "1.5rem"}}>
                            {data.text.substring(0, 500)}
                        </Typography>
                    </CardContent>

                    <Box sx={{ p:2}}>
                        <Link to={`/blogs/${data.id}`} className="btn btn-secondary btn-sm">دیدن کامل پست</Link>
                    </Box>

                </CardActionArea>
            </Card>
        )

    })


    return (
        <>
            <Box sx={{p:2}}>
                {posts}
            </Box>

        </>
    )
};

export default Posts;