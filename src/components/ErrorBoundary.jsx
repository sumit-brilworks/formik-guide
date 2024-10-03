import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  //   console.log(error);
  return <div>{error?.message}</div>;
}

export default ErrorBoundary;
