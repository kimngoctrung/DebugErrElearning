import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";
import { useDispatch, useSelector } from "react-redux";
import { Field, ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import Rating from "@material-ui/lab/Rating";
import { getIDListCoures } from "../../Redux/Action/IDListCoures/IDListCoures";
import { DatePicker, Space } from "antd";
import { CHANGECOURESCONSTANT } from "../../Redux/Constant/ChangeCouresConstant";
import { changeCouresAction } from "../../Redux/Action/ChangeCouresAction/ChangeCouresAction";
import { Redirect } from "react-router";

export default function EditCoures(props) {
  let souresChange = JSON.parse(localStorage.getItem(CHANGECOURESCONSTANT));
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
    maKhoaHoc: souresChange?.maKhoaHoc,
    tenKhoaHoc: souresChange?.tenKhoaHoc,
    moTa: souresChange?.moTa,
    luotXem: souresChange?.luotXem,
    danhGia: 0,
    hinhAnh: souresChange?.hinhAnh,
    maNhom: souresChange?.maNhom,
    ngayTao: souresChange?.ngayTao,
    maDanhMucKhoaHoc: souresChange?.danhMucKhoaHoc?.maDanhMucKhoahoc,
    taiKhoanNguoiTao: userLogin?.taiKhoan,
    biDanh: souresChange?.biDanh,
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
  if (userLogin.maLoaiNguoiDung === "GV") {
    console.log(tokenLocal);
    return (
      <div>
        <Formik
          initialValues={userAddition}
          validationSchema={userAddtionSchema}
          onSubmit={(values) => {
            dispatch(changeCouresAction(values, tokenLocal, uploadPic.hinhAnh));
          }}
        >
          {({ errors, touched, values }) => (
            <Form className="container mt-3">
              <h3 className="text-center">Sửa Khóa Học</h3>
              <div id="textTitleInput" className="row ">
                <div className="col-6">
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
                      <div className="alert alert-danger text-left">
                        {errors.maNhom}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group ">
                    <span>Tài Khoản</span>
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
                    <span>Mã Khóa Học</span>
                    <Field
                      disabled={true}
                      className="form-control"
                      name="maKhoaHoc"
                    />
                    {errors.maKhoaHoc && touched.maKhoaHoc ? (
                      <div className="alert alert-danger text-left">
                        {errors.maKhoaHoc}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <span>Tên Khóa Học</span>
                    <Field className="form-control" name="tenKhoaHoc" />
                    {errors.tenKhoaHoc && touched.tenKhoaHoc ? (
                      <div className="alert alert-danger text-left">
                        {errors.tenKhoaHoc}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <span>Khóa Học</span>
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
                  <div className="form-group ">
                    <p>Ngày Tạo Trước Đó</p>
                    <p>{souresChange.ngayTao}</p>
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
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <span>Lượt Xem</span>
                    <Field
                      className="form-control"
                      type="text"
                      name="luotXem"
                    />
                  </div>
                  <div className="form-group">
                    <span>Bí Danh</span>
                    <Field className="form-control" type="text" name="biDanh" />
                    {errors.biDanh && touched.biDanh ? (
                      <div className="alert alert-danger text-left">
                        {errors.biDanh}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <p>Hình Ảnh Đã Chọn</p>
                    <img style={{ width: "200px" }} src={values.hinhAnh} />
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
                      <span>Mô Tả</span>
                      <Field
                        as="textarea"
                        name="moTa"
                        class="form-control"
                        rows="5"
                      ></Field>
                      {errors.moTa && touched.moTa ? (
                        <div className="alert alert-danger text-left">
                          {errors.moTa}
                        </div>
                      ) : null}
                    </div>
                    <div className="text-right">
                      <button type="submit" className="btn buttonTooLong">
                        Sửa Khóa Học
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
  } else {
    alert("Bạn Phải Đăng Nhập Và Là Giáo Viên Mới Có Thể Truy Cập Trang Này");
    return <Redirect to="/login" />;
  }
}
