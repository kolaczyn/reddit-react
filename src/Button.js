import React from 'react'

export default function WhiteButton({label, color}){
  return (
    <button className={`${color}-btn`} title="Learn More">{label}</button>
  )
}
