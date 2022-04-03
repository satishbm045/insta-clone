export const addAllPost = (apiData) => {
    return {
        type: "ADD_ALL_POST",
        data: apiData
    }
}

export const slectedPost = (postData) => {
	return {
		type: "SELECTED_POST",
		data: postData
	}
}

export const likedPost = (postData) => {
	return {
		type: "LIKE_ADD",
		data: postData
	}
}

export const sortThePost = (flag) => {
	return {
		type: "SORT_POST",
		data: flag
	}
}
