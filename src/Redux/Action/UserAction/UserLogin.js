import Axios from "axios";
import { history } from "../../../App";
import { logInAction } from "../../Constant/getAPI";
import { ACCESS_TOKEN, USER_LOGIN } from "../../Constant/UserEducation";
export const userLoginAPI = (values) => {
  return async (dispatch) => {
    try {
      const result = await Axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
        method: "POST",
        data: values,
      });
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(
        ACCESS_TOKEN,
        JSON.stringify(result.data.accessToken)
      );
      alert("Đăng Nhập Thành Công");
      history.push("/");
      window.location.reload("/");
      dispatch({ type: logInAction, values: result.data });
    } catch (err) {
      alert("Mật Khẩu Hoặc Tài Khoản Không Đúng");
      console.log(err.response?.data);
    }
  };
};
