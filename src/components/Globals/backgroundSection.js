
import React from 'react'
import BackgroundImage from 'gatsby-background-image'
export default function backgroundSection({img, styleClass, title, children}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
        <h1 className="title text-white text-uppercase text-center disply-4 font-weight-bold">{title}</h1>
        {children}
    </BackgroundImage>
  )
}


backgroundSection.defaultProps = {
    title: "default title",
    styleClass: "default-background"

}