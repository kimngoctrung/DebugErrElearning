import React from "react";
import { Tabs, Menu, Dropdown, Button } from "antd";
import InfoUser from "./InfoUser";
import RegisCoures from "./RegisCoures";
import InfoMationUser from "./InfoMationUser";
import SearchUser from "../SearchUser/SearchUser";
import AdditionCoures from "../AdditionCoures/AdditionCoures";
import DeleteCoures from "../DeleteCoures/DeleteCoures";
import StuRegisYet from "../StuRegisYet/StuRegisYet";
import RegistionCouresWithID from "../RegistionCouresWithID/RegistionCouresWithID";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const { TabPane } = Tabs;
export default function EditUser(props) {
  const { userLogin } = useSelector((state) => state.UserLoginReducer);

  if (userLogin.maLoaiNguoiDung === undefined) {
    alert("Bạn Phải Đăng Nhập Mới Có Thể Truy Cập Trang Này");
    return <Redirect to="/login" />;
  } else {
    return (
      <div className="container myTab">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Cập Nhập Thông Tin" key="1">
            <InfoUser />
          </TabPane>
          <TabPane tab="Thông Tin Cá Nhân" key="3">
            <InfoMationUser />
          </TabPane>
          {userLogin.maLoaiNguoiDung === "GV" ? (
            <TabPane tab="Tìm Kiếm Người Dùng" key="4">
              <SearchUser />
            </TabPane>
          ) : (
            <div></div>
          )}
          {userLogin.maLoaiNguoiDung === "GV" ? (
            <TabPane tab="Thêm Khóa Học" key="5">
              <AdditionCoures />
            </TabPane>
          ) : (
            <div></div>
          )}
          {userLogin.maLoaiNguoiDung === "GV" ? (
            <TabPane tab="Xoá Khóa Học" key="6">
              <DeleteCoures />
            </TabPane>
          ) : (
            <div></div>
          )}
          {userLogin.maLoaiNguoiDung === "GV" ? (
            <TabPane tab="Tìm Học Viên" key="7">
              <StuRegisYet />
            </TabPane>
          ) : (
            <div></div>
          )}
          {userLogin.maLoaiNguoiDung === "GV" ? (
            <TabPane tab="Tìm Khóa Học" key="8">
              <RegistionCouresWithID />
            </TabPane>
          ) : (
            <div></div>
          )}
        </Tabs>
      </div>
    );
  }
}
