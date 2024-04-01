import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout";
const TaskIndex = React.lazy(() => import("./pages/Task/index"));
const PageRouts = () => {
  return (
    <>
      <PageLayout />
        <Routes>
          <Route path="/task" element={<TaskIndex />} />
        </Routes>
    </>
  );
};

export default PageRouts;
