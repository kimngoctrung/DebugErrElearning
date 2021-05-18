import axios from "axios";
import { SEARCH_USER } from "../../Constant/ModelManager";

export const searchUserAction = (maNhom, taiKhoan, token) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${taiKhoan}`,
        method: "GET",
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      if (result.data.length === 0) {
        alert("Không Tìm Thấy Người Dùng");
      }
      dispatch({ type: SEARCH_USER, data: result.data });
    } catch (err) {
      console.log(err.response?.status);
    }
  };
};
