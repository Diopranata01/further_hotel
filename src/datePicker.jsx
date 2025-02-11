import { useEffect, useRef } from 'react';

/* global flatpickr */

const DatePicker = () => {
    const datePickerRef = useRef(null);

    useEffect(() => {
        // Initialize Flatpickr
        flatpickr(datePickerRef.current, {
            dateFormat: "Y-m-d", // Format of the date
            enableTime: false, // Set to true if you want to enable time selection
            // Other options can be added here
        });
    }, []);

    return (
        <>
            <input type="text" ref={datePickerRef} 
              id="start-date"
              name="cin"
              placeholder="07-02-2025"
              className="form-control rounded-0 mx-0"
              required/>
        </>
    );
};

export default DatePicker;