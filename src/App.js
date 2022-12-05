import BookCreate from "./components/BookCreate"
import BookList from './components/BookList'
import "./index.css"
import { useState, useEffect } from 'react'
import axios from "axios"

function App (){

    const [books, setBooks] = useState([])

    const fetchBooks = async()=>{
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    useEffect(()=>{
        fetchBooks()
    }, [])

    const editBookById = async(id, title) =>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title:title
        })
        console.log(response)
        const updatedBooks = books.map((book) =>{
            if(book.id === id){
                return {...book, ...response.data}
            }
            return book
        })
        setBooks(updatedBooks)
    }

    const deleteBookById = async(id) =>{

        await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book)=>{
            return book.id !== id
        })
        setBooks(updatedBooks)
    }

    const createBook = async(title) => {


        const response = await axios.post('http://localhost:3001/books',{
            title
        })
        
        if(title){
            const updatedBooks= [
                ...books,
                response.data
            ]
            setBooks(updatedBooks)
        } 
    }

    return (
        <div className="bg-gradient-to-b from-emerald-300 to-emerald-900 flex flex-col items-center justify-center min-h-screen text-white font-['Atkinson_Hyperlegible']">
            <div className="border-2 rounded-md px-4 py-4 mb-8 ">
                <BookCreate onCreate={createBook}/>
    
            </div>
            <BookList onEdit={editBookById} onDelete={deleteBookById} books={books}/>
        </div>
    )
}

export default App