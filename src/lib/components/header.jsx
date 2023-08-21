import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = ({ headers, onSorting }) => {
  const [sortingField, setSortingField] = useState("firstName");
  const [sortingOrder, setSortingOrder] = useState("asc");

  const onSortingChange = (field) => {
    const order =
      field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  };

  return (
    <thead>
      <tr>
        {headers.map(({ name, field }) => (
          <th
            key={name}
            onClick={() => onSortingChange(field)}
            className="sorting"
          >
            <span className="display">
              {name}

              {sortingField && sortingField === field ? (
                <FontAwesomeIcon
                  className="icons-by-default"
                  icon={sortingOrder === "asc" ? faCaretUp : faCaretDown}
                  size="xs"
                />
              ) : (
                <span className="icons-by-default">
                  <FontAwesomeIcon icon={faCaretUp} size="xs" />
                  <FontAwesomeIcon icon={faCaretDown} size="xs" />
                </span>
              )}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
