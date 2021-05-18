import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik, Field, ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Select } from "antd";
import { searchUserAction } from "../../Redux/Action/SearchUserAction/SearchUserAction";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";
import axios from "axios";

export default function SearchUser() {
  let ivalid = false;
  const dispatch = useDispatch();
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  const { arrUser } = useSelector((state) => state.SearchReducer);
  const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string().required("Mời Điền Tài Khoản Muốn Tìm Kiếm"),
    maNhom: Yup.string().required("Mời Chọn Mã Nhóm"),
  });
  const renderArrUser = () => {
    return arrUser?.map((item, index) => {
      return (
        <div key={index}>
          <h3 className="textTitleInput">{item.hoTen}</h3>
          <table class="table table-responsive-sm table-responsive-md table-responsive-lg">
            <thead>
              <tr>
                <th className="textTitleInput">Tài Khoản</th>
                <th>{item.taiKhoan}</th>
              </tr>
              <tr>
                <th className="textTitleInput">Họ Và Tên</th>
                <th>{item.hoTen}</th>
              </tr>
              <tr>
                <th className="textTitleInput">Email</th>
                <th>{item.email}</th>
              </tr>
              <tr>
                <th className="textTitleInput">Mã Loại Người Dùng</th>
                <th>{item.maLoaiNguoiDung}</th>
              </tr>
            </thead>
          </table>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="row flex-column align-items-center justify-content-center">
        <div className="col-6">
          <Formik
            initialValues={{
              taiKhoan: "",
              maNhom: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              dispatch(
                searchUserAction(values.maNhom, values.taiKhoan, tokenLocal)
              );
            }}
          >
            {({ errors, touched, values }) => (
              <Form id="textTitleInput">
                <h3 className="text-center reponsiveH3">Tìm Kiếm Người Dùng</h3>
                <span>Tài Khoản</span>
                <Field className="form-control mb-2 mt-2" name="taiKhoan" />

                {errors.taiKhoan && touched.taiKhoan ? (
                  <div className="alert alert-danger text-left">
                    {errors.taiKhoan}
                  </div>
                ) : null}
                <div className="form-group mt-2">
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
                    <div className="alert alert-danger text-left">
                      {errors.maNhom}
                    </div>
                  ) : null}
                </div>

                <div className="text-center ">
                  <button className="btn buttonSreachUser mt-1" type="submit">
                    Tìm Người Dùng
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="mt-3">{renderArrUser()}</div>
    </div>
  );
}
