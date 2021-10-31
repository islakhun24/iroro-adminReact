import React from "react";
import { Input } from "antd";

const Inputs = (props) => {
  const { value, placeholder } = props;
  return (
    <Input
      size="large"
      className="bg-gray-100 rounded-lg ring-0"
      style={{
        width: 512,
      }}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Inputs;
