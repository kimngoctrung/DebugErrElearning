import axios from "axios";
import {
  USERAVAILABLECONSTANT,
  USERNOTYETCONSTANT,
  USERWAITINGTOACCEPTCONSTANT,
} from "../../Constant/userNotYetConstant";

export const userNotYetAction = (couresIDYet, token) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`,
        method: "POST",
        data: couresIDYet,
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      if (result.data.length === 0) {
        alert("Không Tìm Thấy Học Viên");
      }
      dispatch({ type: USERNOTYETCONSTANT, data: result.data });
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
export const userAvailableAction = (couresIDYet, token) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,
        method: "POST",
        data: couresIDYet,
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      if (result.data.length === 0) {
        alert("Không Tìm Thấy Học Viên");
      }
      dispatch({ type: USERAVAILABLECONSTANT, data2: result.data });
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
export const userWaitingToAccpect = (couresIDYet, token) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
        method: "POST",
        data: couresIDYet,
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      if (result.data.length === 0) {
        alert("Không Tìm Thấy Học Viên");
      }
      dispatch({ type: USERWAITINGTOACCEPTCONSTANT, data2: result.data });
    } catch (err) {
      alert(err.response?.data);
    }
  };
};

export const confirmUserNotYetAction = (maKhoaHoc, taiKhoan, token) => {
  return async () => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
        method: "POST",
        data: {
          maKhoaHoc,
          taiKhoan,
        },
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      alert(result.data);
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
export const cancelUserAvailable = (maKhoaHoc, taiKhoan, token) => {
  return async () => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh`,
        method: "POST",
        data: {
          maKhoaHoc,
          taiKhoan,
        },
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      alert(result.data);
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
