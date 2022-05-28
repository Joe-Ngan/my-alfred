import React from 'react'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
const SwitchIcon = ({handleSwitchLanguage}) => {
  return (
      <div className="bg-gray-200 flex w-0 mt-[13vh] item-start content-center align-middle ">
          <div className="h-10 w-10 p-2 hover:bg-blue-200 hover:cursor-pointer -translate-x-5 translate-y-20 text-white z-10 drop-shadow-md bg-gray-400 rounded-lg" onClick={handleSwitchLanguage}><CompareArrowsIcon/></div>
      </div>
  )
}

export default SwitchIcon