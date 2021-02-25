import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconDark, IconLight } from '@schoenwald/logo'
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

const iconStyles = css`
  font-size: 1.4em;
`

const StyledIconDark = styled(IconDark)`
  ${iconStyles}
`

const StyledIconLight = styled(IconLight)`
  ${iconStyles}
`

export const Footnote: React.FC<{ theme?: 'light' | 'dark' }> = ({
  theme = 'light',
}) => {
  const Icon = theme === 'light' ? StyledIconDark : StyledIconLight
  return (
    <Container href="https://schoen.world/" target="schoenwald">
      <span>Made by</span>
      <Icon />
    </Container>
  )
}
