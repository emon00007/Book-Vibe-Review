const getBookReadDetails =()=>{
    const bookReadDetails = localStorage.getItem('book-read')
    if (bookReadDetails){
        return JSON.parse(bookReadDetails)
    }
    return[]
}

const saveBookReadDetails = id =>{
const bookReadDetails=getBookReadDetails()
const exists = bookReadDetails.find(book=> book === id)

if(!exists){
    bookReadDetails.push(id);
    localStorage.setItem('book-read',JSON.stringify(bookReadDetails))
}

}
export{getBookReadDetails,saveBookReadDetails}