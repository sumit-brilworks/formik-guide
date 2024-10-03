import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

function App() {
  // const validate = (values) => {
  //   const errors = {};
  //   if (values.name === "") {
  //     errors.name = "This name is required";
  //   }
  //   if (values.email === "") {
  //     errors.email = "This email is required";
  //   }
  //   if (values.password === "") {
  //     errors.password = "This password is required";
  //   }
  //   if (values.confirmPassword === "") {
  //     errors.confirmPassword = "This confirm password is required";
  //   }

  //   if (
  //     values.password !== values.confirmPassword &&
  //     values.password !== "" &&
  //     values.confirmPassword !== ""
  //   ) {
  //     errors.root = "The password and the confirm password doen't matches";
  //   }
  //   return errors;
  // };

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },

    onSubmit: (data) => {
      console.log(data);
      console.log("form is submitted");
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(3).required("name is required"),
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().min(3).max(12).required("name is required"),
      sj: Yup.A,
      confirmPassword: Yup.string()
        .min(3)
        .max(12)
        .required("Confirm password is required"),
    }),
  });
  console.log("Conponent is rendering");
  console.log("Errors", formik.errors);
  console.log("Touched", formik.touched);
  console.log("Status", formik.status);
  return (
    <div
      className={`bg-[url("../public/background.jpg")] bg-cover bg-center min-h-screen  font-serif flex justify-center items-center`}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="bg-neutral-700 flex flex-col gap-4 p-10  rounded-lg w-[420px]"
      >
        <input
          placeholder="Enter your username"
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps("name")}
          className="rounded outline-yellow-400 p-3"
        />
        <p className="text-red-800">
          {formik.touched?.name && formik.errors?.name}
        </p>
        <input
          placeholder="Enter your email"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          className="rounded outline-yellow-400 p-3"
          type="email"
        />
        <p className="text-red-800">
          {formik.touched?.email && formik.errors?.email}
        </p>

        <input
          type="password"
          autoComplete="new-password"
          id="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          className="rounded outline-yellow-400 p-3"
          placeholder="Enter your passsword"
        />
        <p className="text-red-800">
          {formik.touched?.password && formik.errors?.password}
        </p>

        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="rounded outline-yellow-400 p-3 "
          placeholder="Confirm your passsword"
        />
        <p className="text-red-800">
          {formik.touched?.confirmPassword && formik.errors?.confirmPassword}
        </p>
        <p className="text-red-800">{formik.errors?.root}</p>
        <button
          className="bg-[blue] hover:bg-[violet] p-3 hover:scale-105 rounded"
          type="submit"
          formNoValidate
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
