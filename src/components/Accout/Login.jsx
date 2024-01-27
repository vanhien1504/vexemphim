import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  // Định nghĩa schema kiểm tra hợp lệ bằng Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
  });

  // Xử lý submit form
  const onSubmit = (values) => {
    console.log(values);
    // Thực hiện các bước xác thực hoặc gửi dữ liệu đăng nhập lên server
  };

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-full z-0 opacity-80"
        style={{
          backgroundImage: `url("/images/login_background.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="flex flex-col items-center justify-center h-screen relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-white">Đăng nhập</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form
              className="bg-gray-300 bg-opacity-80 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
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
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={formik.isSubmitting}
              >
                Đăng nhập
              </button>
              <div className="text-gray-700 mt-4">
                Nếu chưa có tài khoản? <a href="/dang-ki" style={{color:'blue'}}>Đăng kí ngay!</a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;