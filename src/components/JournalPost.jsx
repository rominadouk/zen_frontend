import axios from 'axios'
import { useState } from 'react'


const JournalPost = () => {

    let emptyPost = {
        title: '',
        post: '',
        tags: ''
    }
const [journal, setJournal] = useState(emptyPost);


    const getPosts = () => {
            const journals = axios.get('http://localhost:3000/journals').then((response)=> {
                setJournal(response.data)
            })

    }

    const handleChange = (event) => {
        setJournal({...journal, [event.target.name]: event.target.value})
    }

    const handleCreate = (newJournal) => {
        axios.post('http://localhost:3000/journals', newJournal).then((response)=> {
            console.log(response)
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await handleCreate(journal)
    }



    return ( 

        <>
        <h1> Create New Post</h1>
        <form>
            <label htmlFor='title'>Title</label>
            <input name='title' placeholder='title'/>
            <br/>
            <br/>
            <label htmlFor='post' name='post'>Post:</label>
            <input name='post' placeholder='post'/>
            <br/>
            <br/>
            <label htmlFor='tags' >Tags:</label>
            <input name='tags' placeholder='tags'/>
            <br/>
            <input type='submit'/>
        </form>
        
        </>
     );
}
 
export default JournalPost;