import React from 'react'

const Tab = ({ service }: { service: string }) => {
  return (
    <div className="pl-3 pr-3 pb-2 pt-2 mb-3 border border-white rounded-lg flex items-center gap-2 hover:cursor-pointer hover:border-accent-yellow group/tab">
      <div className="text-sm leading-4">{service}</div>
      <div className="w-4 h-4 text-white text-3xl flex justify-center items-center group-hover/tab:text-accent-yellow">
        &times;
      </div>
    </div>
  )
}

export default Tab
