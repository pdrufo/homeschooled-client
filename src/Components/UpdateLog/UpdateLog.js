import React from "react";
import "./UpdateLog.css";

export default function UpdateLog() {
  return (
    <div>
      <header>
        <h1>Edit Log</h1>
      </header>
      <section>
        <form id="add-log">
          <div class="form-section">
            <label for="date">Date</label>
            <input type="text" name="date" placeholder="5/7/2020" required />
          </div>
          <div class="form-section">
            <label for="student">Student Name</label>
            <input type="text" name="student" required />
          </div>
          <div class="form-section">
            <label for="english">English</label>
            <textarea name="english" rows="5" required></textarea>
          </div>
          <div class="form-section">
            <label for="math">Math</label>
            <textarea name="english" rows="5" required></textarea>
          </div>
          <div class="form-section">
            <label for="specialty">Specialty</label>
            <textarea name="english" rows="5" required></textarea>
          </div>
          <div class="form-section">
            <label for="notes">Notes</label>
            <textarea name="notes" rows="5" required></textarea>
          </div>
          <div class="form-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </section>
    </div>
  );
}
