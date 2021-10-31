/* eslint-disable import/no-anonymous-default-export */
import { Image } from 'antd'
// import logo from 'assets/images/svg/logo.svg'
import { im_logo } from 'assets/images/png'

export default (props) => {
    const { preview = false, width = 70, height } = props

    return (
        <Image preview={preview} src={im_logo} width={width} height={height} />
    )
}