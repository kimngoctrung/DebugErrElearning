import Axios from "axios";
import { useDispatch } from "react-redux";
import { getAPIAction, searchCoures } from "../../Constant/getAPI";
export const getCouresAPI = (maNhom) => {
  return async (dispatch) => {
    try {
      const result = await Axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: getAPIAction,
        coures: result.data,
      });
    } catch (err) {
      alert(err.response?.data);
    }
  };
};
