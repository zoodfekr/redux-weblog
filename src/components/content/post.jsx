import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import img from '../../assets/post-img.png'
import { delete_post, selectedBlogbyId } from "../../feature/slices/blogsSlice";
import Date_write from "../common/Date_write";
import Writer_cimponent from "../common/Writer_component";

const post = () => {

    const { blogid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const single_post = useSelector(state => selectedBlogbyId(state, blogid));


    const handleDelete = () => {
        dispatch(delete_post(blogid));
        navigate('/');
    }

    if (!single_post) {

        return (
            <div className="alert alert-danger" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ fontFamily: "vazir" }}>لطفا به صفحه اصلی بروید.....</h1>
                <h4 style={{ fontFamily: "vazir" }}>مشکلی پپش آمده...</h4>
                <button style={{ fontFamily: "vazir" }} className="btn btn-danger mt-5 w-25" onClick={() => navigate("/")}>صفحه اصلی</button>
            </div>
        )
    }

    return (
        <>
            <Box sx={{ p: 2 }}>

                <Card sx={{ maxWidth: "1200px", m: 2, borderRadius: "20px" }}>
                    <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", width: 1, p: 1, background: "#cfcfcf" }}>
                            <Typography gutterBottom variant="h5" component="div" fontFamily={"vazir"} >
                                {single_post.title}
                            </Typography>

                            <Box sx={{ width: 1, display: "flex", justifyContent: "space-between", px: 2 }}>
                                <Box>
                                    <Chip sx={{ mx: 1, my: 0.5, minWidth: "150px" }} label={<Date_write time={single_post.date}></Date_write>} />
                                    <Chip sx={{ mx: 1, my: 0.5, minWidth: "150px" }} label={<Typography sx={{ fontFamily: "vazir" }}>دسته بندی: {single_post.group}</Typography>} />
                                    <Chip sx={{ mx: 1, my: 0.5, minWidth: "150px" }} label={<Typography sx={{ fontFamily: "vazir" }}>نویسنده:  {single_post.writer}</Typography>} />

                                </Box>
                                <Box>


                                    <Button className="w-100  mx-1"
                                        onClick={() => navigate(`/edit/${single_post.id}`)}>
                                        <Typography sx={{ fontFamily: "vazir" }} className="btn btn-primary btn-sm w-100">
                                            ویرایش
                                        </Typography>
                                    </Button>


                                    <Button className="w-100 mx-1" >
                                        <Typography sx={{ fontFamily: "vazir" }} onClick={handleDelete} className="btn btn-danger btn-sm w-100">
                                            حذف
                                        </Typography>
                                    </Button>


                                </Box>
                            </Box>
                        </Box>


                        <CardMedia
                            component="img"
                            height="auto"
                            image={img}
                            alt="green iguana"
                            sx={{ width: 1, height: "250px" }}
                        />

                        <CardContent className="d-flex flex-column border w-100" >
                            <Typography variant="body2" color="text.secondary" align="justify" fontFamily={"vazir"} sx={{ lineHeight: "1.5rem" }}>
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