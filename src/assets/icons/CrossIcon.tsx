import {BaseIcon} from "../../types/iconTypes.ts";
import {FC} from "react";


export const CrossIcon: FC<BaseIcon> = ({width = 18, height = 18, fill = '#494C6B'}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()}>
      <path fill={fill} fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
    </svg>
  )
}


