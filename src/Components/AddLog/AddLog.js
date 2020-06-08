import React from "react";
import "./AddLog.css";

export default function AddLog() {
  return (
    <div>
      <header>
        <h1>Add Log</h1>
      </header>
      <section>
        <form id="add-log">
          <div className="form-section">
            <label htmlFor="date">Date</label>
            <input type="text" name="date" placeholder="5/7/2020" required />
          </div>
          <div className="form-section">
            <label htmlFor="student">Student Name</label>
            <input type="text" name="student" required />
          </div>
          <div className="form-section">
            <label htmlFor="english">English</label>
            <textarea name="english" rows="5" required></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="math">Math</label>
            <textarea name="english" rows="5" required></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="specialty">Specialty</label>
            <textarea name="english" rows="5" required></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="notes">Notes</label>
            <textarea name="notes" rows="5" required></textarea>
          </div>
          <div className="form-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </section>
    </div>
  );
}
