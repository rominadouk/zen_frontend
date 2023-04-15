import axios from 'axios'
import './JournalViews.css'
import { useState, useEffect } from 'react'
import { Container, Row, Col, DropdownButton, Dropdown, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PlusCircleFill } from 'react-bootstrap-icons'
import { TrashFill } from 'react-bootstrap-icons'

const JournalViews = () => {
    const [displayPost, setDisplayPost] = useState('');
    const [journals, setJournals] = useState([]);
    const [filterType, setFilterType] = useState('title')
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();

    //NAVIGATING VIA REACT-ROUTER-DOM
    const createPost = (event) => {
        navigate('/newpost')
    };
    //GET ALL POSTS
    const getPosts = () => {
        axios.get('https://zen-backend-e3xl.onrender.com/journals').then((response)=> {
            setJournals(response.data)
            console.log(response.data)
        })
    };
    //DELETE ROUTE
    const handleDelete = (journals) => {
        axios.delete(`https://zen-backend-e3xl.onrender.com/journals/${journals._id}`).then((response)=> {
            getPosts();
            window.location.reload()
        })
    };

    useEffect(() => {
        getPosts()
       }, []);

       //SEARCH BAR FEATURE -- TAGS IS AN ARRAY: USE .SOME 
       const searchedJournals = journals.filter((journal) => {
        const date = new Date(journal.createdAt)
        const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})
        if (journal.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return journal
        } else if (formattedDate.includes(searchTerm)) {
            return journal
        } else if (journal.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
        )) {
            return journal
        }
       });

    return ( 
        <>
            <div>
                <h1 className='text-center mt-3 lg-mt-5'>My Entries</h1>
                <Container className='text-center my-4'>
                    <button className='new-post-button btn btn-dark p-2' onClick={createPost}> <PlusCircleFill /> Add New Post</button>
                </Container>
                <Container className='filter-container'>
                    <Row>
                        {/* <Col>
                            <DropdownButton title={`Filter by ${filterType}`}>
                                <Dropdown.Item onClick={()=> setFilterType('title')}>Title</Dropdown.Item>
                                <Dropdown.Item onClick={() => setFilterType('date')}>Date</Dropdown.Item>
                                <Dropdown.Item onClick={()=> setFilterType('tags')}>Tags</Dropdown.Item>
                            </DropdownButton>
                        </Col> */}
                        <Col>
                            <Form.Control type='text' placeholder='Search By Title, Date, or Tags' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
                        </Col>
                    </Row>
                </Container>
                {searchedJournals.map((journal)=> {
                    const isDisplayed = journal._id === displayPost;
                    //Working with timestamped date to month and day format
                    const date = new Date(journal.createdAt);
                    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year:'numeric'});

                    return (
                        <div className='' key={journal._id}>
                            <Container className='post-container text-center mt-4 mb-3'>
                                <Row className='post-row'>
                                    <Col className='title-column col-7'>
                                        <p className='mt-2'>{journal.title}</p>
                                    </Col>
                                    <Col className='date-column col-5'>
                                        <p className='mt-2'>{formattedDate}</p>
                                    </Col>
                                    <Col className='post-column col-12'>
                                        {isDisplayed ? ( 
                                            <>
                                            <p className='mt-3' id='post-text'>{journal.post}</p>
                                            <p id='tags-text'>Tags: [{journal.tags}]</p>
                                            <button className='btn btn-danger mb-1' onClick={(event) => {
                                            handleDelete(journal)}}> <TrashFill /> Delete</button>
                                            <button className='btn btn-dark mb-1' onClick={() => {
                                                navigate(`/updatepost/${journal._id}`)}}> Edit </button>

                                            </>
                                        ) : (
                                            <button className='post-button my-2' onClick={() => setDisplayPost(journal._id)}>View More</button>
                                        )}
                                    </Col> 
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