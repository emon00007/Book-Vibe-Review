import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
// console.log(id)
if(!exists){
    toast('yess')
    bookReadDetails.push(id);
    localStorage.setItem('book-read',JSON.stringify(bookReadDetails))
}
else{toast.error('nooo')}
}
export{getBookReadDetails,saveBookReadDetails}