import {useState} from 'react'

export default function BookEdit({book,onSubmit}){

    const [title,setTitle] = useState(book.title)

    const handleTitleChange = (e) =>{
        e.preventDefault()
        setTitle(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        onSubmit(book.id,title)
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title" className="block ">title</label>
            <input type="text" className="block text-black font-normal" id="title" onChange={handleTitleChange} value={title}/>
            <button className="block grow border-2 px-4 py-2  rounded-md hover:bg-white hover:text-emerald-600 transition-colors" >Submit</button>
        </form>
    )
}