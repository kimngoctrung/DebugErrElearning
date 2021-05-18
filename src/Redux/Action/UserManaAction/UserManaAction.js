import axios from "axios";
import { USER_MANGER } from "../../Constant/ModelManager";

export const userManaAction = (value, token) => {
  return async () => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung
        `,
        method: "POST",
        data: value,
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      localStorage.setItem(USER_MANGER, JSON.stringify(result.data));
      alert("Thêm Thành Công");
      window.location.reload();
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
export const deleteManaAction = (taiKhoan, token) => {
  return async () => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}
          `,
        method: "DELETE",
        headers: {
          Authorization: "Bearer  " + token,
        },
      });

      alert("Xóa Thành Công");
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
// export const changeManaAction = (taiKhoan, token) => {
//   return async () => {
//     try {
//       const result = await axios({
//         url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}
//           `,
//         method: "DELETE",
//         headers: {
//           Authorization: "Bearer  " + token,
//         },
//       });

//       alert("Xóa Thành Công");
//     } catch (err) {
//       alert(err.response?.data);
//     }
//   };
// };
