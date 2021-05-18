import React from "react";
import { useFormik, Field, ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";
import { useDispatch } from "react-redux";
import { deleteCouresAction } from "../../Redux/Action/DeleteCouresAction/DeleteCouresAction";

export default function DeleteCoures() {
  const dispatch = useDispatch();
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  const SignupSchema = Yup.object().shape({
    maKhoaHoc: Yup.string().required("Mời Điền Khóa Học Muốn Xóa"),
  });
  return (
    <div className="container">
      <div className="row flex-column align-items-center justify-content-center">
        <h1>Xóa Khóa Học</h1>
        <div className="col-6">
          <div className="form-group">
            <Formik
              initialValues={{
                maKhoaHoc: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                dispatch(deleteCouresAction(values.maKhoaHoc, tokenLocal));
              }}
            >
              {({ errors, touched, values }) => (
                <Form>
                  <Field className="form-control" name="maKhoaHoc" />
                  {errors.maKhoaHoc && touched.maKhoaHoc ? (
                    <div className="alert alert-danger text-left">
                      {errors.maKhoaHoc}
                    </div>
                  ) : null}
                  <div className="text-center mt-3">
                    <button className="btn deleteCourse" type="submit">
                      Xóa Khóa Học
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
