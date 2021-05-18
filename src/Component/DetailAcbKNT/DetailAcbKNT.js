import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailAPI } from "../../Redux/Action/DetailAction/DetailAction";

export default function DetailAcbKNT(props) {
  const dispatch = useDispatch();
  const { detailCoures } = useSelector((state) => state.CouresReducer);

  useEffect(() => {
    dispatch(getDetailAPI(props.match.params.id));
  }, []);
  console.log(detailCoures);
  return (
    <div className="container-fluid mt-5">
      <h3 className="text-center mb-5">Thông Tin Khóa Học</h3>
      <div className="row">
        <div className="col-4">
          <img
            className="w-100"
            src={detailCoures.hinhAnh}
            alt={detailCoures.hinhAnh}
          />
        </div>
        <div className="col-8">
          <table class="table table-hover table-responsive-sm table-responsive-md table-responsive-lg table-bordered">
            <thead class="thead-inverse">
              <tr id="textTitleInput">
                <th>Mã Danh Mục</th>
                <th>Tên Danh Mục</th>
                <th>Mã Khóa Học</th>
                <th>Tên Khóa Học</th>
                <th>Mã Nhóm</th>
                <th>Ngày Tạo</th>
                <th>Người Tạo</th>
                <th>Số Lượng HV</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{detailCoures?.danhMucKhoaHoc?.maDanhMucKhoahoc}</td>
                <td>{detailCoures?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</td>
                <td>{detailCoures.maKhoaHoc}</td>
                <td>{detailCoures.tenKhoaHoc}</td>
                <td>{detailCoures.maNhom}</td>
                <td>{detailCoures.ngayTao}</td>
                <td>{detailCoures?.nguoiTao?.hoTen}</td>
                <td>{detailCoures.soLuongHocVien}</td>
              </tr>
            </tbody>
          </table>
          <p>{detailCoures.moTa}</p>
        </div>
      </div>
    </div>
  );
}
