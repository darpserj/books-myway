import BookEdit from './BookEdit'
import {useState} from 'react'

export default function BookShow({book, onDelete, onEdit}){

    const [edit, setEdit] = useState(false)

    const handleEdit = () =>{
        setEdit(!edit)
    }

    const handleDelete= ()=>{
        onDelete(book.id)        
    }

    const handleSubmit = (id, newTitle) =>{
        setEdit(false)
        onEdit(id, newTitle)
    }

    let content = <div className="break-words font-bold">{book.title}</div>
    if(edit){
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }

    return(
    <div>
        <div className="border-2 rounded-md flex p-4 items-center mb-4 md:mr-4 flex-wrap ">
            <div className="h-24 w-24 rounded-md border-2 mr-4"></div>
            <div className="break-words font-bold">{content}</div>
            <div className="">
                <button className='ml-4 mb-2 hover:text-emerald-900 transition-colors block' onClick={handleDelete}>
                    <i className="fa-solid fa-circle-xmark text-4xl"></i>
                </button>
                <button className='ml-4 hover:text-emerald-900 transition-colors block' onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square text-4xl"></i>
                </button>
            </div>

        </div>
    </div>
        
    )
}