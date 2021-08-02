const addItem = (item) => {
  return {
    type: "ADD_Todo",
    payload: item,
  };
};

const removeItem = (id) => {
  return {
    type: "Remove_Todo",
    payload: id,
  };
};

const taskDone=(id)=>{
  return {
    type: "Task_Done",
    payload: id,
  };
}

export { addItem, removeItem,taskDone };
