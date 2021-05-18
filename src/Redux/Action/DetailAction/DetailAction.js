import Axios from "axios";
import { getDeatilAction } from "../../Constant/getAPI";
export const getDetailAPI = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const result = await Axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
        method: "GET",
      });
      console.log(result.data);
      dispatch({ type: getDeatilAction, couresDetail: result.data });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
