import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import './PreviewModel.css';
import blackLike from '../../assets/blackLike.png';
import redLike from '../../assets/redLike.png';
import {likedPost} from '../../redux/action/action';

const PreviewModel = () => {
	const [post, setPost] = useState({});
	const dispatch = useDispatch();
	let selectedImg = useSelector((state) => state && state.selectedPostReducer ? state.selectedPostReducer : {});
	const addLike = () => {
		let imgData = post;
		if(!imgData.isLiked){
			dispatch(likedPost(imgData));
			setPost({...post, isLiked:true, likes: post.likes+1});
		}else{
			dispatch(likedPost(imgData));
			setPost({...post, isLiked:false, likes: post.likes-1});
		}
	}
	useEffect(()=>{
		setPost(selectedImg);
	},[selectedImg])
	return (
		<div className="prevewBox">
			<div className="heading">Preview</div>
			{Object.keys(selectedImg).length > 0 ? 
				(
					<div className="imageBox">
						<div className="image"><img src={post.Image}/></div>
						<div className="data">
							<div className="likes" onClick={()=>addLike()}><img className="likeBox" src={ post.isLiked && post.isLiked ? redLike : blackLike} />{post.likes}</div>
							<div className="timestamp">{post.timestamp}</div>
						</div>
					</div>
				)
				: 
				(
					<>Select the post to preview</>
				)
			}
		</div>
	)
}

export default PreviewModel;
