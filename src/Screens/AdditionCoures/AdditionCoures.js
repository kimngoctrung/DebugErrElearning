import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";
import { useDispatch, useSelector } from "react-redux";
import { Field, ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import Rating from "@material-ui/lab/Rating";
import { getIDListCoures } from "../../Redux/Action/IDListCoures/IDListCoures";
import TextField from "@material-ui/core/TextField";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { additionCouresAction } from "../../Redux/Action/AdditionCouresAction/AdditionCouresAction";
import { history } from "../../App";
import { NavLink } from "react-router-dom";
export default function AdditionCoures(props) {
  const { userLogin } = useSelector((state) => state.UserLoginReducer);
  const [uploadPic, setUploadPic] = useState({ hinhAnh: "" });
  const userAddtionSchema = Yup.object().shape({
    maKhoaHoc: Yup.string().required("Vui Lòng Điền Mã Khóa Học"),
    tenKhoaHoc: Yup.string().required("Vui Lòng Điền Tên Khóa Học"),
    moTa: Yup.string().required("Vui Lòng Điền Mô Tả"),
    hinhAnh: Yup.string().required("Vui Lòng Cập Nhập Hình Ảnh"),
    maNhom: Yup.string().required("Vui Lòng Điền Mã Nhóm"),
    ngayTao: Yup.string().required("Vui Lòng Chọn Ngày Tạo"),
    maDanhMucKhoaHoc: Yup.string().required(
      "Vui Lòng Điền Mã Danh Mục Khóa Học"
    ),
    taiKhoanNguoiTao: Yup.string().required("Vui Lòng Điền Tài Khoản"),
    biDanh: Yup.string().required("Vui Lòng Điền Bí Danh"),
  });
  let userAddition = {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: "",
    danhGia: "",
    hinhAnh: "",
    maNhom: "",
    ngayTao: "",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: userLogin.taiKhoan,
    biDanh: "",
  };
  const { arrListID } = useSelector((state) => state.GetIDCoures);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIDListCoures());
  }, []);
  const renderArrListID = () => {
    return arrListID.map((item, index) => {
      return <option key={index}>{item.maDanhMuc}</option>;
    });
  };
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  const dateFormat = "DD/MM/YYYY";

  return (
    <div>
      <Formik
        initialValues={userAddition}
        validationSchema={userAddtionSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(additionCouresAction(values, tokenLocal, uploadPic.hinhAnh));
          resetForm({ values: "" });
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="container">
            <h3 className="text-center mt-1 mb-4">Thêm Khóa Học</h3>
            <div id="textTitleInput" className="row ">
              <div className="col-6">
                <div className="form-group">
                  <p>Mã Nhóm</p>
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
                <div className="form-group ">
                  <p className="display-5">Tài Khoản</p>
                  <Field
                    disabled={true}
                    className="form-control"
                    name="taiKhoanNguoiTao"
                  />
                  {errors.taiKhoanNguoiTao && touched.taiKhoanNguoiTao ? (
                    <div className="alert alert-danger text-left">
                      {errors.taiKhoanNguoiTao}
                    </div>
                  ) : null}
                </div>
                <div className="form-group ">
                  <p className="display-5">Mã Khóa Học</p>
                  <Field className="form-control" name="maKhoaHoc" />
                  {errors.maKhoaHoc && touched.maKhoaHoc ? (
                    <div className="alert alert-danger text-left">
                      {errors.maKhoaHoc}
                    </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <p className="display-5">Tên Khóa Học</p>
                  <Field className="form-control" name="tenKhoaHoc" />
                  {errors.tenKhoaHoc && touched.tenKhoaHoc ? (
                    <div className="alert alert-danger text-left">
                      {errors.tenKhoaHoc}
                    </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <p>Khóa Học</p>
                  <Field
                    className="form-control"
                    as="select"
                    name="maDanhMucKhoaHoc"
                  >
                    <option value="">Chọn Khóa Học</option>
                    {renderArrListID()}
                  </Field>
                  {errors.maDanhMucKhoaHoc && touched.maDanhMucKhoaHoc ? (
                    <div className="alert alert-danger text-left">
                      {errors.maDanhMucKhoaHoc}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group ">
                  <p className="display-5">Ngày Tạo</p>
                  <DatePicker
                    onChange={(date, dateString) => {
                      values.ngayTao = dateString;
                    }}
                    format={dateFormat}
                  />
                  {errors.ngayTao && touched.ngayTao ? (
                    <div className="alert alert-danger text-left">
                      {errors.ngayTao}
                    </div>
                  ) : null}
                </div>

                <div className="form-group">
                  <p>Lượt Xem</p>
                  <Field className="form-control" type="text" name="luotXem" />
                </div>
                <div className="form-group">
                  <p>Bí Danh</p>
                  <Field className="form-control" type="text" name="biDanh" />
                  {errors.biDanh && touched.biDanh ? (
                    <div className="alert alert-danger text-left">
                      {errors.biDanh}
                    </div>
                  ) : null}
                </div>

                <div className="form-group">
                  <p>Hình Ảnh</p>
                  <input
                    onChange={(e) => {
                      values.hinhAnh = e.target.files[0].name;
                      setUploadPic({ hinhAnh: e.target.files[0] });
                    }}
                    className="form-control"
                    type="file"
                    name="hinhAnh"
                  />
                  {errors.hinhAnh && touched.hinhAnh ? (
                    <div className="alert alert-danger text-left">
                      {errors.hinhAnh}
                    </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <span className="mr-5">Đánh Giá</span>
                  <Rating
                    onChange={(e) => {
                      values.danhGia = e.target.value;
                    }}
                    name="danhGia"
                  />
                  <div class="form-group">
                    <textarea
                      onChange={(e) => {
                        values.moTa = e.target.value;
                      }}
                      name="moTa"
                      class="form-control"
                      rows="5"
                    ></textarea>
                    {errors.moTa && touched.moTa ? (
                      <div className="alert alert-danger text-left">
                        {errors.moTa}
                      </div>
                    ) : null}
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn additionCourse">
                      Thêm Khóa Học
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
