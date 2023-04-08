const JournalPost = () => {
    return ( 
        <>
        <form>
            <label htmlFor='title' name='title'>Title</label>
            <input placeholder='title'/>
            <br/>
            <br/>
            <label htmlFor='post' name='post'>Post:</label>
            <input placeholder='post'/>
            <br/>
            <br/>
            <label htmlFor='tags' name='tags'>Tags:</label>
            <input placeholder='tags'/>
        </form>
        
        </>
     );
}
 
export default JournalPost;