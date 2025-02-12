import { useEffect, useRef, useState } from 'react';

/* global flatpickr */

const DatePicker = () => {
    const datePickerRef = useRef(null);
    const [formattedDate, setFormattedDate] = useState(false);

    useEffect(() => {
        // Get today's date in the desired format
        const today = new Date();
        const options = { day: '2-digit', month: '2-digit',  year: 'numeric' };
        setFormattedDate(today.toLocaleDateString('en-ID', options));

        // Initialize Flatpickr
        flatpickr(datePickerRef.current, {
            dateFormat: "d-m-Y", // Format of the date
            enableTime: false, // Set to true if you want to enable time selection
            // Other options can be added here
        });
    }, []);

    return (
        <>
            <input type="text" ref={datePickerRef} 
              id="start-date"
              name="cin"
              placeholder={`${formattedDate}`}
              className="form-control rounded-0 mx-0"
              required/>
        </>
    );
};

export default DatePicker;