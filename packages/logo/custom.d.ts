type SvgrUrl = React.FunctionComponent<React.SVGAttributes<SVGElement>>

type SvgrComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: SvgrComponent
  const value: SvgrUrl
  export default value
}
