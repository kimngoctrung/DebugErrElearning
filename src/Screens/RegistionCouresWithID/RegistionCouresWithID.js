import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userAvailableActionWithID,
  userNotYetActionWithID,
  userWaitingToAccpectWithID,
} from "../../Redux/Action/RegistionCouresWithIDAction/RegistionCouresWithID";
import {
  cancelUserAvailable,
  confirmUserNotYetAction,
} from "../../Redux/Action/UserNotYetAction/UserNotYetAction";
import {
  USERCANCELWITHID,
  USERCONFIRMWAITINGWITHID,
  USERCORFIMWITHID,
} from "../../Redux/Constant/regisUserWithID";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";

export default function RegistionCouresWithID() {
  const { userNotYetWithID, useravailableWithID, userWaitingWithID } =
    useSelector((state) => state.registerWithIDOfUserRe);
  const dispatch = useDispatch();
  const [userIDYet, setUserID] = useState({
    taiKhoan: "",
  });
  const renderUserNotYet = () => {
    return userNotYetWithID?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maKhoaHoc}</td>
          <td>{item.tenKhoaHoc}</td>
          <td>{item.biDanh}</td>
          <td>
            <button
              onClick={() => {
                dispatch(
                  confirmUserNotYetAction(
                    item.maKhoaHoc,
                    userIDYet.taiKhoan,
                    tokenLocal
                  )
                );
                dispatch({ type: USERCORFIMWITHID, data: item.maKhoaHoc });
              }}
              className="btn btn-outline-success"
            >
              Ghi Danh
            </button>
          </td>
        </tr>
      );
    });
  };
  const renderUserParams = (arrUser, meThod) => {
    return arrUser?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maKhoaHoc}</td>
          <td>{item.tenKhoaHoc}</td>
          <td>
            {meThod === "Ghi Danh" ? (
              <button
                onClick={() => {
                  dispatch(
                    confirmUserNotYetAction(
                      item.maKhoaHoc,
                      userIDYet.taiKhoan,
                      tokenLocal
                    )
                  );
                  dispatch({
                    type: USERCONFIRMWAITINGWITHID,
                    data: item.maKhoaHoc,
                  });
                }}
                className="btn btn-outline-success"
              >
                Ghi Danh
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(
                    cancelUserAvailable(
                      item.maKhoaHoc,
                      userIDYet.taiKhoan,
                      tokenLocal
                    )
                  );
                  dispatch({
                    type: USERCANCELWITHID,
                    data: item.maKhoaHoc,
                  });
                }}
                className="btn btn-outline-danger"
              >
                Hủy Ghi Danh
              </button>
            )}
          </td>
        </tr>
      );
    });
  };
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  return (
    <div className="container mt-2">
      <h3 className="text-center">Ghi Danh Học Viên</h3>
      <div className="form-group">
        <p>Mời nhập Tài Khoản Muốn Tìm</p>
        <input
          onChange={(e) => {
            setUserID({ ...userIDYet, taiKhoan: e.target.value });
          }}
          type="text"
          name=""
          className="form-control"
          aria-describedby="helpId"
        />
        <button
          onClick={() => {
            if (userIDYet.taiKhoan === "") {
              alert("Mời Điền Tài Khoản");
            } else {
              dispatch(userNotYetActionWithID(userIDYet.taiKhoan, tokenLocal));
              document.getElementById("userAvailableID").style.display = "none";
              document.getElementById("userWaitingID").style.display = "none";
              document.getElementById("userNotYetID").style.display = "block";
            }
          }}
          className="mr-5 mt-3 buttonTooLong"
        >
          Tìm Khóa Học Chưa Ghi Danh
        </button>
        <button
          onClick={() => {
            if (userIDYet.taiKhoan === "") {
              alert("Mời Điền Tài Khoản");
            } else {
              dispatch(userAvailableActionWithID(userIDYet, tokenLocal));

              document.getElementById("userNotYetID").style.display = "none";
              document.getElementById("userWaitingID").style.display = "none";
              document.getElementById("userAvailableID").style.display =
                "block";
            }
          }}
          className="mr-5 mt-3 buttonTooLong2"
        >
          Tìm Khóa Học Đã Ghi Danh
        </button>
        <button
          onClick={() => {
            if (userIDYet.taiKhoan === "") {
              alert("Mời Điền Tài Khoản");
            } else {
              dispatch(userWaitingToAccpectWithID(userIDYet, tokenLocal));

              document.getElementById("userNotYetID").style.display = "none";
              document.getElementById("userAvailableID").style.display = "none";
              document.getElementById("userWaitingID").style.display = "block";
            }
          }}
          className="mt-3 buttonTooLong3"
        >
          Tìm Khóa Học Chờ Duyệt
        </button>
      </div>
      <div style={{ display: "none" }} id="userNotYetID">
        <h4 className="text-center mb-4">Danh Sách Học Sinh Chưa Ghi Danh</h4>
        <table className="table text-center table-responsive-sm table-responsive-md table-responsive-lg">
          <thead>
            <tr className="textTitleInput">
              <th>Mã Khóa Học</th>
              <th>Tên Khóa Học</th>
              <th>Bí Danh</th>
              <th>Ghi Danh</th>
            </tr>
          </thead>
          <tbody>{renderUserNotYet(userNotYetWithID, "Ghi Danh")}</tbody>
        </table>
      </div>
      <div style={{ display: "none" }} id="userAvailableID">
        <h4 className="text-center mb-4">Danh Sách Học Sinh Đã Ghi Danh</h4>
        <table className="table text-center table-responsive-sm table-responsive-md table-responsive-lg">
          <thead>
            <tr className="textTitleInput">
              <th>Mã Khóa Học</th>
              <th>Tên Khóa Học</th>
              <th>Hủy Ghi Danh</th>
            </tr>
          </thead>
          <tbody>{renderUserParams(useravailableWithID, "Hủy Ghi Danh")}</tbody>
        </table>
      </div>
      <div style={{ display: "none" }} id="userWaitingID">
        <h4 className="text-center mb-4">Danh Sách Học Sinh Chờ Xét Duyệt</h4>
        <table className="table text-center table-responsive-sm table-responsive-md table-responsive-lg">
          <thead>
            <tr className="textTitleInput">
              <th>Mã Khóa Học</th>
              <th>Tên Khóa Học</th>

              <th>Ghi Danh</th>
            </tr>
          </thead>
          <tbody>{renderUserParams(userWaitingWithID, "Ghi Danh")}</tbody>
        </table>
      </div>
    </div>
  );
}
