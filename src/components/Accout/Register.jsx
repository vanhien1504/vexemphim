import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  // Định nghĩa schema kiểm tra hợp lệ bằng Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Vui lòng nhập tên người dùng'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
    phone: Yup.string().required('Vui lòng nhập số điện thoại'),
    email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  });

  // Xử lý submit form
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Thực hiện các bước xác thực hoặc gửi dữ liệu đăng ký lên server

    // Sau khi hoàn thành xử lý, setSubmitting(false) để cho phép submit lại
    setSubmitting(false);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-80 bg-cover bg-center" style={{ backgroundImage: `url("/images/login_background.jpg")` }}></div>
      <div className="flex flex-col items-center justify-center h-screen relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-white">Đăng ký</h2>
        <Formik
          initialValues={{ username: '', password: '', phone: '', email: '' }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-gray-300 bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                  Tên người dùng:
                </label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Mật khẩu:
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  Số điện thoại:
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="you@example.com"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Đang xử lý...' : 'Đăng ký'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;