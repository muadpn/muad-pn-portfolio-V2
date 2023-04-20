import React from 'react'

const SectionTitle = ({title, direction}) => {
  return (
    <div className={`flex ${direction} group transition items-center gap-10`}>
    <h1 className="text-3xl group font-medium group-hover:text-blue text-white transition">
      {" "}
      <span className="text-blue group-hover:text-white">#</span>{title}
    </h1>
    <div className="w-[60%] h-[2px] transition bg-white group-hover:bg-blue" />
  </div>
  )
}

export default SectionTitle
