import axios from 'axios'
import { useState } from 'react'


const JournalPost = () => {

    let emptyPost = {
        title: '',
        post: '',
        tags: ''
    }
const [journal, setJournal] = useState(emptyPost);


    // const getPosts = () => {
    //         const journals = axios.get('http://localhost:3000/journals').then((response)=> {
    //             setJournal(response.data)
    //         })

    // }

    const handleChange = (event) => {
        setJournal({...journal, [event.target.name]: event.target.value})
    }

    const handleCreate = (newJournal) => {
        axios.post('http://localhost:4000/journals', newJournal).then((response)=> {
            console.log(response)
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(journal)
    }



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
        
        </>
     );
}
 
export default JournalPost;