import { ArrowLeft } from "lucide-react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import TaskifyLogoV2 from "../assets/TaskifyLogoV2.png"
import BackgroundForLogin from "../Components/BackgroundForLogin.jsx"
import UserNameInput from "../Components/UserNameInput.jsx"
import {Link} from "react-router";
import PasswordInput from "../Components/Password_Input.jsx";

const LoginSchema = Yup.object().shape({
    name: Yup.string().nullable("Invalid email address or Username").required("Email or Username is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
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
        <div className="min-h-screen w-full relative overflow-hidden bg-background">
            <BackgroundForLogin />
            <div className="absolute flex items-center justify-center align-middle w-full mx-auto my-4 sm:my-10 md:my-20">
                <div className="flex flex-col items-center rounded-lg space-y-4 bg-white p-16 pt-8 shadow">
                    <Link href="/" className="items-start w-full relative right-8">
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
                                    className="w-full bg-primary hover:bg-subaccent text-white rounded-lg text-txt12 md:text-txt14 lg:text-txt16 h-10"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Logging in..." : "Log In"}
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-txt14 text-gray-600">Or continue with: </p>

                    <button
                        type="button"
                        className="w-full flex items-center justify-center border-primary border-2 rounded-md h-10 text-gray-500 font-bold"
                    >
                        <img src="https://www.google.com/favicon.ico" alt="Google" width={20} height={20} className="mr-2" />
                        Google
                    </button>

                    <div className="text-center text-sm">
                        <Link href="/" className="text-primary hover:underline">
                            Cannot Log in? Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

