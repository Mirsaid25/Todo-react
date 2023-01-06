export function todoReducer(state, action){
    switch(action.type){
        case "added":{
            return{
                arr: [...state.arr, action.payload]
            }
        }

        case "DELETE":{
            return{
                arr: state.arr.filter(item=> item.id !== action.id)
            }
        }
        case "Change":{
            return{
                arr: state.arr.filter(item=> {
                    if(item.id === action.id){
                        item.name = action.payload.name
                        item.note = action.payload.note
                    }
                    return item
                })
            }
        }
    }
    
}