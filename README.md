
# Welcome to my book list app!

@Todo

## App diagram

## Project Notes

The following paragraphs are an attempt to explain the architecture of the app. The main purpose of this is to facilitate my understanding of what I'm building.

### App.js 

The first piece of state in this app is, of course, the books. Each book is an object and gets stored inside the books array. This state is used throughout all child components so it makes sense for it to be placed here, inside the main component.

The createBook function is responsible for adding objects inside the books array. The reason why I use destructuring instead of just pushing objects into the array is because of an optimization that react does behind the scenes. Basically, by using `useState([])`, you create a reference in memory to the 'books' array. If you were to just push objects into that array, you wouldn't see anything on the screen because react thinks that the array hasn't changed at all. Next, we need to pass this function as a prop to the BookCreate Component. *Continue to the BookCreate component.*


### BookCreate.js 

The next piece of state that we have in this app is the book's title. This title gets updated every single time a user changes the content of the text input (notice `onChange={handleChange}`). Because react re-renders the component every time it detects a change, we need to set the value of the input to be the title. 

Whenever a user submits a book, we need to do 3 things:
1. Prevent the default behaviour of the form. (By default, form submission trigger a post request.)
2. 

### BookList.js

### BookShow.js

### BookEdit.js
