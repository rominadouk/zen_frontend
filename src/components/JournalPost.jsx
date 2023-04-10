import axios from 'axios'
import { useState, useEffect } from 'react'


const JournalPost = () => {

    const [journals, setJournals] = useState([])

    let emptyPost = {
        title: '',
        post: '',
        tags: ''
    }

const [newJournal, setNewJournal] = useState(emptyPost);


    const getPosts = () => {
            axios.get('http://localhost:4000/journals').then((response)=> {
                setJournals(response.data)
                console.log(response.data)
            })

    }

    const handleChange = (event) => {
        setNewJournal({...newJournal, [event.target.name]: event.target.value})
    }

    const handleCreate = (newJournal) => {
        axios.post('http://localhost:4000/journals', newJournal).then((response)=> {
            console.log(response)
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(newJournal)
    }

useEffect(() => {
 getPosts()
}, [])

    return ( 

        <>
        <h1> Create New Post</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input name='title' placeholder='title' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='post' name='post'>Post:</label>
            <input name='post' placeholder='post' onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor='tags' >Tags:</label>
            <input name='tags' placeholder='tags' onChange={handleChange}/>
            <br/>
            <br/>
            <input type='submit'/>
        </form>
        <div>
        <h1>Previous Posts</h1>
        {journals.map((journal)=> {
            return (
                <section>
                    <p>Title: {journal.title}</p>
                    <p>Post: {journal.post}</p>
                    <p>Tags: [{journal.tags}]</p>
                </section>
            )
        })}
        </div>
        </>
     );
}
 
export default JournalPost;