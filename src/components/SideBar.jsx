import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
const SideBar = () => {

    
  return (
    <div className="hidden md:flex flex-col bg-blue-300/25 border-blue-300/30 rounded-l-lg backdrop-blur-sm">
        <div className="flex flex-row text-transparent pt-2 hover:text-gray-600 hover:cursor-pointer">
            <div className="bg-red-300 rounded-full flex w-[15px] h-[15px] items-center justify-center ml-1 mt-1">
                <CloseIcon fontSize="small" className=""/>
            </div>
            <div className="bg-yellow-300 rounded-full flex w-[15px] h-[15px] items-center justify-center ml-1 mt-1">
                <RemoveIcon fontSize="small" className="w-[30px] h-[30px]"/>
            </div>
            <div className="bg-green-300 rounded-full flex rotate-45 w-[15px] h-[15px] items-center justify-center ml-1 mt-1 mr-1">
                <UnfoldMoreIcon fontSize="small" className="w-[30px] h-[30px]"/>
            </div>
        </div>
        
    </div>
  )
}

export default SideBar