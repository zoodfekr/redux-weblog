
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { yupSchema } from "../../constant/yup";
import { Box, Card } from "@mui/material";
import { useState } from "react";
import { update_post } from '../../feature/slices/blogsSlice';

const Edit = () => {
    const navigate = useNavigate();
    const { blogid } = useParams();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.blog.blog).find(event => event.id == blogid);
    const [data, setdata] = useState(selector);

    const handleChange = event => {
        let value = event.target.value;
        let Ename = event.target.name;
        setdata({ ...data, [Ename]: value });
    };

    const handleClick = () => {
        dispatch(update_post({ data }));
        navigate('/')
    }

    if (!selector || !data) {
        return (
            <div className="alert alert-danger" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ fontFamily: "vazir" }}>لطفا به صفحه اصلی بروید.....</h1>
                <h4 style={{ fontFamily: "vazir" }}>مشکلی پپش آمده...</h4>
                <button style={{ fontFamily: "vazir" }} className="btn btn-danger mt-5 w-25" onClick={() => navigate("/")}>صفحه اصلی</button>
            </div>
        )
    }

    return (
        <Box sx={{ borderRadius: "25px", p: 2 }}>

            <Box sx={{ p: 1, borderRight: "8px solid red" }}>
                <h2 style={{ fontFamily: "vazir" }}>
                    ویرایش پست
                    <span style={{ color: "red", fontSize: "3rem" }}>؛</span>
                </h2>
            </Box>

            <Card sx={{ mt: 1, borderRadius: "25px", p: 2 }}>
                <form autoComplete="off" >
                    <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>
                        <label style={{ fontFamily: "vazir" }} htmlFor="title">عنوان پست :</label>
                        <input
                            className="form form-control"
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            style={{ fontFamily: "vazir", borderRadius: "20px" }}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>

                        <label htmlFor="blogContent" style={{ fontFamily: "vazir" }}>محتوای اصلی :</label>
                        <textarea
                            rows="20" className="form form-control"
                            id="text"
                            name="text"
                            value={data.text}
                            style={{ fontFamily: "vazir", borderRadius: "20px" }}
                            onChange={handleChange}

                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <button
                            style={{ fontFamily: "vazir" }}
                            type="button"
                            className="btn btn-success w-100 m-1"
                            onClick={handleClick}
                        >
                            ویرایش پست
                        </button>

                        <button
                            style={{ fontFamily: "vazir" }}
                            type="button"
                            className="btn btn-warning w-100 m-1"
                            onClick={() => navigate('/')}
                        >
                            انصراف
                        </button>

                    </div>



                </form>
            </Card>




        </Box>
    )
};
export default Edit;

