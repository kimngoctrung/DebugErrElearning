import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../Component/Header/Header";

export default function HeaderTemplate(props) {
  return (
    <Fragment>
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return (
            <Fragment>
              <Header />
              <div>
                {/* <div className="col-6 d-flex flex-column align-item-center justify-content-center">
                  <props.component {...propsRoute} />
                </div> */}
                <div>
                  <props.component {...propsRoute} />
                </div>
              </div>
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
}
