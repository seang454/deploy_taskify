import React, { useState } from 'react'
import { Formik, Form,Field,ErrorMessage,useField } from 'formik'
import * as Yup from 'yup'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useRegisterMutation } from '../../features/auth/authSlice';


export default function Register() {
    // const [register] = useRegisterMutation();
    const regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const initialValues ={
        username:"",
        family_name:"",
        given_name:"",
        email:"",
        password:"Qwer1234!",
        confirmed_password:"Qwer1234!",
        is_student: "",
        gender: "",
    }
    const validationSchema = Yup.object({
        username: Yup.string().required("username is required"),
        family_name: Yup.string().required('firstname is required'),
        given_name: Yup.string().required('lastname is required'),
        email: Yup.string().email('email is invalid').required('email is required'),
        password: Yup.string().matches(regex,'Password must constain at least 8 characters, one uppercase, one lowercase, one number and one special case character').required("passwork is required"),
        confirmed_password: Yup.string().oneOf([Yup.ref("password"),null],"Password must match").required('comfirm passwork is required'),
        is_student: Yup.string().required("Please select an option."),
        gender: Yup.string().required("Please select an option."),
      });
      const CustomInput = ({ label, type, ...props }) => {
        const [field, meta] = useField(props);
        const [showPassword, setShowPassword] = useState(false);
      
        const togglePasswordVisibility = () => {
          setShowPassword((prev) => !prev);
        };
      
        return (
          <div className="relative">
            <label htmlFor={props.id || props.name} className="block mb-2 text-txt14 font-medium text-primary">
              {label}
            </label>
            <div className="relative">
              <input
                {...field}
                {...props}
                type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                className={`bg-gray-50 border-2 text-gray-900 text-txt14 rounded-lg block w-full p-2 pr-10 transition-all
                  ${meta.touched && meta.error ? 'border-accent focus:ring-accent focus:border-accent' : 'border-primary focus:ring-blue-500 focus:border-blue-500'}
                `}
              />
              {/* Eye Icon for Password Toggle */}
              {type === 'password' && (
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-txt14 text-primary"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              )}
            </div>
            <ErrorMessage component="div" name={props.name} className="text-accent text-txt12  pb-[-1]" />
          </div>
        );
      };
      const CustomSelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
          <div>
            <label htmlFor={props.id || props.name} className="block mb-2 text-sm font-medium text-primary">
              {label}
            </label>
            <select
              {...field}
              {...props}
              className={`bg-gray-50 border-2 text-gray-900 text-sm rounded-lg block w-full p-2 transition-all
                ${meta.touched && meta.error ? 'border-accent focus:ring-accent focus:border-accent' : 'border-primary focus:ring-blue-500 focus:border-blue-500'}
              `}
            >
              {props.children}
            </select>
            <ErrorMessage component="div" name={props.name} className="text-accent text-txt12 pb-[-1]" />
          </div>
        );
      };
  return (
    <>
     <section
     style={{
      backgroundImage: `url('./src/assets/bg_register.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}
     >
      <section className="grid gap-0.5 md:grid-cols-2 px-8 md:px-16 lg:px-24 xl:px-36 py-8 md:py-12 lg:py-16 xl:py-20 border">
      {/* Form Section */}
      <section className="px-8 md:px-12 lg:px-14 xl:px-16 py-8 xl:py-10 bg-white">
        <Link to='/'><FontAwesomeIcon icon={faArrowLeft} className="text-primary" /></Link>
        <h2 className="text-center text-primary text-txt16 md:text-txt18  lg:text-txt20 font-medium px-5 pb-5">Create an account to continue</h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} 
        onSubmit={(values) =>  console.log(values)
        //  {
        //   register(values).unwrap(); }
         }>
          <Form>
            {/* Username */}
            <div className="pb-4">
              <CustomInput name="username" label="Username" placeholder="Username" />
            </div>

            {/* First Name & Last Name */}
            <div className="grid lg:grid-cols-2 pb-4 gap-4">
              <CustomInput name="family_name" label="First Name" placeholder="First Name" />
              <CustomInput name="given_name" label="Last Name" placeholder="Last Name" />
            </div>

            {/* Email */}
            <div className="pb-4">
              <CustomInput name="email" label="Email" type="email" placeholder="Email" />
            </div>

            {/* Password & Confirm Password */}
            <div className="grid lg:grid-cols-2 pb-4 gap-4">
              <CustomInput name="password" label="Password" type="password" placeholder="Password" />
              <CustomInput name="comfirmed_password" label="comfirm Password" type="password" placeholder="comfirm Password" />
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
            <div className="pb-4 flex items-center gap-x-4">
              <span className="text-txt14 font-medium text-primary mb-2">Are you a student?</span>
              <label className="flex items-center mb-2">
                <Field type="radio" name="is_student" value="yes" className="w-4 h-4 text-subaccent bg-gray-100 border-primary focus:ring-blue-500" />
                <span className="ms-2 text-txt14 text-primary">Yes</span>
              </label>
              <label className="flex items-center mb-2">
                <Field type="radio" name="is_student" value="no" className="w-4 h-4 text-subaccent bg-gray-100 border-primary focus:ring-blue-500" />
                <span className="ms-2 text-txt14 text-primary">No</span>
              </label>
              <ErrorMessage name="student" component="div" className="text-accent text-txt12 mt-1" />
            </div>
        


            {/* Submit Button */}
            <button 
                  type="submit" 
                  className="pb-4  w-full px-4 py-3 text-btn-txt bg-primary text-white rounded-md transition-all 
                            hover:bg-subaccent hover:shadow-lg 
                            active:bg-subaccent active:scale-95"
                >
                  Create a Trackify account
                </button>

            {/* Google Sign In */}
            <p className="text-gray-400 text-center mt-4">Or continue with:</p>
            <button type="button" className="text-primary border-primary py-2.5 px-5 flex items-center justify-center w-full border rounded-lg mt-2">
              <img src='./src/assets/google.png' className="w-4 h-4 mr-2" alt="Google" />
              <span>Google</span>
            </button>

            {/* Login Link */}
            <p className="text-center mt-4">
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
          <img src="./src/assets/register_img.png" className="w-full" alt="Register Illustration" />
        </div>
      </section>
    </section>
     </section>
    </>
  )
}
