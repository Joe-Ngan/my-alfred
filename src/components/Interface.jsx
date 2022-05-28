import React from 'react'
import InputBox from './InputBox'
import OutputBox from './OutputBox'
import SideBar from './SideBar'
import SwitchIcon from './SwitchIcon'

const Interface = ({handleChangeInput, handleChangeInputLanguage, handleChangeOutputLanguage, handleTranslate, handleSwitchLanguage}) => {
  
  return (
    <div className="flex flex-row h-[60vh] rounded-sm">
        <SideBar/>
        <div className="flex flex-row bg-gray-100 w-full rounded-r-lg">
            <InputBox handleChangeInput={handleChangeInput} handleChangeInputLanguage={handleChangeInputLanguage} handleTranslate={handleTranslate}/>
            {/* <SwitchIcon handleSwitchLanguage={handleSwitchLanguage}/> */}
            <OutputBox handleChangeOutputLanguage={handleChangeOutputLanguage}/>
        </div>
    </div>
  )
}

export default Interface