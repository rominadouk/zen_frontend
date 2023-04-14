import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './JournalPost.css'


const JournalPost = () => {

    let emptyPost = {
        title: '',
        post: '',
        tags: ''
    }

const [newJournal, setNewJournal] = useState(emptyPost);



    const handleChange = (event) => {
        setNewJournal({...newJournal, [event.target.name]: event.target.value})
    }

    const handleCreate = (newJournal) => {
        axios.post('https://zen-backend-e3xl.onrender/journals', newJournal).then((response)=> {
            console.log(response)
        });
    }
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(newJournal)
        navigate('/journals')
    }



    return ( 

        <>
        <Container className='input-container mt-4'>
            <Row className=''>
                <Col className=''>
                <h1> Create New Post</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title</label>
                    <input className='form-control create-input'name='title' placeholder='title' onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor='post' name='post'>Post:</label>
                    <textarea className='form-control create-input' name='post' placeholder='post' onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label htmlFor='tags' >Tags:</label>
                    <input className='form-control create-input' name='tags' placeholder='tags' onChange={handleChange}/>
                    <br/>
                    <br/>
                    <input type='submit'/>
                </form>
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default JournalPost;