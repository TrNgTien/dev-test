import React from 'react'

const DropDownUsed = () => {
    return (
      <div className="wrapper-dropdown__cars-radio">
        <div>
          <input type="radio" id="new-car-authorised" name="used-car" />
          <label htmlFor="new-car-authorised">
            New Car ( Authorised Dealer )
          </label>
        </div>
        <div>
          <input type="radio" id="new-car-parallel" name="used-car" />
          <label htmlFor="new-car-parallel">
            New Car ( Parallel Importer )
          </label>
        </div>
        <div>
          <input type="radio" id="used-car" name="used-car" />
          <label htmlFor="used-car">Used Cars</label>
        </div>
      </div>
    );
  };

export default DropDownUsed