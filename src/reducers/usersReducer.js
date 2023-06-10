export const usersReducer =(state = [], action) => {
  switch (action.type) {
    case 'addUser':
      return [
        ...state,
        { 
          ...action.payload,
          id: new Date().getTime(),
        }
      ]
    
    case 'updateUser':
      return state.map((item) => {
        return (item.id === action.payload.id)
          ? action.payload
          : item
        
      })
      // return [
      //   ...state.filter((item)=> item.id !== action.payload.id ), 
      //   action.payload
      // ]
    
    case 'removeUser':
      return state.filter((item)=> item.id !== action.payload )
      
  
    default:
      return state
  }
}