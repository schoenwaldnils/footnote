import styled from '@emotion/styled'
import * as React from 'react'

import { LogoDark, LogoLight } from './Logo'

export default {
  title: 'Logo / Logo',
}

const Wrapper = styled.div`
  padding: 0.125em;
  font-size: 120px;
`

const WrapperDark = styled(Wrapper)`
  background-color: #222;
`

export const OnLight: React.FC = () => (
  <Wrapper>
    <LogoDark />
  </Wrapper>
)

export const OnDark: React.FC = () => (
  <WrapperDark>
    <LogoLight />
  </WrapperDark>
)
