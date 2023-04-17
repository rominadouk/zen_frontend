import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './UpdatePost.css'

const UpdatePost = (props) => {
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
        
        <Container className="update-container mt-4">
            <Row>
                <Col>
                    <h1 className="mt-4">Edit Journal Entry</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="mb-1 mt-3" htmlFor='title'>Title</label>
                        <input className='form-control update-input mb-3' type='text' name='title' value={postData.title} onChange={handleChange} />
                        <label className="mb-1" htmlFor='post'>Entry</label>
                        <textarea className='form-control update-input mb-3' type='text' name='post' value={postData.post} onChange={handleChange} />
                        <label className="mb-1" htmlFor='tags'>Tags</label>
                        <input className='form-control update-input mb-4' type='text' name='tags' value={postData.tags} onChange={handleChange} />
                        <input className='btn emotion-button' type='submit' value='Update' />
                    </form>
                    <button className='btn btn-dark mt-4' onClick={()=> navigate('/journals')}>Cancel</button>
                </Col>
            </Row>
        </Container>

        </>
     );
}
 
export default UpdatePost;