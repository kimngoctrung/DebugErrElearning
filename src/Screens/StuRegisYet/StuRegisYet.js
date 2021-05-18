import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelUserAvailable,
  confirmUserNotYetAction,
  userAvailableAction,
  userNotYetAction,
  userWaitingToAccpect,
} from "../../Redux/Action/UserNotYetAction/UserNotYetAction";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";
import {
  USER_CONFIRM,
  USER_CONFIRM_WAITING,
  USER_CANCEL,
} from "../../Redux/Constant/userNotYetConstant";

export default function StuRegisYet() {
  const { userNotYet, useravailable, userWaiting } = useSelector(
    (state) => state.stuRegisYetReducer
  );
  const dispatch = useDispatch();
  const [couresIDYet, setCouresID] = useState({
    maKhoaHoc: "",
  });
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  const renderUserNotYet = () => {
    return userNotYet?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.hoTen}</td>
          <td>{item.taiKhoan}</td>
          <td>{item.biDanh}</td>
          <td>
            <button
              onClick={() => {
                dispatch(
                  confirmUserNotYetAction(
                    couresIDYet.maKhoaHoc,
                    item.taiKhoan,
                    tokenLocal
                  )
                );
                dispatch({ type: USER_CONFIRM, data: item.taiKhoan });
              }}
              className="btn"
            >
              Xác Thực Người Dùng
            </button>
          </td>
        </tr>
      );
    });
  };
  const renderUserWaiting = () => {
    return userWaiting?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.hoTen}</td>
          <td>{item.taiKhoan}</td>
          <td>{item.biDanh}</td>
          <td>
            <button
              onClick={() => {
                dispatch(
                  confirmUserNotYetAction(
                    couresIDYet.maKhoaHoc,
                    item.taiKhoan,
                    tokenLocal
                  )
                );
                dispatch({ type: USER_CONFIRM_WAITING, data: item.taiKhoan });
              }}
              className="btn"
            >
              Xác Thực Người Dùng
            </button>
          </td>
        </tr>
      );
    });
  };
  const renderUserAvailable = () => {
    return useravailable?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.hoTen}</td>
          <td>{item.taiKhoan}</td>
          <td>{item.biDanh}</td>
          <td>
            <button
              onClick={() => {
                dispatch(
                  cancelUserAvailable(
                    couresIDYet.maKhoaHoc,
                    item.taiKhoan,
                    tokenLocal
                  )
                );
                dispatch({ type: USER_CANCEL, data: item.taiKhoan });
              }}
              className="btn btn-outline-danger"
            >
              Hủy Ghi Danh
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container mt-2">
      <h3 className="text-center">Ghi Danh Học Viên</h3>
      <div className="form-group">
        <p>Mời nhập Mã Khóa Học</p>
        <input
          onChange={(e) => {
            setCouresID({ ...couresIDYet, maKhoaHoc: e.target.value });
          }}
          type="text"
          name=""
          className="form-control"
          aria-describedby="helpId"
        />
        <button
          onClick={() => {
            if (couresIDYet.maKhoaHoc === "") {
              alert("Mời Điền Khóa Học");
            } else {
              dispatch(userNotYetAction(couresIDYet, tokenLocal));
              document.getElementById("userAvailable").style.display = "none";
              document.getElementById("userWaiting").style.display = "none";
              document.getElementById("userNotYet").style.display = "block";
            }
          }}
          className="mr-5 mt-3 buttonTooLong"
        >
          <span> Tìm Học Sinh Chưa Ghi Danh</span>
        </button>
        <button
          onClick={() => {
            if (couresIDYet.maKhoaHoc === "") {
              alert("Mời Điền Khóa Học");
            } else {
              dispatch(userAvailableAction(couresIDYet, tokenLocal));
              document.getElementById("userNotYet").style.display = "none";
              document.getElementById("userWaiting").style.display = "none";
              document.getElementById("userAvailable").style.display = "block";
            }
          }}
          className="mr-5 mt-3 buttonTooLong2"
        >
          Tìm Học Sinh Đã Ghi Danh
        </button>
        <button
          style={{ padding: "5px" }}
          onClick={() => {
            if (couresIDYet.maKhoaHoc === "") {
              alert("Mời Điền Khóa Học");
            } else {
              dispatch(userWaitingToAccpect(couresIDYet, tokenLocal));
              document.getElementById("userNotYet").style.display = "none";
              document.getElementById("userAvailable").style.display = "none";
              document.getElementById("userWaiting").style.display = "block";
            }
          }}
          className="mt-3 buttonTooLong3"
        >
          Tìm Học Sinh Chờ Duyệt
        </button>
      </div>
      <div style={{ display: "none" }} id="userNotYet">
        <h4 className="text-center mb-4">Danh Sách Học Sinh Chưa Ghi Danh</h4>

        <table className="table text-center table-responsive-sm table-responsive-md table-responsive-lg">
          <thead>
            <tr className="textTitleInput">
              <th>Họ Và Tên</th>
              <th>Tài Khoản</th>
              <th>Bí Danh</th>
              <th>Xác Thực Người Dùng</th>
            </tr>
          </thead>
          <tbody>{renderUserNotYet()}</tbody>
        </table>
      </div>
      <div style={{ display: "none" }} id="userAvailable">
        <h4 className="text-center mb-4">Danh Sách Học Sinh Đã Ghi Danh</h4>
        <table className="table text-center table-responsive-sm table-responsive-md table-responsive-lg">
          <thead>
            <tr className="textTitleInput">
              <th>Họ Và Tên</th>
              <th>Tài Khoản</th>
              <th>Bí Danh</th>
              <th>Xác Thực Người Dùng</th>
            </tr>
          </thead>
          <tbody>{renderUserAvailable()}</tbody>
        </table>
      </div>
      <div style={{ display: "none" }} id="userWaiting">
        <h4 className="text-center mb-4">Danh Sách Học Sinh Chờ Xét Duyệt</h4>
        <table className="table text-center table-responsive-sm table-responsive-md table-responsive-lg">
          <thead>
            <tr className="textTitleInput">
              <th>Họ Và Tên</th>
              <th>Tài Khoản</th>
              <th>Bí Danh</th>
              <th>Xác Thực Người Dùng</th>
            </tr>
          </thead>
          <tbody>{renderUserWaiting()}</tbody>
        </table>
      </div>
    </div>
  );
}
