import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import './ImageList.css';
import blackLike from '../../assets/blackLike.png';
import redLike from '../../assets/redLike.png';
import {slectedPost, sortThePost} from '../../redux/action/action';

const ImageList = () => {
	const [sortCheckBox, setSortCheckBox] = useState(false);
	const dispatch = useDispatch();

	let imgData = useSelector((state) => state && state.postListDataReducer  ? state.postListDataReducer : []);

	const checkBoxOnChange = (e) => {
		setSortCheckBox(e.target.checked);
		dispatch(sortThePost(e.target.checked));
	}
	
	return (
		<div className="imageList">
			<div className="data">
				<div className="postHeading">Posts</div>
				<div>Sort by likes <input className="checkBox" type={"checkbox"} value={sortCheckBox} onChange={(e)=>checkBoxOnChange(e)}/></div>
			</div>
			{imgData && imgData.length > 0 && imgData.map((ele,index)=> {
				return (
					<div className="eachImageBox" key={index}>
						<div className="image" onClick={()=>dispatch(slectedPost(ele))}><img src={ele.Image}/></div>
						<div className="data">
							<div className="likes"><img className="likeBox" src={ ele.isLiked && ele.isLiked ? redLike : blackLike} />{ele.likes}</div>
							<div className="timestamp">{ele.timestamp}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default ImageList;
