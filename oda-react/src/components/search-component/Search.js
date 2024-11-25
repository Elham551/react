import React, { useState, useEffect } from "react";
import '../../css/SearchStyle.css';
import Table from '../tables-component/Table';
import Pagination from '../pagination-component/pagination';


function App() {
  const [query, setQuery] = useState(""); // Search bar value
  const [results, setResults] = useState(null); // API results
  const [loading, setLoading] = useState(false); // Loading indicator
  const [error, setError] = useState(null); // Error handling
  const [page, setPage] = useState(1); // Current page


  const inputChanged = (value) => {
    setQuery(value);
    setPage(1);
  }


  const handleSearch = () => {
    setLoading(true);
    setError(null);

    // API call
    fetch(`http://localhost:8000/api/products?product=${query}&page=${page}`)//https://localhost:7043/api/products?product=${query}&page=${page}
      .then((response) => {
        if (!response.ok) {
          throw new Error("API Error");
        }
        return response.json();
      })
      .then((data) => {
        setResults(data); // Set the entire Root object
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };


  useEffect(() => {
    if (query) {
      handleSearch();
    }
    else {
      setResults({ items: [] });
    }
  }, [query, page, setPage]);



  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Product Search</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => inputChanged(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button id="search" onClick={handleSearch} style={{ padding: "10px" }} disabled={query.length < 1}>
        Search
      </button>


      {/* Loading Indicator */}
      {loading && <p style={{ position: "absolute", zIndex: "1000" }}>Loading...</p>}

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Results */}
      {results && <Table results={results} />}

      {/* Pagination Controls */}
      {results && <Pagination results={results} page={page} setPage={setPage} />}


    </div>

  );
}


export default App;
