import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", email: "", phone: "" });
    alert("Form submitted!");
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 400, width: "100%", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>Connect with me:</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </div>
          <button type="submit" style={{ width: "100%", padding: 10, background: "#6c2eb7", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600 }}>
            Submit
          </button>
        </form>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 24 }}>
          <a href="mailto:vangurisandeepyadav@gmail.com" style={{ color: "#6c2eb7", fontSize: 28 }} title="Email">
            <MdEmail />
          </a>
          <a href="https://www.linkedin.com/in/sandeep-kumar-vanguri" style={{ color: "#6c2eb7", fontSize: 28 }} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
