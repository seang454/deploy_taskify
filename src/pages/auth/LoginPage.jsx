import { ArrowLeft } from "lucide-react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TaskifyLogoV2 from "../../assets/TaskifyLogoV2.png";
import BackgroundForLogin from "../../Components/BackgroundForLogin.jsx";
import UserNameInput from "../../Components/UserNameInput.jsx";
import { Link, Navigate, useNavigate } from "react-router";
import PasswordInput from "../../Components/Password_Input.jsx";
import { useLoginMutation } from "../../features/auth/authApiSlice.js";
import { useEffect, useState } from "react";
import { setAccessToken } from "../../lib/secureLocalStorage.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Username or email is required")
    .typeError("Invalid email address or Username"),
  password: Yup.string().required("Password is required"),
});
export default function LoginPage() {
  const [postLogin, { data, isLoading, isError, error }] = useLoginMutation();
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  console.log("submite :", submit);

  const handleSubmit = async (value) => {
    console.log("Submitting value:", value);

    try {
      const response = await postLogin(value).unwrap();
      console.log("Login successful, response:", response);
      setAccessToken(response.token);

      let token = response.token ? true : false;
      console.log("Token status:", token);
      setSubmit(token);

      setTimeout(() => {
        console.log("responToken :",response.token)
        if (token) {
          toast.success("Login successful!");
          setTimeout(() => {
            navigate("/dashboard", { state: { token: response.token } });
          }, 800);
        } else {
        }
      }, 100);
    } catch (err) {
      console.error(
        "Login failed:",
        err?.data?.message || err.message || "Unknown error"
      );
      toast.error(err?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="relative w-full min-h-screen overflow-hidden bg-background">
        <BackgroundForLogin />
        <div className="absolute flex items-center justify-center w-full mx-auto my-4 align-middle sm:my-10 md:my-20">
          <div className="flex flex-col items-center p-16 pt-8 space-y-4 bg-white rounded-lg shadow">
            <Link href="/" className="relative items-start w-full right-8">
              <ArrowLeft />
            </Link>

            <img
              src={TaskifyLogoV2  || "/placeholder.svg"}
              alt="Taskify Logo"
              width={150}
              height={100}
            />

            <p className="font-medium text-txt16 md:text-txt18 lg:text-[24px] text-primary">
            Log in to your account
            </p>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log("values", values);
                handleSubmit(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full space-y-4">
                  <UserNameInput />
                  <PasswordInput />

                  <button
                    type="submit"
                    className={
                      submit
                        ? `cursor-not-allowed opacity-70 w-full h-10 text-white rounded-lg bg-primary hover:bg-subaccent text-txt12 md:text-txt14 lg:text-txt16`
                        : `w-full h-10 text-white rounded-lg bg-primary hover:bg-subaccent text-txt12 md:text-txt14 lg:text-txt16`
                    }
                    // disabled={submit}
                  >
                    {isLoading ? "Logging in..." : "Log In"}
                  </button>
                </Form>
              )}
            </Formik>

            <p className="text-gray-600 text-txt14">Or continue with: </p>

            <button
              type="button"
              className="flex items-center justify-center w-full h-10 font-bold text-gray-500 border-2 rounded-md border-primary"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Google
            </button>

            <div className="text-sm text-center">
              <Link href="/" className="text-primary hover:underline">
                Cannot Log in? Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
