import axios from "axios";

export const deleteCouresAction = (value, token) => {
  return async () => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${value}`,
        method: "DELETE",

        headers: {
          Authorization: "Bearer  " + token,
        },
      });
      alert("Xóa Khóa Học Thành Công");
      window.location.reload();
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
