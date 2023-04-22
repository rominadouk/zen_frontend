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
    };

    const handleCreate = (newJournal) => {
        axios.post('https://zen-backend-e3xl.onrender.com/journals', newJournal).then((response)=> {
            console.log(response)
        });
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(newJournal)
        navigate('/journals')
    };



    return ( 

        <>
        <Container className='input-container mt-4'>
            <Row className=''>
                <Col className=''>
                <h1 className='mt-4'> New Journal Entry</h1>
                <form onSubmit={handleSubmit}>
                    <label className='mb-1 mt-3' htmlFor='title'>Title</label>
                    <input className='form-control create-input mb-3'name='title' placeholder='Name your journal entry' onChange={handleChange}/>
                    <label className='mb-1' htmlFor='post' name='post'>Entry</label>
                    <textarea className='form-control create-input mb-3' name='post' placeholder='Enter the details' onChange={handleChange}/>
                    <label  className='mb-1' htmlFor='tags' >Tags</label>
                    <input className='form-control create-input mb-4' name='tags' placeholder='Separate tags using a comma (,)' onChange={handleChange}/>
                    <input className='btn emotion-button' type='submit'/>
                </form>
                <button className='btn btn-dark mt-4' onClick={()=> navigate('/journals')}>Cancel</button>
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default JournalPost;