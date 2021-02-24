import styled from '@emotion/styled'
import * as React from 'react'

import LogoLightSvg from './logo-on-black.svg'
import LogoDarkSvg from './logo-on-white.svg'

const StyledSvg: React.FC<{ Svg: SvgrUrl }> = ({ Svg, ...props }) => {
  const StyledSvg = styled(Svg)`
    display: block;
    height: 1em;
    width: 6.0625em;
  `

  return <StyledSvg {...props} />
}

export const LogoLight: React.FC = (props) => (
  <StyledSvg Svg={LogoLightSvg} {...props} />
)

export const LogoDark: React.FC = (props) => (
  <StyledSvg Svg={LogoDarkSvg} {...props} />
)
