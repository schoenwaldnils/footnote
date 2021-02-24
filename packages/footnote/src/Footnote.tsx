import styled from '@emotion/styled'
import { IconDark } from '@schoenwald/logo'
import * as React from 'react'

const Container = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 200;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`

const StyledIcon = styled(IconDark)`
  font-size: 1.4em;
`

export const Footnote: React.FC = () => (
  <Container href="https://schoen.world/" target="schoenwald">
    <span>Made by</span>
    <StyledIcon />
  </Container>
)
