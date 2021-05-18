import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Registration from "../Registration/Registration";

export default function AdditionMem(props) {
  const { userLogin } = useSelector((state) => state.UserLoginReducer);

  if (userLogin.maLoaiNguoiDung === "GV") {
    return (
      <div>
        <Registration />
      </div>
    );
  } else {
    alert("Bạn Phải Đăng Nhập Và Là Giáo Viên Mới Có Thể Truy Cập Trang Này");
    return <Redirect to="/login" />;
  }
}
