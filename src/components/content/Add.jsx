import { Card, Button, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, TextareaAutosize } from "@mui/material";
import { useFormik } from 'formik';
import { yupSchema } from "../../constant/yup";
import { format } from 'date-fns-jalali'
import { send_post } from "../../services/postservices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { added_post } from "../../feature/slices/blogsSlice";
import { nanoid } from "@reduxjs/toolkit";

const Add = () => {

    const disppatch = useDispatch();
    const navigate = useNavigate();

    // const use_send_post = async values => {
    //     try {
    //         const { status } = await send_post(values)
    //         console.log("status", status);
    //         if (status === 201) {
    //             navigate("/");
    //         }
    //     } catch {
    //         console.log("error in send post")
    //     }
    // }

 

    const formik = useFormik({ 
        initialValues: {
            id: nanoid(),
            title: '',
            text: '',
            group: '',
            date: new Date().toISOString(),
        },
        validationSchema: yupSchema,
        onSubmit: (values, event) => {
            // use_send_post(values);
            console.log(values);
            navigate("/");
            disppatch(added_post(values))
        }
    });


    return (

        <>
            <Card sx={{
                borderRadius: "25px",
                backdropFilter: "blur(5px)",
                width: '100%'
            }}>

                <form onSubmit={formik.handleSubmit}>
                    <CardContent>
                        <Grid sx={{ mt: 2, px: 1 }}>
                            <TextField

                                sx={{ textAlign: 'right', mb: 2 }}
                                id="title"
                                name="title"
                                label="موضوع"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                                dir="helpertext "
                                fullWidth
                                size="small"
                                // color="danger"
                                variant="outlined"
                            />

                            {/* <input
                                error={formik.touched.image && Boolean(formik.errors.image)}
                                helperText={formik.touched.image && formik.errors.image}
                                value={formik.values.image}
                                onChange={formik.handleChange}
                                type="file"
                                id="image"
                                name="image"
                                accept=".jpg, .png, .gif"
                                className="border form form-control my-2"
                                placeholder="تصویر"
                            /> */}




                            <TextareaAutosize
                                id="text"
                                name="text"
                                error={formik.touched.text && Boolean(formik.errors.text)}
                                helpertext={formik.touched.text && formik.errors.text}
                                value={formik.values.text}
                                onChange={formik.handleChange}
                                className="col-12 form form-control"
                                minRows={12}
                                aria-label="maximum 4 rows"
                                placeholder="متن خود را وارد کنید...."
                            />



                            <FormControl fullWidth className="form form-control my-2">
                                <InputLabel id="demo-simple-select-label">دسته بندی</InputLabel>
                                <Select
                                    error={formik.touched.group && Boolean(formik.errors.group)}
                                    helpertext={formik.touched.group && formik.errors.group}
                                    labelId="demo-simple-select-label"
                                    id="group"
                                    name="group"
                                    value={formik.values.group}
                                    label="دسته بندی"
                                    onChange={formik.handleChange}
                                >

                                    <MenuItem value={"10"}>عملی</MenuItem>
                                    <MenuItem value={"20"}>پزشکی</MenuItem>
                                    <MenuItem value={"30"}>تکنولوژی</MenuItem>
                                </Select>
                            </FormControl>

                            <Button
                                type="submit"
                                color="success"
                                variant="contained"
                                sx={{ mt: 2 }}
                                fullWidth
                            >
                                ارسال
                            </Button>

                        </Grid>

                    </CardContent>


                </form>



            </Card >


        </>

    )
};

export default Add;