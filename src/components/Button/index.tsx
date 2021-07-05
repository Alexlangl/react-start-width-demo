import React from "react"
import "./index.less"

type WitOutType<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
type MutuallyExclusive<T, U> = T | U extends object
  ? (WitOutType<T, U> & U) | (WitOutType<U, T> & T)
  : T | U
interface ButtonProps {
  children: string
  type?: "primary" | "warning" | "error"
}
const Button: React.FC<
  ButtonProps &
    MutuallyExclusive<{ ghost?: boolean }, { text?: boolean }> &
    MutuallyExclusive<
      { href?: string },
      { onClick?: React.MouseEventHandler<HTMLElement> }
    >
> = ({ children, type = "primary", ghost, text, href, onClick }) => {
  let buttonClass, typeDefultClass
  ghost
    ? ((buttonClass = "ghost_" + type + "_button"),
      (typeDefultClass = "ghost_type_button"))
    : text
    ? ((buttonClass = "text_" + type + "_button"),
      (typeDefultClass = "text_type_button"))
    : ((buttonClass = type + "_button"),
      (typeDefultClass = "default_type_button"))
  const classNames = ["button_default", buttonClass, typeDefultClass].join(" ")
  if (href) {
    return (
      <a className={classNames + " href_button"} href={href} target="_blank">
        {children}
      </a>
    )
  }
  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button
