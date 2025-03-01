import { ArrowLeft } from "lucide-react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import TaskifyLogoV2 from "../assets/TaskifyLogoV2.png"
import BackgroundForLogin from "../Components/BackgroundForLogin.jsx"
import UserNameInput from "../Components/UserNameInput.jsx"
import {Link} from "react-router";
import PasswordInput from "../Components/Password_Input.jsx";

const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Username or email is required").typeError("Invalid email address or Username"),
    password: Yup.string().required("Password is required"),
})

export default function LoginPage() {
    const handleSubmit = (values, { setSubmitting }) => {

        new Promise((resolve) => setTimeout(resolve, 1000))
            .then(() => {
                console.log("Form values:", values)
            })
            .catch((error) => {
                console.error("Login error:", error)
            })
            .finally(() => {
                setSubmitting(false)
            })
    }

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-background">
            <BackgroundForLogin />
            <div className="absolute flex items-center justify-center w-full mx-auto my-4 align-middle sm:my-10 md:my-20">
                <div className="flex flex-col items-center p-16 pt-8 space-y-4 bg-white rounded-lg shadow">
                    <Link href="/" className="relative items-start w-full right-8">
                        <ArrowLeft />
                    </Link>

                    <img src={TaskifyLogoV2 || "/placeholder.svg"} alt="Taskify Logo" width={75} height={75} />

                    <p className="text-txt14 md:text-txt16 lg:text-txt20 text-primary">
                        <b>Log in to your account</b>
                    </p>

                    <Formik
                        initialValues={{
                            name: "",
                            password: "",
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="w-full space-y-4">
                                <UserNameInput />
                                <PasswordInput />

                                <button
                                    type="submit"
                                    className="w-full h-10 text-white rounded-lg bg-primary hover:bg-subaccent text-txt12 md:text-txt14 lg:text-txt16"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Logging in..." : "Log In"}
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-gray-600 text-txt14">Or continue with: </p>

                    <button
                        type="button"
                        className="flex items-center justify-center w-full h-10 font-bold text-gray-500 border-2 rounded-md border-primary"
                    >
                        <img src="https://www.google.com/favicon.ico" alt="Google" width={20} height={20} className="mr-2" />
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
    )
}

