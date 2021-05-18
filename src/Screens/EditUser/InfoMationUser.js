import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCouresAPI } from "../../Redux/Action/CouresItemAction/CouresItemAction";
import { infoUserAPI } from "../../Redux/Action/InfoUser/InfoUserAPI";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";
import { List, Typography, Divider } from "antd";

export default function InfoMationUser() {
  const dispatch = useDispatch();
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  const { userLogin } = useSelector((state) => state.UserLoginReducer);
  const { userInfo } = useSelector((state) => state.infomationUserAWM);

  useEffect(() => {
    dispatch(infoUserAPI(userLogin.taiKhoan, userLogin.matKhau, tokenLocal));
  }, []);
  const renderDetailOfCoures = () => {
    return userInfo.chiTietKhoaHocGhiDanh?.map((item, index) => {
      return (
        <ul key={index}>
          <li>{item.tenKhoaHoc}</li>
        </ul>
      );
    });
  };

  return (
    <div>
      <h3 className="text-center">Thông Tin Cá Nhân</h3>

      <table class="table table-responsive-sm table-responsive-md table-responsive-lg">
        <thead>
          <tr>
            <th className="textTitleInput">Tài Khoản</th>
            <th>{userInfo.taiKhoan}</th>
          </tr>
          <tr>
            <th className="textTitleInput">Họ Và Tên</th>
            <th>{userInfo.hoTen}</th>
          </tr>
          <tr>
            <th className="textTitleInput">Email</th>
            <th>{userInfo.email}</th>
          </tr>
          <tr>
            <th className="textTitleInput">Mã Loại Người Dùng</th>
            <th>{userInfo.maLoaiNguoiDung}</th>
          </tr>
          <tr>
            <th className="textTitleInput">Mã Nhóm</th>
            <th>{userInfo.maNhom}</th>
          </tr>
          <tr>
            <th className="textTitleInput">Số Điện Thoại</th>
            <th>{userInfo.soDT}</th>
          </tr>
          <tr>
            <th className="textTitleInput" style={{ verticalAlign: "middle" }}>
              Khóa Học Đã Đăng Ký
            </th>
            <th>{renderDetailOfCoures()}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
