const defaultData = {}

export const selectedPostReducer = (postData = defaultData, action) => {
    switch(action.type){
        case "SELECTED_POST":
			var tempDataArray = postData;
			tempDataArray = action.data ? action.data : postData;
			return tempDataArray;
		
        default: return postData;
    }
}