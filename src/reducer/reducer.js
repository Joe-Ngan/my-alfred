export const initState = {
    isError: false,
	isLoading: false,
    originLanguage: "English(USA)",
    origin_lang:"EN-US",
    targetLanguage: "Chinese",
    target_lang:"ZH",
    input:"",
    output:"",
    langaugeList: {
        "BG" : "Bulgarian", 
        "CS" : "Czech", 
        "DA" : "Danish", 
        "DE" : "German", 
        "EL" : "Greek", 
        "EN-GB" : "English(GBR)", 
        "EN-US" : "English(USA)", 
        "ES" : "Spanish", 
        "ET" : "Estonian", 
        "FI" : "Finnish", 
        "FR" : "French", 
        "HU" : "Hungarian", 
        "ID" : "Indonesian", 
        "IT" : "Italian", 
        "JA" : "Japanese", 
        "LT" : "Lithuanian", 
        "LV" : "Latvian", 
        "NL" : "Dutch", 
        "PL" : "Polish", 
        "PT-PT" : "Portuguese", 
        "PT-BR" : "Portuguese(BR)", 
        "RO" : "Romanian", 
        "RU" : "Russian", 
        "SK" : "Slovak", 
        "SL" : "Slovenian", 
        "SV" : "Swedish", 
        "TR" : "Turkish", 
        "ZH" : "Chinese"
    }
}

export function reducer(state, action){
    switch (action.type) {
        case 'INPUT':
            console.log(action.payload)
            return{ ...state, input: action.payload }
        case 'OUTPUT':
            return{ ...state, output: action.payload }
        case 'SETORIGIN':
            console.log(action.payload)
            return{ ...state, originLanguage: action.payload }
        case 'SETORIGINBYCODE':
            return{ ...state, originLanguage: state.langaugeList[action.payload]}
        case 'SETTARGET':
            return{ ...state, 
                targetLanguage: action.payload.name,
                target_lang: action.payload.code
             }
        case 'LOADING':
            return{ ...state, isLoading: true }
        case 'UNLOADING':
            return{ ...state, isLoading: false }
        case 'SWITCH':
            const ori = state.originLanguage;
            const oriCode = state.origin_lang;
            const tar = state.targetLanguage;
            const tarCode = state.target_lang;
            if(ori || tar || oriCode || tarCode)return;
            return{ ...state, originLanguage:tar, targetLanguage:ori,  origin_lang: tarCode, target_lang: oriCode}
        default:
            break;
    }
}