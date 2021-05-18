import axios from "axios";
import { history } from "../../../App";

export const changeCouresAction = (value, token, hinhAnh) => {
  return async () => {
    try {
      let frm = new FormData();
      let {
        maKhoaHoc,
        tenKhoaHoc,
        moTa,
        luotXem,
        danhGia,
        maNhom,
        ngayTao,
        maDanhMucKhoaHoc,
        taiKhoanNguoiTao,
        biDanh,
      } = value;
      frm.append("file", hinhAnh);

      // frm.append("value", value);
      frm.append("tenKhoaHoc", tenKhoaHoc);
      frm.append("moTa", moTa);
      frm.append("luotXem", luotXem);
      frm.append("danhGia", danhGia);
      // frm.append("hinhAnh", { hinhAnh: value.hinhAnh });
      frm.append("maNhom", maNhom);
      frm.append("ngayTao", ngayTao);
      frm.append("taiKhoanNguoiTao", taiKhoanNguoiTao);
      frm.append("maDanhMucKhoaHoc", maDanhMucKhoaHoc);
      frm.append("biDanh", biDanh);
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`,
        method: "POST",
        data: frm,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

// try {
//   const result = await axios({
//     url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc",
//     method: "PUT",
//     data: value,
//     headers: {
//       Authorization: "Bearer  " + token,
//     },
//   });
//   let frm = new FormData();
//   frm.append("file", hinhAnh);
//   frm.append("tenKhoaHoc", value.tenKhoaHoc);

//   const promise = axios({
//     url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
//     method: "POST",
//     data: frm,
//   });
//   promise.then((res) => {
//     alert("Thêm Thành Công");
//     history.push("/");
//     window.location.reload("/");
//   });
//   promise.catch((err) => {
//     console.log(err.response?.data);
//   });
//   alert("Sửa Đổi Thành Công");
// } catch (err) {
//   console.log(err.response?.data);
// }
