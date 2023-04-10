import axios from 'axios'
import './JournalViews.css'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const JournalViews = () => {
    const [journals, setJournals] = useState([])
    const navigate = useNavigate()

    const createPost = (event) => {
        navigate('/newpost')

    }
    const getPosts = () => {
        axios.get('http://localhost:4000/journals').then((response)=> {
            setJournals(response.data)
            console.log(response.data)
        })
    }

    useEffect(() => {
        getPosts()
       }, [])

    return ( 
        <>
        <div>
        <h1 className='text-center mt-3 lg-mt-5'>My Entries</h1>
        {journals.map((journal)=> {
            return (
                <Container className='post-container text-center mt-3'>
                    <Row className=''>
                        <Col className=''>
                            <p>Title: {journal.title}</p>
                        </Col>
                        <Col>
                        <p>Date</p>
                        </Col>
                        <Col>
                        <p>Post: {journal.post}  Tags: [{journal.tags}]</p>
                        </Col>
                    </Row>
                </Container>
            )
        })}
        </div>
        <Container className='text-center mt-4'>
        <button className='new-post-button' onClick={createPost}>Add New Post</button>
        </Container>
        </>
     );
}
 
export default JournalViews;