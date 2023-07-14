import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import img from '../../assets/post-img.png'
const post = () => {

    const { blogid } = useParams();
    const single_post = useSelector(state => state.blog.find(blog => blog.id == blogid));


    console.log("blogid", blogid, single_post);

    return (
        <>
            <Box sx={{ p: 2 }}>

                <Card sx={{ maxWidth: "1200px", m: 2, borderRadius: "20px" }}>
                    <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", width: 1, p: 1, background: "#f2b8ff" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {single_post.title}
                            </Typography>

                            <Typography sx={{ my: 1 }}>
                                <Chip label={single_post.date} />
                                <Chip sx={{ mx: 1 }} label={single_post.group} />
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
                            <Typography variant="body2" color="text.secondary" align="justify" fontFamily={"vazir"} sx={{lineHeight: "1.5rem"}}>
                                {single_post.text}
                            </Typography>
                        </CardContent>


                    </CardActionArea>
                </Card>

            </Box>
        </>
    )
};

export default post;