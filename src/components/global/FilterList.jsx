import React from "react";
import Button from "../ui/Button";

const FilterList = () => {
  return (
    <ul className="filter-list">
      <li>
        <Button name={"1D"} />
      </li>
      <li className="active">
        <Button name={"7D"} />
      </li>
      <li>
        <Button name={"14D"} />
      </li>
      <li>
        <Button name={"1M"} />
      </li>
      <li>
        <Button name={"6M"} />
      </li>
      <li>
        <Button name={"1Y"} />
      </li>
      <li>
        <Button name={"4Y"} />
      </li>
    </ul>
  );
};

export default FilterList;
