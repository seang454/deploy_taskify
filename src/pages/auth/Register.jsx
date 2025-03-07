import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRegisterMutation } from "../../features/auth/authApiSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";

export default function Register() {
  const [postUserRegisters, { data, isLoading, error }] = useRegisterMutation();
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  // handleLoginWithGoogle

  const handleLoginWithGoogle = useGoogleLogin({
    // clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    // scope: ["profile", "email"],
    onSuccess: async (result) => {
      // console.log("Login Success with Google:", result.access_token);
      if (result) {
        const access_token = result.access_token;
        // console.log(access_token);
        try {
          const userData = await fetch(
            "https://www.googleapis.com/oauth2/v1/userinfo",
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                Accept: "application/json",
              },
            }
          ).then((data) => data.json());

          console.log("userData :", userData);
          if (userData) {
            try {
              const registerValue = {
                username: userData.family_name,
                family_name: userData.family_name,
                given_name: userData.given_name,
                email: userData.email,
                password: `${userData.email}${import.meta.env.VITE_SECRET_KEY}`,
                confirmed_password: `${userData.email}${
                  import.meta.env.VITE_SECRET_KEY
                }`,
                is_student: true,
                gender: "",
              };
              const response = await postUserRegisters(registerValue).unwrap();
              console.log("Register with goole response succesfully :", response);
              if(response){
                toast.success("Successfully registered with Google");
                setTimeout(() => {
                  navigate("/dashboard", { state: response.token });
                }, 800);
              }
            } catch (error) {
              console.log("error message :", error);
              toast.error("Failed to register with Google");
            }
          }
        } catch (err) {
          console.log("APi google error :", err);
        }
      }
      // handleLoginWithGoogleSuccess(result);
    },
    onError: (error) => {
      console.log("error :", error);
    },
    // onFailure: (error) => {
    //   console.error("Login Failed with Google:", error);
    //   toast.error("Failed to login with Google");
    // },
    isSignedIn: true, // We will auto-sign in the user after they approve the login request
  });

  const handlePostUserRegister = async (value) => {
    console.log("Submitting Data to API:", value); // Debugging
    try {
      const response = await postUserRegisters(value).unwrap();
      console.log("API Response:", response);
      console.log(response.token);
      let token = response?.token ? true : false;
      token
        ? (toast.success("Successfully registered"),
          setTimeout(() => {
            navigate("/dashboard", { state: token });
          }, 800))
        : "";
    } catch (err) {
      console.error("API Error:", err);
      err?.status == 409
        ? toast.error("Your information has already registered")
        : "";
    }
  };

  // const [register] = useRegisterMutation();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const initialValues = {
    username: "",
    family_name: "",
    given_name: "",
    email: "",
    password: "Qwer1234!",
    confirmed_password: "Qwer1234!",
    is_student: "",
    gender: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    family_name: Yup.string().required("firstname is required"),
    given_name: Yup.string().required("lastname is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(
        regex,
        "Password must constain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
      )
      .required("passwork is required"),
    confirmed_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("comfirm passwork is required"),
    is_student: Yup.string().required("Please select an option."),
    gender: Yup.string().required("Please select an option."),
  });
  const CustomInput = ({ label, type, ...props }) => {
    const [field, meta] = useField(props);
    // console.log("Field Debug:", field, "props:", props);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        <label
          htmlFor={props.id || props.name}
          className="block mb-2 font-medium text-txt14 text-primary"
        >
          {label}
        </label>
        <div className="relative">
          <input
            {...field}
            {...props}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            className={`bg-gray-50 border-2 text-gray-900 text-txt14 rounded-lg block w-full p-2 pr-10 transition-all
                  ${
                    meta.touched && meta.error
                      ? "border-accent focus:ring-accent focus:border-accent"
                      : "border-primary focus:ring-blue-500 focus:border-blue-500"
                  }
                `}
          />
          {/* Eye Icon for Password Toggle */}
          {type === "password" && (
            <span
              className="absolute inset-y-0 flex items-center cursor-pointer right-3 text-txt14 text-primary"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          )}
        </div>
        <ErrorMessage
          component="div"
          name={props.name}
          className="text-accent text-txt12  pb-[-1]"
        />
      </div>
    );
  };
  const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label
          htmlFor={props.id || props.name}
          className="block mb-2 text-sm font-medium text-primary"
        >
          {label}
        </label>
        <select
          {...field}
          value={field.value}
          {...props}
          className={`bg-gray-50 border-2 text-gray-900 text-sm rounded-lg block w-full p-2 transition-all
                ${
                  meta.touched && meta.error
                    ? "border-accent focus:ring-accent focus:border-accent"
                    : "border-primary focus:ring-blue-500 focus:border-blue-500"
                }
              `}
        >
          {props.children}
        </select>
        <ErrorMessage
          component="div"
          name={props.name}
          className="text-accent text-txt12 pb-[-1]"
        />
      </div>
    );
  };
  return (
    <>
      <ToastContainer />
      <section
        style={{
          backgroundImage: `url('./src/assets/bg_register.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="grid gap-0.5 md:grid-cols-2 px-8 md:px-16 lg:px-24 xl:px-36 py-8 md:py-12 lg:py-16 xl:py-20 border">
          {/* Form Section */}
          <section className="px-8 py-8 bg-white md:px-12 lg:px-14 xl:px-16 xl:py-10">
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} className="text-primary" />
            </Link>
            <h2 className="px-5 pb-5 font-medium text-center text-primary text-txt16 md:text-txt18 lg:text-txt20">
              Create an account to continue
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={
                (values) => {
                  console.log("Response :", values);
                  handlePostUserRegister(values);
                }
                //  {
                //   register(values).unwrap(); }
              }
            >
              <Form>
                {/* Username */}
                <div className="pb-4">
                  <CustomInput
                    name="username"
                    label="Username"
                    placeholder="Username"
                  />
                </div>

                {/* First Name & Last Name */}
                <div className="grid gap-4 pb-4 lg:grid-cols-2">
                  <CustomInput
                    name="family_name"
                    label="First Name"
                    placeholder="First Name"
                  />
                  <CustomInput
                    name="given_name"
                    label="Last Name"
                    placeholder="Last Name"
                  />
                </div>

                {/* Email */}
                <div className="pb-4">
                  <CustomInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                  />
                </div>

                {/* Password & Confirm Password */}
                <div className="grid gap-4 pb-4 lg:grid-cols-2">
                  <CustomInput
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                  />
                  <CustomInput
                    name="confirmed_password"
                    label="confirm Password"
                    type="password"
                    placeholder="comfirm Password"
                  />
                </div>

                {/* gender */}
                <div className="pb-4">
                  <CustomSelect name="gender" label="Gender" className="w-full">
                    <option value="">Choose your gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </CustomSelect>
                </div>

                {/* Student Radio Buttons */}
                <div className="flex items-center pb-4 gap-x-4">
                  <span className="mb-2 font-medium text-txt14 text-primary">
                    Are you a student?
                  </span>
                  <label className="flex items-center mb-2">
                    <Field
                      type="radio"
                      name="is_student"
                      value="yes"
                      className="w-4 h-4 bg-gray-100 text-subaccent border-primary focus:ring-blue-500"
                    />
                    <span className="ms-2 text-txt14 text-primary">Yes</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <Field
                      type="radio"
                      name="is_student"
                      value="no"
                      className="w-4 h-4 bg-gray-100 text-subaccent border-primary focus:ring-blue-500"
                    />
                    <span className="ms-2 text-txt14 text-primary">No</span>
                  </label>
                  <ErrorMessage
                    name="is_student"
                    component="div"
                    className="mt-1 text-accent text-txt12"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-4 py-3 pb-4 text-white transition-all rounded-md text-btn-txt bg-primary hover:bg-subaccent hover:shadow-lg active:bg-subaccent active:scale-95"
                >
                  Create a Trackify account
                </button>

                {/* Google Sign In */}
                <p className="mt-4 text-center text-gray-400">
                  Or continue with:
                </p>
                <button
                  onClick={handleLoginWithGoogle}
                  type="button"
                  className="text-primary border-primary py-2.5 px-5 flex items-center justify-center w-full border rounded-lg mt-2"
                >
                  <img
                    src="./src/assets/google.png"
                    className="w-4 h-4 mr-2"
                    alt="Google"
                  />
                  <span>Google</span>
                </button>

                {/* Login Link */}
                <p className="mt-4 text-center">
                  <Link to="/login" className="text-txt14 text-primary">
                    Already have a Trackify account? Log in
                  </Link>
                </p>
              </Form>
            </Formik>
          </section>

          {/* Right Section */}
          <section className="bg-[#CFEAFD] flex items-center">
            <div>
              <img
                src="./src/assets/register_img.png"
                className="w-full"
                alt="Register Illustration"
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
