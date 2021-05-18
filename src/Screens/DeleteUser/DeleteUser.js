import React, { useState } from "react";
import { useDispatch, useEffect, useSelector } from "react-redux";
import { deleteManaAction } from "../../Redux/Action/UserManaAction/UserManaAction";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";
import { useFormik, Field, ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { values } from "lodash";
import { Redirect } from "react-router";

export default function DeleteUser(props) {
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string().required("Mời Điền Tài Khoản Muốn Xóa"),
  });
  const { userLogin } = useSelector((state) => state.UserLoginReducer);

  let ivalid = false;
  const dispatch = useDispatch();
  if (userLogin.maLoaiNguoiDung === "GV") {
    return (
      <div className="container">
        <div className="row flex-column align-items-center justify-content-center mt-5">
          <h3>Xóa Người Dùng</h3>
          <div className="col-6">
            <div className="form-group">
              <Formik
                initialValues={{
                  taiKhoan: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched, values }) => (
                  <Form>
                    <Field className="form-control" name="taiKhoan" />
                    {errors.taiKhoan && touched.taiKhoan ? (
                      <div className="alert alert-danger text-left">
                        {errors.taiKhoan}
                      </div>
                    ) : null}
                    <div className="text-center mt-3">
                      <button
                        className="btn buttonDeleteUser"
                        onClick={() => {
                          if (values.taiKhoan === "") {
                            alert("Mời Nhập Thông Tin");
                          } else {
                            ivalid = true;
                            if (ivalid === true) {
                              dispatch(
                                deleteManaAction(values.taiKhoan, tokenLocal)
                              );
                            }
                          }
                        }}
                        type="submit"
                      >
                        <span>Xóa Người Dùng</span>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    alert("Bạn Phải Đăng Nhập Và Là Giáo Viên Mới Có Thể Truy Cập Trang Này");
    return <Redirect to="/login" />;
  }
}
