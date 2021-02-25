import styled from '@emotion/styled'
import * as React from 'react'

import { Footnote } from './Footnote'

export default {
  title: 'Footnote',
}

const DarkBg = styled.div`
  color: #fff;
  background-color: #222;
`

export const Default: React.FC = () => <Footnote />

export const OnDark: React.FC = () => (
  <DarkBg>
    <Footnote theme="dark" />
  </DarkBg>
)
