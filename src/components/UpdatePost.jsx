import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";

const UpdatePost = (props) => {
    const [journal, setJournal] = useState({});
    const [postData,setPostData] = useState({...journal});
    const { id } = useParams();
    const navigate = useNavigate();


    //Changes data in the object directly.
    const handleChange = (event) => {
        setPostData({...postData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        handleUpdate(postData)
    }
    const handleUpdate = (editedPost) => {
        axios.put(`http://localhost:4000/updatepost/${props.editedPost.id}`,
        editedPost).then((response)=> {
            navigate('/journals')
        })
        .catch((err)=> {
            console.log(err)
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:4000/journals/${id}`).then((response)=>{
            setJournal(response.data);
            setPostData(response.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [id]);

    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title:</label>
            <input type='text' name='title' value={journal.title} onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor='post'>Post:</label>
            <input type='text' name='post' value={journal.post} onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor='tags'>Title:</label>
            <input type='text' name='tags' value={journal.tags} onChange={handleChange} />
            <br />
            <br />
            <input type='submit' value='Update' />
        </form>
        </>
     );
}
 
export default UpdatePost;