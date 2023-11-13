import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonLoaderAds = (props) => (
  <ContentLoader 
    speed={2}
    width={465}
    height={465}
    viewBox="0 0 465 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="13" rx="0" ry="0" width="270" height="270" /> 
    <rect x="0" y="310" rx="0" ry="0" width="198" height="40" /> 
    <rect x="0" y="370" rx="0" ry="0" width="130" height="35" /> 
    <rect x="0" y="430" rx="0" ry="0" width="87" height="20" />
  </ContentLoader>
)

export default SkeletonLoaderAds