import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { userLoginAPI } from "../../Redux/Action/UserAction/UserLogin";
import { useDispatch } from "react-redux";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default function UserLogin(props) {
  const dispatch = useDispatch();
  let ivalid = true;
  const [userData, setTaiKhoan] = useState({ taiKhoan: "", matKhau: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const validationUser = (userData) => {
    if (userData.taiKhoan === "") {
      ivalid = false;
    } else if (userData.matKhau === "") {
      ivalid = false;
    }

    console.log(ivalid);
    return ivalid;
  };

  return (
    <Form
      className="container-fluid mt-5"
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
    >
      <div className="row flex-column align-items-center justify-content-center">
        <div className="col-6">
          <h3 className="text-center">Đăng Nhập</h3>
          <Form.Item
            className="marinLoGin"
            onChange={(e) => {
              setTaiKhoan({ ...userData, taiKhoan: e.target.value });
            }}
            label="Tài Khoản"
            name="taiKhoan"
            rules={[{ required: true, message: "Vui Lòng Điền Tên Tài Khoản" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            onChange={(e) => {
              setTaiKhoan({ ...userData, matKhau: e.target.value });
            }}
            className="marinLoGin"
            label="Mật Khẩu"
            name="matKhau"
            rules={[{ required: true, message: "Vui Lòng Điền Mật Khẩu" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            {...tailLayout}
            className="marinLoGin"
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Ghi Nhớ</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              className="marinLoGin maxWith280"
              onClick={() => {
                validationUser(userData);
                if (ivalid) {
                  dispatch(userLoginAPI(userData));
                }
              }}
              type="primary"
              htmlType="submit"
            >
              Đăng Nhập
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
    // </form>
  );
}
