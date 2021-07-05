import React from "react"
import Button from "@components/Button"

export default function PageA() {
  const handleClick = (event: React.MouseEvent<HTMLElement> | undefined) => {
    console.log(event)
  }
  return (
    <div style={{ marginTop: "12px" }}>
      <Button type="error" onClick={handleClick}>
        Primary
      </Button>
    </div>
  )
}
