const Pagination = ({page, lastPage, setPage}) =>{

    const scrollTop = () =>{
        scrollTo({
            behavior :"smooth",
            top : 0
        })
    }

    const handleNextPage = () =>{
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () =>{
        setPage((prevState) => prevState - 1)
        scrollTop()

    }

    return(
        <div className="gap-4 flex justify-center">
            <button className="text-yellow-500 hover:text-white underline transition-all text-2xl" onClick={handlePrevPage}>Prev</button>
            <div className="text-yellow-500  text-2xl">{page} of {lastPage} </div>
            <button className="text-yellow-500 hover:text-white underline transition-all text-2xl" onClick={handleNextPage}>Next</button>
        </div>
    )
}


export default Pagination