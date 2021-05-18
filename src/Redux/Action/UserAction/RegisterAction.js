import axios from "axios";
import { history } from "../../../App";

export const registerActionAPI = (values) => {
  return async () => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
        method: "POST",
        data: values,
      });
      alert("Đăng Kí Thành Công");
      history.push("/login");
      window.location.reload("/login");
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
