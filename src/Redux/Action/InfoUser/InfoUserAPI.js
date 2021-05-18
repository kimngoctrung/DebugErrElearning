import axios from "axios";
import {
  ACCESS_TOKEN,
  INFOMATION,
  USER_LOGIN,
  INFOMATIONUSERREDUCER,
} from "../../Constant/UserEducation";

export const infoUserAPI = (taiKhoan, matKhau, token) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        method: "POST",
        data: { taiKhoan, matKhau },
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      dispatch({ type: INFOMATIONUSERREDUCER, data: result.data });
      localStorage.setItem(INFOMATION, JSON.stringify(result.data));
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
