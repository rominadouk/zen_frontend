import axios from 'axios'
import './JournalViews.css'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PlusCircleFill } from 'react-bootstrap-icons'
import { TrashFill } from 'react-bootstrap-icons'

const JournalViews = () => {
    const [displayPost, setDisplayPost] = useState('');
    const [journals, setJournals] = useState([]);
    const navigate = useNavigate();

    // const toggleDisplayPost = (postId) => {
    //     if (postId === displayedPostId) {
    //         setDisplayPost('')
    //     } else {
    //         setDisplayPost(postId)
    //     }
    // };

    //NAVIGATING VIA REACT-ROUTER-DOM
    const createPost = (event) => {
        navigate('/newpost')
    };
    //GET ALL POSTS
    const getPosts = () => {
        axios.get('http://localhost:4000/journals').then((response)=> {
            setJournals(response.data)
            console.log(response.data)
        })
    };
    //DELETE ROUTE
    const handleDelete = (journals) => {
        axios.delete(`http://localhost:4000/journals/${journals._id}`).then((response)=> {
            getPosts();
            window.location.reload()
        })
    };

    useEffect(() => {
        getPosts()
       }, []);

    return ( 
        <>
            <div>
                <h1 className='text-center mt-3 lg-mt-5'>My Entries</h1>
                <Container className='text-center my-4'>
                    <button className='new-post-button btn btn-dark p-2' onClick={createPost}> <PlusCircleFill /> Add New Post</button>
                </Container>
                {journals.map((journal)=> {
                    const isDisplayed = journal._id === displayPost;
                    //Working with timestamped date to month and day format
                    const date = new Date(journal.createdAt);
                    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year:'numeric'});

                    return (
                        <div key={journal._id}>
                            <Container className='post-container text-center mt-4'>
                                <Row className='post-row'>
                                    <Col className='title-column col-7'>
                                        <p>Title: {journal.title}</p>
                                    </Col>
                                    <Col className='date-column col-5'>
                                        <p>Date: {formattedDate}</p>
                                    </Col>
                                    <Col className='post-column col-12'>
                                        {isDisplayed ? ( 
                                            <>
                                            <p>Post: {journal.post}</p>
                                            <p>Tags: [{journal.tags}]</p>
                                            <button className='btn btn-danger mb-1' onClick={(event) => {
                                            handleDelete(journal)}}> <TrashFill /> Delete</button>
                                            <button className='btn btn-dark mb-1'> Edit </button>
                                            </>
                                        ) : (
                                            <button className='post-button' onClick={() => setDisplayPost(journal._id)}>View More</button>
                                        )}
                                    </Col> 
                                    {/* : <button className='post-button' onClick={toggleDisplayPost}>View More</button> */}
                                </Row>
                            </Container>
                        </div>
                    )
                })}
            </div>
        </>
     );
}
 
export default JournalViews;