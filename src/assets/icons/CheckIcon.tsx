import {BaseIcon} from "../../types/iconTypes.ts";
import {FC} from "react";


export const CheckIcon: FC<BaseIcon> = ({
                                          width = 11,
                                          height = 9,
                                          stroke = '#FFFFFF',
                                          fill = 'none',
                                        }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()}>
      <path fill={fill} stroke={stroke} strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
    </svg>
  )
}


