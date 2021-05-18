import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { getCouresAPI } from "../../Redux/Action/CouresItemAction/CouresItemAction";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";
import {
  cancelCouresAPI,
  registionCoures,
} from "../../Redux/Action/RegistionCoures/RegistionCoures";
import { history } from "../../App";
import { CHANGECOURESCONSTANT } from "../../Redux/Constant/ChangeCouresConstant";

export default function CouresItem(props) {
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  const { userLogin } = useSelector((state) => state.UserLoginReducer);
  const { arrCoures } = useSelector((state) => state.CouresReducer);
  const { souresREDUCER } = useSelector((state) => state.CouresReducer);
  const { defaultID } = useSelector((state) => state.CouresReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCouresAPI(defaultID));
  }, [defaultID]);

  const renderCoures = () => {
    return arrCoures.map((coures, index) => {
      return (
        <div key={index} className="col-12 col-xl-4 col-sm-6 mt-5 cardKNT ">
          <img src={coures.hinhAnh} />
          <div className="contentOfCoures">
            <div id="contenNormal" className="textContent">
              <span>Mã Khóa Học: </span>
              <span>{coures.maKhoaHoc}</span>
              <div>
                <span>Lượt Xem: </span> <span>{coures.luotXem}</span>
              </div>
              <div>
                <span>Số Học Viên: </span>
                <span>{coures.soLuongHocVien}</span>
              </div>
              <div className="text-warning">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>

          <div className="textTitleKNT">
            <span>Tên Khóa Học: {coures.tenKhoaHoc.substring(0, 30)}</span>
            <div className="row">
              <NavLink
                to={`/detail/${coures.maKhoaHoc}`}
                className="btn myButton"
              >
                Xem Thêm
              </NavLink>
              {userLogin.maLoaiNguoiDung === "GV" ? (
                <NavLink
                  to="editcoures"
                  onClick={() => {
                    localStorage.setItem(
                      CHANGECOURESCONSTANT,
                      JSON.stringify(coures)
                    );
                  }}
                  className="btn myButton editOfTeacher"
                >
                  Sửa Khóa Học
                </NavLink>
              ) : (
                <div></div>
              )}
              {userLogin.maLoaiNguoiDung === "HV" ? (
                <button
                  onClick={registionCoures(
                    coures.maKhoaHoc,
                    userLogin.taiKhoan,
                    tokenLocal
                  )}
                  className="btn myButton register"
                >
                  Đăng Ký
                </button>
              ) : (
                <div></div>
              )}

              {userLogin.maLoaiNguoiDung === "HV" ? (
                <button
                  onClick={cancelCouresAPI(
                    coures.maKhoaHoc,
                    userLogin.taiKhoan,
                    tokenLocal
                  )}
                  className="btn myButton destroy"
                >
                  Hủy Khóa Học
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="textTitleOfHome">
      <div className="maginOfMe">
        <h1>Danh Sách Khóa Học</h1>
        <h3>Chọn Khóa Học Muốn Tìm Kiếm</h3>
      </div>

      <select
        onChange={(e) => {
          let { value } = e.target;
          dispatch({ type: "ID_COURES_ITEM", value: value });
        }}
        id="textTitleInput"
        className="form-control"
        as="select"
        name="maNhom"
      >
        <option>GP01</option>
        <option>GP02</option>
        <option>GP03</option>
        <option>GP04</option>
        <option>GP05</option>
        <option>GP06</option>
        <option>GP07</option>
        <option>GP08</option>
        <option>GP09</option>
        <option>GP10</option>
        <option>GP11</option>
        <option>GP12</option>
        <option>GP13</option>
        <option>GP14</option>
        <option>GP15</option>
      </select>
      <div className="row">{renderCoures()}</div>
    </div>
  );
}
