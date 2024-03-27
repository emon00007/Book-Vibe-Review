import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className='grid grid-cols-5 bg-orange-50 rounded-2xl m-2 items-center  py-10'>
            <div className='col-span-3 pl-20'>
                <h1 className="font-bold text-7xl">Books to freshen up your bookshelf</h1>
                <button className="bg-[#23BE0A] p-5 mt-10 rounded-lg font-medium text-2xl text-white justify-start"><Link to="/ListedBooks" >View The List</Link></button>
            </div>
            <div className="text-center">
                <img src="https://i.ibb.co/Tv6hCCs/pngwing-1.png" alt="" />
                </div>
            
        </div>
    );
};

export default Banner;