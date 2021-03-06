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
                H???y Ghi Danh
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
      <h3 className="text-center">Ghi Danh H???c Vi??n</h3>
      <div className="form-group">
        <p>M???i nh???p T??i Kho???n Mu???n T??m</p>
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
              alert("M???i ??i???n T??i Kho???n");
            } else {
              dispatch(userNotYetActionWithID(userIDYet.taiKhoan, tokenLocal));
              document.getElementById("userAvailableID").style.display = "none";
              document.getElementById("userWaitingID").style.display = "none";
              document.getElementById("userNotYetID").style.display = "block";
            }
          }}
          className="mr-5 mt-3 buttonTooLong"
        >
          T??m Kh??a H???c Ch??a Ghi Danh
        </button>
        <button
          onClick={() => {
            if (userIDYet.taiKhoan === "") {
              alert("M???i ??i???n T??i Kho???n");
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
          T??m Kh??a H???c ???? Ghi Danh
        </button>
        <button
          onClick={() => {
            if (userIDYet.taiKhoan === "") {
              alert("M???i ??i???n T??i Kho???n");
            } else {
              dispatch(userWaitingToAccpectWithID(userIDYet, tokenLocal));

              document.getElementById("userNotYetID").style.display = "none";
              document.getElementById("userAvailableID").style.display = "none";
              document.getElementById("userWaitingID").style.display = "block";
            }
          }}
          className="mt-3 buttonTooLong3"
        >
          T??m Kh??a H???c Ch??? Duy???t
        </button>
      </div>
      <div style={{ display: "none" }} id="userNotYetID">
        <h4 className="text-center mb-4">Danh S??ch H???c Sinh Ch??a Ghi Danh</h4>
        <table className="table text-center table-responsive-sm table-responsive-md table-responsive-lg">
          <thead>
            <tr className="textTitleInput">
              <th>M?? Kh??a H???c</th>
              <th>T??n Kh??a H???c</th>
              <th>B?? Danh</th>
              <th>Ghi Danh</th>
            </tr>
          </thead>
          <tbody>{renderUserNotYet(userNotYetWithID, "Ghi Danh")}</tbody>
        </table>
      </div>
      <div style={{ display: "none" }} id="userAvailableID">
        <h4 className="text-center mb-4">Danh S??ch H???c Sinh ???? Ghi Danh</h4>
        <table className="table text-center table-responsive-sm table-responsive-md table-responsive-lg">
          <thead>
            <tr className="textTitleInput">
              <th>M?? Kh??a H???c</th>
              <th>T??n Kh??a H???c</th>
              <th>H???y Ghi Danh</th>
            </tr>
          </thead>
          <tbody>{renderUserParams(useravailableWithID, "H???y Ghi Danh")}</tbody>
        </table>
      </div>
      <div style={{ display: "none" }} id="userWaitingID">
        <h4 className="text-center mb-4">Danh S??ch H???c Sinh Ch??? X??t Duy???t</h4>
        <table className="table text-center table-responsive-sm table-responsive-md table-responsive-lg">
          <thead>
            <tr className="textTitleInput">
              <th>M?? Kh??a H???c</th>
              <th>T??n Kh??a H???c</th>

              <th>Ghi Danh</th>
            </tr>
          </thead>
          <tbody>{renderUserParams(userWaitingWithID, "Ghi Danh")}</tbody>
        </table>
      </div>
    </div>
  );
}
