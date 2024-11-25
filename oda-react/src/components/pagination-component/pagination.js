

function Pagination({ results, page ,setPage}) {

    const handleNext = () => {

        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevious = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };

    return (
        <div style={{ marginTop: "20px", alignItems: "center", display: results && results.items.length > 0 ? "block" : "none" }}>
            <button
                onClick={handlePrevious}
                disabled={page === 1}
                style={{
                    padding: "10px",
                    marginRight: "10px",
                    cursor: page === 1 ? "not-allowed" : "pointer",
                }}
            >
                Previous
            </button>
            <span>Page: {page}</span>
            <button
                onClick={handleNext}
                disabled={results?.hasMoreItem === false}
                style={{ padding: "10px", marginLeft: "10px" }}
            >
                Next
            </button>
        </div>

    );
}

export default Pagination;
