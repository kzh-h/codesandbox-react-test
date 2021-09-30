import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color, // colorだけでもよい、変数名と同じ名前の者は省略できる
    fonSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
