const Banner = () => {
    return (
        <div className='grid grid-cols-5 bg-orange-50 rounded-2xl m-2 items-center text-center py-10'>
            <div className='col-span-3'>
                <h1 className="font-bold text-7xl">Books to freshen up your bookshelf</h1>
                <button>View The List</button>
            </div>
            <div>
                <img src="https://i.ibb.co/Tv6hCCs/pngwing-1.png" alt="" />
                </div>
            
        </div>
    );
};

export default Banner;