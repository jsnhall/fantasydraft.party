import React from 'react'

export default function ErrorMsg(props) {
  return (
    <div style={{color: '#ff0000'}}>
      <small>{props.msg}</small>
    </div>
  )
}
