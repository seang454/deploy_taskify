
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { X } from 'lucide-react';

const AddMemberForm = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const handleAddMember = async (values, { resetForm }) => {
    console.log('Adding member with email:', values.email);

    try {
      const response = await fetch('http://34.101.205.26:3000/add-member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to add member');
      }

      console.log('Member added successfully');
      resetForm();
      closeModal(); // Close the modal after success
    } catch (error) {
      console.error('Error adding member:', error.message);
    }
  };

 return (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 md:justify-end z-9"
    onClick={closeModal}
  >
    <div
      className="
        max-w-[550px] w-full bg-white dark:bg-gray-500 rounded-lg shadow-lg p-[25px] relative 
        -top-[650px] md:right-[32px] md:-top-[455px] md:translate-y-0 
        lg:right-[35px] lg:-top-[330px] lg:-translate-y-1/2
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
      >
        <X size={20} />
      </button>

      <h2 className="text-[20px] font-bold text-primary mb-4 dark:text-white">
        Add Member by Email
      </h2>

      {/* Form */}
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        })}
        onSubmit={handleAddMember}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Email Input */}
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Enter member's email"
                className="border rounded-[8px] p-2 w-full h-[40px] dark:bg-gray-400 focus:outline-none dark:text-white focus:ring-2 focus:ring-blue-500 dark:placeholder:text-white"
              />
              {/* Reserve space for error message */}
              <div className="min-h-[20px]">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-[130px] h-[40px] rounded-[8px] text-white ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-blue-600'
                }`}
              >
                {isSubmitting ? 'Adding...' : 'Add Member'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);
};

export default AddMemberForm;
