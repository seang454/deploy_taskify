import { Field } from "formik"
import React from "react";

export default function UserNameInput() {
    return (
        <div>
            <Field name="name">
                {({ field, meta: { touched, error } }) => (
                    <div className="space-y-1">
                        <div className="mb-4 w-60 md:w-80 h-10  rounded-md  align-middle flex items-center">
                            <input
                                {...field}
                                type="name"
                                placeholder="Username or email"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-txt12 md:text-txt14 lg:text-txt16 ${
                                    touched && error ? "border-accent" : "border-gray-300"
                                }`}
                            />
                        </div>
                        {touched && error && <p className="text-sm text-accent">{error}</p>}
                    </div>
                )}
            </Field>
        </div>
    )
}


