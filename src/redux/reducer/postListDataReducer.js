const defaultData = []

export const postListDataReducer = (postData = defaultData, action) => {
    switch(action.type){
        case "ADD_ALL_POST":
			var tempDataArray = postData;
			tempDataArray = action.data ? action.data : postData;
			tempDataArray.map((ele,index)=>{
				ele.index = index
				ele.isLiked = false
			})
			return tempDataArray;

		case "LIKE_ADD":
			var tempDataArray = [...postData];
			tempDataArray[action.data.index] = { ...tempDataArray[action.data.index], isLiked: !tempDataArray[action.data.index].isLiked };
			if(tempDataArray[action.data.index].isLiked){
				tempDataArray[action.data.index] = { ...tempDataArray[action.data.index], likes: tempDataArray[action.data.index].likes+1 };
			}else if(tempDataArray[action.data.index].isLiked == false){
				tempDataArray[action.data.index] = { ...tempDataArray[action.data.index], likes: tempDataArray[action.data.index].likes-1 };
			}
			return tempDataArray;
		
        default: return postData;
    }
}