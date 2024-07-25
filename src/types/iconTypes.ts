import React from "react";

export interface BaseIcon extends React.SVGProps<SVGSVGElement> {
  width?: number,
  height?: number,
  fill?: string,
  className?: string,
  stroke?: string,
}