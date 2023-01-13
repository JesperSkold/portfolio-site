import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import colors from "../theme/colors"
export const Seo = ({ title, description, image }) => {
  const { title: defaultTitle, description: defaultDescription, defaultImage, siteUrl } = useSiteMetadata()
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || `${siteUrl}${defaultImage}`,
  }
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="theme-color" content={`${colors.primary}`} />
    </>
  )
}