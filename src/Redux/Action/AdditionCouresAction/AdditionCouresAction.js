import axios from "axios";
import { history } from "../../../App";

export const additionCouresAction = (value, token, hinhAnh) => {
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
      frm.append("maKhoaHoc", maKhoaHoc);
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
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh",
        method: "POST",
        data: frm,
        headers: {
          Authorization: "Bearer  " + token,
        },
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
