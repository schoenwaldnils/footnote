import styled from '@emotion/styled'
import * as React from 'react'

import { IconDark, IconLight } from './Icon'

export default {
  title: 'Logo / Icon',
}

const Wrapper = styled.div`
  padding: 0.125em;
  font-size: 200px;
`

const WrapperDark = styled(Wrapper)`
  background-color: #222;
`

export const OnLight: React.FC = () => (
  <Wrapper>
    <IconDark />
  </Wrapper>
)

export const OnDark: React.FC = () => (
  <WrapperDark>
    <IconLight />
  </WrapperDark>
)
