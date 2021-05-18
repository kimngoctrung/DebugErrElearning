import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../App";

export default function Header() {
  const { userLogin } = useSelector((state) => state.UserLoginReducer);
  console.log(userLogin);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-light navOfMe">
      <NavLink className="navbar-brand" to="/">
        <img
          style={{ width: "100%" }}
          src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
          alt=""
        />
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ulOfMe">
          <li className="nav-item homePage">
            <NavLink
              activeClassName="myClassActive"
              className="nav-link myButtonSignIn"
              exact
              to="/"
            >
              Trang Chủ <span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            {userLogin.taiKhoan === undefined ? (
              <div></div>
            ) : (
              <NavLink
                activeClassName="myClassActive"
                className="nav-link myButtonSignIn"
                to="/edit"
              >
                Thông Tin Người Dùng
              </NavLink>
            )}
          </li>
          {userLogin.maLoaiNguoiDung === "GV" ? (
            <li className="nav-item">
              <NavLink
                activeClassName="myClassActive"
                className="nav-link myButtonSignIn"
                to="/deletemem"
              >
                Xóa Người Dùng
              </NavLink>
            </li>
          ) : (
            <div></div>
          )}

          {userLogin.maLoaiNguoiDung === "GV" ? (
            <li className="nav-item">
              <NavLink
                activeClassName="myClassActive"
                className="nav-link myButtonSignIn"
                to="/addmem"
              >
                Thêm Người Dùng
              </NavLink>
            </li>
          ) : (
            <div></div>
          )}

          {userLogin.taiKhoan === undefined ? (
            <li className="nav-item marGinSignUp">
              <NavLink
                activeClassName="myButtonSignUpActive"
                className="nav-link myButtonSignUp"
                to="/register"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Đăng Ký
              </NavLink>
            </li>
          ) : null}

          {userLogin.taiKhoan === undefined ? (
            <li className="nav-item ">
              <NavLink
                activeClassName="myClassActive"
                className="nav-link myButtonSignIn"
                to="/login"
              >
                Đăng Nhập
              </NavLink>
            </li>
          ) : (
            <p className="nav-link userLogin">Xin Chào, {userLogin.taiKhoan}</p>
          )}

          <li className="nav-item">
            {userLogin.taiKhoan === undefined ? (
              <div></div>
            ) : (
              <button
                onClick={() => {
                  localStorage.clear();
                  history.push("/");
                  window.location.reload("/");
                }}
                className="btn myButtonCheckOut"
              >
                Thoát
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
