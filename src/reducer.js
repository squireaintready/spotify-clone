export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQCempixdscYmLJrCX3FnjabIkk9Gi87QZKzMqXtsA0sk-jCH4IfXCV-ydvWySu0Eej9DF2dodaVXd7UngBhtNO16iBGOp7d1d2PfIY3gyzyM8QieVujdT13-ZXBDopskz8SfpqY5HnjnXOTL2soRrB-FXK8',
}

const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;    
    }
}

export default reducer