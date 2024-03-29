import axios from "axios";
import React,{useState} from "react";
import "../css/comments.css";

const AddCommentForm = ({articleName,setArticleInfo})=>{
    const [username,setUserName] = useState("");
    const [comment,setComment] = useState("");

    const addComment = async() =>{
        const result = await axios.post(`http://localhost:8000/api/all-articles/${articleName}/comment`,{readerName:username,comment:comment});
        console.log(result.data);
        const updatedArticle = result.data;
        setArticleInfo(updatedArticle);
     setUserName("");
     setComment("");
    }
     return <div>
        <h3>Add a Comment</h3>
        <label>
            Name:
            <input type="text" value={username} onChange={(event)=>{setUserName(event.target.value)}}></input>
        </label>
        <br></br>
        <label>
            Comment:
            <textarea rows="5"cols="50" value={comment} onChange={(event)=>setComment(event.target.value)}></textarea>
        </label>
        <br></br>
        <button style={{backgroundColor:"#3c6e71"}}id="comments-button"onClick={addComment}>Add Comment</button>
        <br></br>
    </div>
}
export default AddCommentForm;