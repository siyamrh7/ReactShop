
const InitState={
    regauth:false,
    logauth:false,
    token:null
}
const Authenticate=(state=InitState,action)=>{
    switch (action.type) {
        case "Auth":
            return {...state,token: localStorage.getItem("token")}
    case "REGISTER":
        return {...state,regauth:true}
        case "CLOSEREG":
            return {...state,regauth:false}
            case "LOGIN":
                return {...state,logauth:true}
                case "CLOSELOG":
                    return {...state,logauth:false}
        default:
           
           return state
    }
}
export default Authenticate