import axios from "axios";
import { ACCESS_TOKEN, USER_LOGIN } from "../../Constant/UserEducation";

export const editUserAPI = (user, token) => {
  return async () => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "PUT",
        data: user,
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      alert("Chỉnh Sửa Thành Công");
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      window.location.replace();
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
