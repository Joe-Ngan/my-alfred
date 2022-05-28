import React, { useContext, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import appContext from "../context/appContext";
const InputBox = ({handleChangeInput, handleChangeInputLanguage, handleTranslate}) => {
  const state = useContext(appContext);
  const langaugeList = state.langaugeList;
  const originLanguage = state.originLanguage;

  const [listOpen, setListOpen] = useState(false)
  function handleClickLangaugeList(){
    setListOpen(!listOpen);
  }
  function handleInput(name){
    handleChangeInput(name);
  }

  function handleSwitchTargetLanguage(lang){
    handleChangeInputLanguage(lang);
    handleClickLangaugeList();
  }
  
  return (
    <div className="bg-gray-200 h-full w-1/2 p-4 items-center flex flex-col  justify-center relative">
      <div className="flex rounded-md border-2  justify-between border-blue-300 w-full py-4 my-2 px-4 text-blue-400 hover:cursor-pointer hover:text-blue-300"
      onClick={()=>{handleClickLangaugeList()}}
      >
          <div className="flex">
          {originLanguage}
          </div>
          <div className="flex">
            {!listOpen?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}
          </div>
        </div>
        <div className={`grid grid-cols-2 md:grid-cols-4 p-4 absolute w-full bg-gray-200 top-1/3 rounded-sm text-sm gap-1 ${!listOpen?'hidden':''}`}>
        {Object.values(langaugeList).map((lang)=>(
          <div key={lang} 
          onClick={()=>{handleSwitchTargetLanguage(lang)}}
          className="flex bg-gray-300 text-blue-500 pl-2 h-8 rounded-sm  items-center hover:cursor-pointer hover:bg-blue-50 hover:text-gray-800">
              {lang}
          </div>
        ))}
      </div>
      <textarea
        className="w-full p-4 justify-start items-start align-top resize-none rounded-md"
        name="Text1"
        cols="5"
        rows="9"
        placeholder="Your Text Here"
        onChange={(e)=>{handleInput(e.target.value)}}
      />
    </div>
  );
};

export default InputBox;
