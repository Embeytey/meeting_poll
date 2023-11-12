import { useEffect, useState } from "react";
const TableMeeting = () => {
  const data = [
    {
      partecipants: "Fabio Cangeri",
      month: "November",
      day: "1",
    },
    {
      partecipants: "Tsion",
      month: "October",
      day: "31",
    },
    {
      partecipants: "Degefom",
      month: "November",
      day: "15",
    },
    {
      partecipants: "Hilary",
      month: "November",
      day: "22",
    },
  ];

  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleColumnSelection = (columnName) => {
    if (selectedColumns.includes(columnName)) {
      setSelectedColumns(selectedColumns.filter((col) => col !== columnName));
    } else {
      setSelectedColumns([...selectedColumns, columnName]);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((column, index) => (
              <th key={index}>
                {index === 0 ? (
                  <label>
                    <h4>Partecipants</h4>
                  </label>
                ) : (
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedColumns.includes(column)}
                      onChange={() => handleColumnSelection(column)}
                    />
                    <p>{data.month}</p>
                    <p>{data.day}</p>
                    {column}
                  </label>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((column, colIndex) => (
                <td key={colIndex}>
                  {selectedColumns.includes(column) ? (
                    <img
                      src={row[column]}
                      alt={column}
                      style={{ maxWidth: "50px" }}
                    />
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMeeting;
