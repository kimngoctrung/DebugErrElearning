import Axios from "axios";
export const layDanhSachCouresAPI = (maNhom,tenKhoaHoc) =>{
   return async (dispatch) =await Axios({
       url:`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${maNhom}

       `,
       method:"GET"
   })
}
