import React, { useState, useEffect } from "react";
import { Field, ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup/lib/locale";
import { registerActionAPI } from "../../Redux/Action/UserAction/RegisterAction";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";
import { userManaAction } from "../../Redux/Action/UserManaAction/UserManaAction";

export default function Registration() {
  let ivalid = false;
  const validationValues = (values) => {
    if (values.taiKhoan === "") {
      ivalid = false;
    } else if (values.email === "") {
      ivalid = false;
    } else if (values.soDT === "") {
      ivalid = false;
    } else if (values.matKhau === "") {
      ivalid = false;
    } else if (values.hoTen === "") {
      ivalid = false;
    } else if (values.maNhom === "") {
      ivalid = false;
    } else if (values.maLoaiNguoiDung === "") {
      ivalid = false;
    } else {
      ivalid = true;
    }
    return ivalid;
  };

  const dispatch = useDispatch();
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  const { userLogin } = useSelector((state) => state.UserLoginReducer);
  const { userChange } = useSelector((state) => state.UserLoginReducer);
  const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string().required("Tài khoản không được bỏ trống"),
    email: Yup.string()
      .required("Email không được bỏ trống")
      .email("Email sai định dạng"),
    soDT: Yup.string()
      .required("Số điện thoại không được bỏ trống")
      .matches(/^[0-9]+$/, "Số điện thoại không đúng")
      .min(10, "Số điện thoại ít nhất là 10")
      .max(11, "Và nhiều nhất là 11"),
    matKhau: Yup.string()
      .required("Mật khẩu không được bỏ trống")
      .min(8, "Mật khẩu tối thiểu 8 ký tự")
      .max(32, "Mật khẩu tối đa 32 ký tự")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
        "Mật khẩu phải bao gồm ít nhất 1 ký tự viết hoa, 1 ký tự số, 1 ký tự đặc biệt và chữ"
      ), //.test(/cybersof/,'Mật khẩu không đúng định dạng')
    hoTen: Yup.string()
      .required("Họ Tên Không Được Bỏ Trống")
      .matches(
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
        "Họ tên phải là chữ"
      ),
    maNhom: Yup.string().required("Vui Lòng Chọn Mã Nhóm"),
    maLoaiNguoiDung: Yup.string().required("Vui Lòng Chọn Loại Người Dùng"),
  });

  return (
    <div className="mt-3">
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          hoTen: "",
          soDT: "",
          maNhom: "",
          email: "",
          maLoaiNguoiDung: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {}}
      >
        {({ errors, touched, values }) => (
          <Form className="container">
            <div className="row flex-column align-items-center justify-content-center">
              {userLogin.taiKhoan !== undefined ? (
                <h3>Thêm Thành Viên</h3>
              ) : (
                <h3>Đăng Ký</h3>
              )}

              <div id="textTitleInput" className="col-6">
                <div className="form-group">
                  <span>Tài Khoản</span>
                  <Field className="form-control" name="taiKhoan" />
                  {errors.taiKhoan && touched.taiKhoan ? (
                    <div className="alert alert-danger">{errors.taiKhoan}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <span>Họ Và Tên</span>
                  <Field className="form-control" name="hoTen" />
                  {errors.hoTen && touched.hoTen ? (
                    <div className="alert alert-danger">{errors.hoTen}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <span>Số Điện Thoại</span>

                  <Field className="form-control" name="soDT" />
                  {errors.soDT && touched.soDT ? (
                    <div className="alert alert-danger">{errors.soDT}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <span>Mã Nhóm</span>
                  <Field className="form-control" as="select" name="maNhom">
                    <option value="">Chọn Mã Nhóm</option>
                    <option>GP01</option>
                    <option>GP02</option>
                    <option>GP03</option>
                    <option>GP04</option>
                    <option>GP05</option>
                    <option>GP06</option>
                    <option>GP07</option>
                    <option>GP08</option>
                    <option>GP09</option>
                    <option>GP10</option>
                    <option>GP11</option>
                    <option>GP12</option>
                    <option>GP13</option>
                    <option>GP14</option>
                    <option>GP15</option>
                  </Field>
                  {errors.maNhom && touched.maNhom ? (
                    <div className="alert alert-danger">{errors.maNhom}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <span>Mã Loại Người Dùng</span>
                  <Field
                    className="form-control"
                    as="select"
                    name="maLoaiNguoiDung"
                  >
                    <option value="">Mã Loại Người Dùng</option>
                    {userLogin.taiKhoan !== undefined ? (
                      <option>GV</option>
                    ) : null}
                    <option>HV</option>
                  </Field>

                  {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung ? (
                    <div className="alert alert-danger">
                      {errors.maLoaiNguoiDung}
                    </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <span>Email</span>
                  <Field className="form-control" name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div className="alert alert-danger">{errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <span>Mật Khẩu</span>
                  <Field
                    className="form-control"
                    type="password"
                    name="matKhau"
                  />
                  {errors.matKhau && touched.matKhau ? (
                    <div className="alert alert-danger">{errors.matKhau}</div>
                  ) : null}
                </div>
                <div className="text-center">
                  {userLogin.taiKhoan !== undefined ? (
                    <button
                      onClick={() => {
                        validationValues(values);
                        if (ivalid === true) {
                          dispatch(userManaAction(values, tokenLocal));
                        }
                      }}
                      className="btn buttonAddtionMem"
                      type="submit"
                    >
                      Thêm Thành Viên
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        validationValues(values);
                        if (ivalid === true) {
                          dispatch(registerActionAPI(values));
                        }
                      }}
                      className="btn buttonAddtionMem"
                      type="submit"
                    >
                      Đăng Ký
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
