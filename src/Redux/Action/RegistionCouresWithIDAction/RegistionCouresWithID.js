import axios from "axios";
import {
  USERAVAILABLEIDCONSTANT,
  USERNOTYETIDCONSTANT,
  USERWAITINGTOACCEPTIDCONSTANT,
} from "../../Constant/regisUserWithID";

export const userNotYetActionWithID = (couresIDYet, token) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${couresIDYet}`,
        method: "POST",
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      if (result.data.length === 0) {
        alert("Không Tìm Thấy Khóa Học");
      }
      dispatch({ type: USERNOTYETIDCONSTANT, data: result.data });
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
export const userAvailableActionWithID = (couresIDYet, token) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
        method: "POST",
        data: couresIDYet,
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      if (result.data.length === 0) {
        alert("Không Tìm Thấy Khóa Học");
      }
      dispatch({ type: USERAVAILABLEIDCONSTANT, data: result.data });
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
export const userWaitingToAccpectWithID = (couresIDYet, token) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
        method: "POST",
        data: couresIDYet,
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      if (result.data.length === 0) {
        alert("Không Tìm Thấy Khóa Học");
      }
      dispatch({ type: USERWAITINGTOACCEPTIDCONSTANT, data: result.data });
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
