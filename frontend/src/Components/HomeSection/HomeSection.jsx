import { Avatar } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Starweet text is required"),
});

const HomeSection = () => {
  const handleSubmit = (values) => {
    console.log("values ", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288883.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais"
          />
          <div className="w-full">
            <form>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening?"
                  className={`border-none outline-none text-xl bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
