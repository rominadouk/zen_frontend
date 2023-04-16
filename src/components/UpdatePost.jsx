import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './UpdatePost.css'

const UpdatePost = (props) => {
    // const [postData,setPostData] = useState({...journal});
    const [postData, setPostData] = useState({})
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
        axios.put(`https://zen-backend-e3xl.onrender.com/updatepost/${id}`, editedPost)
            .then((response)=> {
            navigate('/journals')
        })
        .catch((err)=> {
            console.log(err)
        })
    };

    useEffect(() => {
        axios.get(`https://zen-backend-e3xl.onrender.com/journals/${id}`)
        .then((response)=>{
            setPostData(response.data)
        }).catch((err)=> {
            console.log(err)
        })
    }, [id]);

    return ( 
        <>
        <h1 className="text-center mt-4">Edit Post</h1>
        <Container className="update-container mt-4">
            <Row>
                <Col>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='title'>Title:</label>
                        <input className='form-control update-input' type='text' name='title' value={postData.title} onChange={handleChange} />
                        <br/>
                        <br/>
                        <label htmlFor='post'>Post:</label>
                        <input className='form-control update-input' type='text' name='post' value={postData.post} onChange={handleChange} />
                        <br/>
                        <br/>
                        <label htmlFor='tags'>Tags:</label>
                        <input className='form-control update-input' type='text' name='tags' value={postData.tags} onChange={handleChange} />
                        <br />
                        <br />
                        <input type='submit' value='Update' />
                    </form>
                    <br/>
                    <button onClick={()=> navigate('/journals')}>Back</button>
                </Col>
            </Row>
        </Container>

        </>
     );
}
 
export default UpdatePost;