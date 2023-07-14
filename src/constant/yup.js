
import * as Yup from "yup";

export const yupSchema = Yup.object().shape({
    title: Yup.string().required(" عنوان الزامی می باشد   "),
    // image: Yup.required(),
    text: Yup.string().required(" ایمیل الزامی می باشد"),
    group: Yup.string().required("گروه خود را وارد کیند"),
    date: Yup.string().required(),
    // commemts: Yup.string(),
})