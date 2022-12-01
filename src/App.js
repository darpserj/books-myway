import BookCreate from "./components/BookCreate"
import BookList from './components/BookList'
import "./index.css"
import { useState } from 'react'

function App (){

    const [books, setBooks] = useState([])

    const editBookById = (id, title) =>{
        const updatedBooks = books.map((book) =>{
            if(book.id === id){
                return {...book, title:title}
            }
            return book
        })
        setBooks(updatedBooks)
    }

    const deleteBookById = (id) =>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id
        })
        setBooks(updatedBooks)
    }

    const createBook= (title) =>{
        if(title){
            const updatedBooks= [
                ...books,
                {id: Math.floor(Math.random()*99999), title:title}
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