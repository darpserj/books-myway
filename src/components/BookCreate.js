import { useState } from "react"

export default function BookCreate({onCreate}){

    const [title, setTitle] = useState('')

    const handleChange = (e) =>{
        setTitle(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        onCreate(title)
        setTitle('')
    }

    return(
        <>
            <i className="fa-solid fa-book mr-2 text-2xl"></i>
            <h2 className="text-3xl font-semibold inline">Enter a book name</h2>
            <form action="" className="flex mt-4" onSubmit={handleSubmit}>
                <input type="text" className="focus:outline-cyan-500 grow text-black px-4" value={title} onChange={handleChange}/>
                <button className="border-2 px-4 py-2 ml-4 rounded-md hover:bg-white hover:text-emerald-600 transition-colors">Submit</button>
            </form>
        </>
    )
}