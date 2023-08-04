import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography, Button, Badge } from "@mui/material";
import img from '../../assets/post-img.png';
import { BiCommentDetail } from "react-icons/bi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Date_write from "../common/Date_write";
import Writer_component from "../common/Writer_component";
import { CiHeart } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { reactionAdded } from "../../feature/slices/blogsSlice";





const Posts = () => {
    const selector = useSelector(state => state.blog.blog);
    const writers = useSelector(state => state.writers);
    const sorted_selector = selector.slice().sort((a, b) => b.date.localeCompare(a.date));
    const dispatch = useDispatch();

    const posts = sorted_selector.map(data => {
        return (
            <Card sx={{ m: 1, borderRadius: "20px" }}>
                <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", width: 1, p: 1, background: "#cfcfcf" }}>
                        <Typography gutterBottom variant="h5" component="div" fontFamily={"vazir"} >
                            {data.title}
                        </Typography>

                        <Typography sx={{ my: 0 }}>
                            <Chip sx={{ mx: 1, my: 0.5, minWidth: "150px" }} label={<Typography sx={{ fontFamily: "vazir" }}>دسته بندی: {data.group}</Typography>} />
                            <Chip sx={{ mx: 1, my: 0.5, minWidth: "150px" }} label={<Date_write time={data.date}></Date_write>} />
                            <Chip sx={{ mx: 1, my: 0.5, minWidth: "150px" }} label={<Typography sx={{ fontFamily: "vazir" }}>نویسنده:  {data.writer}</Typography>} />
                        </Typography>
                    </Box>

                    <CardContent className="d-flex flex-column border w-100" >
                        <Typography variant="body1" color="text.secondary" align="justify" fontFamily={"vazir"} sx={{ lineHeight: "1.5rem" }}>
                            {data.text.substring(0, 500)}
                        </Typography>
                    </CardContent>

                    <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", width: 1 }}>
                        <Link to={`/blogs/${data.id}`} className="btn btn-primary p-2 btn-sm " style={{ borderRadius: "25px", fontFamily: "vazir",display:"flex",alignContent:"center" }}>دیدن کامل پست</Link>
                        <Box>
                            <Button onClick={() => dispatch(reactionAdded({blogid:data.id,name:"like"}))}>
                                <Badge color="primary" overlap="rectangular" badgeContent={data.actionButton.like} size="small">
                                    <BiLike style={{ fontSize: "2rem" }}> </BiLike>
                                </Badge>
                            </Button>
                            <Button onClick={() => dispatch(reactionAdded({blogid:data.id,name:"heart"}))}>
                                <Badge color="primary" overlap="rectangular" badgeContent={data.actionButton.heart} size="small">
                                    <CiHeart style={{ color: "red", fontSize: "2rem" }}></CiHeart>
                                </Badge>
                            </Button>
                        </Box>

                    </Box>

                </CardActionArea>
            </Card>
        )

    })


    return (
        <>
            <Box sx={{ p: 2 }}>
                {posts}
            </Box>

        </>
    )
};

export default Posts;