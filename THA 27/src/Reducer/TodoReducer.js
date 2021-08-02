
const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_Todo":
      return [...state, action.payload];
    case "Remove_Todo":
      return state.filter((item,index) => index !== action.payload);
      case "Task_Done":
        state.map((item,index)=>{
          if(index==action.payload){
            item.status=!item.status
          }
        })
      return state;
    default:
      return state;
  }
};

export default TodoReducer;
