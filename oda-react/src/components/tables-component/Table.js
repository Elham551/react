

function Table({ results }) {

  const rowItems = results.items;
  

  if (!results || rowItems.length === 0) { return ( <div className="no-results-message"> <p>No Product match</p> </div> ); }

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr className="table-header">
            <th>Image</th>
            <th>Name</th>
            <th>Gross Price</th>
            <th>Gross Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {rowItems.map((item, index) => (
            <tr className="table-row" key={index}>
              {/* Image column */}
              <td>
                <img style={{ width: "50px", height: "50px", objectFit: "contain" }}  src={item.thumbnail.url} alt={item.name} />
              </td>
              {/* Name column */}
              <td>{item.name}</td>
              {/* Gross Price column */}
              <td>{item.gross_price}</td>
              {/* Gross Unit Price column */}
              <td>{item.gross_unit_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
   
    </div>
  );
}

export default Table;
