// import { useEffect, useRef, useState } from "react";

import DatePicker from "./datePicker";


const BookingEngine = () => {
  return (
    <>
      <div className="container-fluid row booking py-3 d-flex justify-content-evenly align-items-center">
        <div className="d-none d-md-flex col-md-2">
          <label htmlFor="checkin">BOOK YOUR STAY</label>
        </div>
        <div className="d-none d-md-flex col-md-4">
          <DatePicker />
        </div>
        <div className="d-none d-md-flex col-md-4">
          <DatePicker />
        </div>
        <div className="col-12 col-md-2">
          <button className="btn container-fluid btn-dark rounded-0">
            BOOK NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingEngine;
