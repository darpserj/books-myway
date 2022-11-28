import BookCreate from "./components/BookCreate"
import BookList from './components/BookList'
import "./index.css"
import { useState } from 'react'

function App (){

    // Books state is used throughout all child components so it makes sense to be placed here.

    const [books, setBooks] = useState([])

   
   
    // createBook is the main function responsible for adding books into the books array. 
      

    const createBook= (title) =>{
        if(title){
            const updatedBooks= [
                ...books,
                {id: Math.floor(Math.random()*9999), title:title}
            ]
            setBooks(updatedBooks)
        }

    }

    console.log(books)

    return (
        <div className="bg-gradient-to-b from-emerald-300 to-emerald-900 flex flex-col items-center justify-center min-h-screen text-white font-['Atkinson_Hyperlegible']">
            <div className="border-2 rounded-md px-4 py-4 mb-8 ">

            {/* // createBook is passed as a prop to the bookCreate component in order for it to trigger on form submission. */}

                <BookCreate onCreate={createBook}/>
    
            </div>
            <BookList/>
        </div>
    )
}

export default App