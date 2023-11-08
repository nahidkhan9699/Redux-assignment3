export const colourReducer=(state={color:"lavender"},action)=>{
    switch(action.type){
        case "COLORS":
            return{
                ...state,
                color:action.payload
            }
            break;
            default:
                return state;
    }
    return state;
}