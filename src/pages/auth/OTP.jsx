"use client";

import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Label, TextInput } from "flowbite-react";

export const OTP = function Component() {
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef([]);

  // Formik setup
  const formik = useFormik({
    initialValues: { otp: ["", "", "", "", "", ""] },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(Yup.string().matches(/^\d$/, "Must be a number"))
        .min(6, "OTP must be 6 digits")
        .required("OTP is required"),
    }),
    onSubmit: (values) => {
      const otpCode = values.otp.join(""); // Convert array to string
      console.log("Entered OTP:", otpCode);
      alert(`OTP Submitted: ${otpCode}`);
    },
  });

  // Handle OTP input change
  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const otpArray = [...formik.values.otp];
      otpArray[index] = value;
      formik.setFieldValue("otp", otpArray);

      // Move to next field if a number is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle Backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !formik.values.otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle Resend OTP Timer
  const handleResend = () => {
    setResendTimer(30);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev === 1) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-2xl w-96">
        <h2 className="mb-4 text-xl font-bold text-center">Enter OTP</h2>
        <p className="mb-6 text-center text-gray-600">We've sent a 6-digit OTP to your email.</p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* OTP Input Fields */}
          <div className="flex justify-center gap-2">
            {formik.values.otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-xl text-center"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                required
              />
            ))}
          </div>

          {/* Error Message */}
          {formik.touched.otp && formik.errors.otp && (
            <p className="text-sm text-center text-red-500">{formik.errors.otp}</p>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full">Verify OTP</Button>
        </form>

        {/* Resend OTP Button */}
        <div className="mt-4 text-center">
          {resendTimer > 0 ? (
            <p className="text-gray-500">Resend OTP in {resendTimer}s</p>
          ) : (
            <button onClick={handleResend} className="text-blue-600 hover:underline">
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
