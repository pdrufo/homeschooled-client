import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UpdateLog from "./UpdateLog";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <UpdateLog />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
