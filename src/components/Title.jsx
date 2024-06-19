import React from 'react'
import classes from "./Title.module.css" //css em scoped

const Title = () => {
  return (
    <div><h1 className={classes.title}>meu titulo</h1></div>
  )
}

export default Title