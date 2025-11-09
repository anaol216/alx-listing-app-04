import axios from "axios";
import { useState } from "react";
// Import the necessary types from React
import React, { FormEvent, ChangeEvent } from "react"; 

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added type for error state

  // ✅ FIX: Explicitly type 'e' as React.FormEvent (or FormEvent from the import)
  const handleSubmit = async (e: FormEvent) => { 
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (error) {
      // ✅ Note: This now works because setError is typed as string | null
      setError("Failed to submit booking."); 
    } finally {
      setLoading(false);
    }
  };

  // 💡 Recommendation: Add a handleChange function and type it too!
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // This function will handle updating formData based on input changes
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Example of how to connect the state */}
      <input 
        type="text" 
        name="firstName" 
        value={formData.firstName}
        onChange={handleChange} // Use the new handler
        placeholder="First Name"
      />
      {/* Other form fields */}
      
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}