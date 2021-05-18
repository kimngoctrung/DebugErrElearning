import axios from "axios";
import { USER_LOGIN } from "../../Constant/UserEducation";

export const registionCoures = (maKhoaHoc, taiKhoan, token) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
        method: "POST",
        data: {
          maKhoaHoc,
          taiKhoan,
        },
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      alert("Đăng Ký Khóa Học Thành Công");
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
export const cancelCouresAPI = (maKhoaHoc, taiKhoan, token) => {
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

      alert("Hủy Khóa Học Thành Công");
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
