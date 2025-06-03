import React, { useState } from "react";
import "./Reservation.css";

type BookingDetails = {
  people: number | string;
  date: string;
  time: string;
  name?: string;
  phone?: string;
};

const ReservationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState<BookingDetails>({
    people: "",
    date: "",
    time: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };


  const handleConfirm = () => {
    alert("Reservation confirmed!, you can check the console for details.");
    console.log("Booking Details:", details);
  };

  return (
    <div className="booking-container">
      {step === 1 && (
        <form
            onSubmit={(e) => {
            e.preventDefault();
            setStep(2);
            }}
        >
          <h2>Book a table</h2>
          <p>This is where you'll add the details of your booking</p>

          <div className="input-box first-batch">
            <label><em>People</em></label>
            <input
              type="number"
              name="people"
              value={details.people}
              min={1}
              placeholder="Enter number of people"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-box first-batch">
            <label><em>Date</em></label>
            <input
              type="date"
              name="date"
              value={details.date}
              onChange={handleInputChange}
                required
            />
          </div>

          <div className="input-box first-batch">
            <label><em>Time</em></label>
            <input
              type="time"
              name="time"
              value={details.time}
              onChange={handleInputChange}
                required
            />
          </div>

          <button>
            Book now
          </button>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleConfirm();
          }}
            >
          <h2>Contact details</h2>
          <div className="summary-box">
            You are making a reservation for{" "}
            <strong>{details.people} person(s)</strong>, on{" "}
            <strong>{details.date}</strong> at <strong>{details.time}</strong>
          </div>

          <div className="input-box second-batch">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={details.name || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-box second-batch">
            <label>Phone number</label>
            <input
              type="tel"
              name="phone"
              value={details.phone || ""}
              onChange={handleInputChange}
                required
            />
          </div>

          <button>
            Confirm reservation
          </button>
        </form>
      )}
    </div>
  );
};

export default ReservationForm;
