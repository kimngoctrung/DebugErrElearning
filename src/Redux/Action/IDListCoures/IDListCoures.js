import axios from "axios";

export const getIDListCoures = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
        method: "GET",
      });
      dispatch({
        type: "LAY_MA_DANH_MUC",
        coures: result.data,
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
