export const usersReducer =(state = [], action) => {
  switch (action.type) {
    case 'addUser':
      
      return [
        ...state,
        { 
          id: new Date().getTime(),
          ...action.payload}]
    
    case 'removeUser':
      return state.filter((item)=> item.id !== action.payload )
      
  
    default:
      return state
  }
}