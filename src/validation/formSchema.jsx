import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Name is a required field"),
  size: yup.string().trim().required("Size is a required field"),
  specialInstructions: yup.string().trim(),
});

export default formSchema;
