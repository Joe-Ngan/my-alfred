

import React, { useEffect, useReducer } from "react";
import { reducer, initState } from "./reducer/reducer";
import appContext from "./context/appContext";

import Interface from "./components/Interface";
import Loading from "./components/Loading";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if(state.input){
      handleTranslate();
    }
  }, [state.input, state.targetLanguage])

  function handleChangeInputLanguage(name) {
    dispatch({ type: "SETORIGIN", payload: name });
  }
  function handleChangeOutputLanguage(name, code) {
    dispatch({ type: "SETTARGET", payload: { name, code } });
  }
  function handleChangeInput(name) {
    console.log(name);
    dispatch({ type: "INPUT", payload: name })
  }
  function handleSwitchLanguage() {
    dispatch({ type: "SWITCH" });
  }
  function handleTranslate() {
    const auth_key = process.env.REACT_APP_DEEPL_API_KEY;
    const baseUrl = "https://api-free.deepl.com/v2/translate?";
    const target_lang = state.target_lang;
    const url = baseUrl + "auth_key=" + auth_key + "&text=" + state.input + "&target_lang=" + target_lang;
    console.log(url);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .catch(() => Promise.reject({ error: 'networkError' }))
      .then((res) => res.json())
      .then((res) => {
        const data = res.translations[0];
        const detect_lang = data.detected_source_language;
        const text = data.text;

        dispatch({ type: "OUTPUT", payload: text });
        if (!detect_lang) {
          dispatch({ type: "SETORIGINBYCODE", payload: detect_lang });
        }
      });
  }
  return (
    <appContext.Provider value={state}>
      <div className="App w-full min-h-screen py-20 px-0 md:px-20 lg:px-40 bg-[url('https://picsum.photos/1600/900')]">
        {state.isLoading && <Loading />}
        <Interface 
        handleChangeInput={handleChangeInput} 
        handleChangeInputLanguage={handleChangeInputLanguage} 
        handleChangeOutputLanguage={handleChangeOutputLanguage} 
        handleTranslate={handleTranslate} 
        handleSwitchLanguage={handleSwitchLanguage}
        />
      </div>
    </appContext.Provider>
  );

}

export default App;
