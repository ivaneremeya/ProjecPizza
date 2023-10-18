import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="173" cy="57" r="2" /> 
    <circle cx="154" cy="125" r="2" /> 
    <rect x="83" y="341" rx="0" ry="0" width="1" height="0" /> 
    <rect x="99" y="330" rx="0" ry="0" width="2" height="0" /> 
    <rect x="99" y="340" rx="0" ry="0" width="2" height="2" /> 
    <rect x="99" y="322" rx="0" ry="0" width="0" height="2" /> 
    <rect x="0" y="274" rx="10" ry="10" width="260" height="25" /> 
    <rect x="87" y="398" rx="0" ry="0" width="1" height="1" /> 
    <rect x="0" y="320" rx="11" ry="11" width="256" height="77" /> 
    <rect x="5" y="413" rx="10" ry="10" width="95" height="30" /> 
    <circle cx="43" cy="30" r="4" /> 
    <circle cx="132" cy="133" r="126" /> 
    <rect x="125" y="414" rx="10" ry="10" width="131" height="37" />
  </ContentLoader>
)

export default Skeleton;