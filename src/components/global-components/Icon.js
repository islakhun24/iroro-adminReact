/* eslint-disable import/no-anonymous-default-export */
import { Image } from "antd";
// import logo from 'assets/images/svg/logo.svg'

export default (props) => {
  const { preview = false, src, width = "16.8px", height = "16.8px" } = props;

  return <Image preview={preview} src={src} width={width} height={height} />;
};
