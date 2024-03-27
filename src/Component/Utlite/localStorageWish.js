const getBookWishDetails =()=>{
//     const bookWishDetails = localStorage.getItem('book-wish')
//     if (bookWishDetails){
//         return JSON.parse(bookWishDetails)
//     }
//     return[]
// }
// const saveBookWishDetails = id =>{
//     const bookWishDetails=getBookWishDetails()
//     const exists = bookWishDetails.find(book=> book === id)
//     if(!exists){
        
//         bookWishDetails.push(id);
//         localStorage.setItem('book-Wish',JSON.stringify(bookWishDetails))
//     }
// 
const bookWishDetails = localStorage.getItem('book-Wish')
if (bookWishDetails){
    return JSON.parse(bookWishDetails)
}
return[]
}

const saveBookWishDetails = id =>{
const bookWishDetails=getBookWishDetails()
const exists = bookWishDetails.find(book=> book === id)

if(!exists){
bookWishDetails.push(id);
localStorage.setItem('book-Wish',JSON.stringify(bookWishDetails))
}


}

export{getBookWishDetails,saveBookWishDetails}