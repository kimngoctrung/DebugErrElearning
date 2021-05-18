import axios from "axios";
import React, { useState } from "react";
import { history } from "../../App";
import { CHANGECOURESCONSTANT } from "../../Redux/Constant/ChangeCouresConstant";
import { ACCESS_TOKEN } from "../../Redux/Constant/UserEducation";

export default function UpdatePictureOfCoures() {
  let tokenLocal = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  const [fileUpdate, setFile] = useState();
  let souresChange = JSON.parse(localStorage.getItem(CHANGECOURESCONSTANT));

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <input
              value={souresChange.tenKhoaHoc}
              className="form-control mb-2"
              type="text"
            />
            <input
              onChange={(e) => {
                let file = e.target.files[0];
                setFile(file);
              }}
              type="file"
              name="file"
              className="form-control"
              placeholder
              aria-describedby="helpId"
            />
            <button onClick={() => {}} className="btn btn-danger mt-3">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
