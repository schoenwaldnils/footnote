import styled from '@emotion/styled'
import * as React from 'react'

import IconLightSvg from './icon-on-black.svg'
import IconDarkSvg from './icon-on-white.svg'

const StyledSvg: React.FC<{ Svg: SvgrUrl }> = ({ Svg, ...props }) => {
  const StyledSvg = styled(Svg)`
    display: block;
  `

  return <StyledSvg {...props} />
}

export const IconLight: React.FC = (props) => (
  <StyledSvg Svg={IconLightSvg} {...props} />
)

export const IconDark: React.FC = (props) => (
  <StyledSvg Svg={IconDarkSvg} {...props} />
)
