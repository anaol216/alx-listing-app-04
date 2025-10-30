import React, { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-10">
        {/* 📝 Booking Form */}
        <section>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Booking Form</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-semibold mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div className="flex-1">
                <label className="block font-semibold mb-1">Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-2"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Confirm Booking
            </button>
          </form>
        </section>

        {/* 💳 Order Summary */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Order Summary</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Name:</strong> {formData.name || "—"}</p>
            <p><strong>Email:</strong> {formData.email || "—"}</p>
            <p><strong>Date:</strong> {formData.date || "—"}</p>
            <p><strong>Guests:</strong> {formData.guests}</p>
            <p><strong>Total Price:</strong> ${formData.guests * 50}</p>
          </div>
        </section>

        {/* 🚫 Cancellation Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-red-600">Cancellation Policy</h2>
          <p className="text-gray-700">
            Cancellations made within 24 hours of booking will receive a full refund.  
            After that, a 50% cancellation fee applies. No refunds will be given for same-day cancellations.
          </p>
        </section>

        {/* 📜 Ground Rules */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-green-700">Ground Rules</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Please arrive on time for your scheduled booking.</li>
            <li>No smoking or littering on the premises.</li>
            <li>Be respectful to other guests and staff.</li>
            <li>Follow all posted safety and hygiene guidelines.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
