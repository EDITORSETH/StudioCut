import { useState } from "react";
import { supabase } from "../supabaseClient";
import "./ReviewForm.css";

function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    review: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  async function submitReview(e) {
    e.preventDefault();

    if (loading) return;

    setMessage("");

    if (formData.review.trim().length < 20) {
      setMessage("❌ Review must be at least 20 characters.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("reviews")
      .insert([
        {
          name: formData.name.trim(),
          rating: Number(formData.rating),
          review: formData.review.trim(),
          status: "pending"
        }
      ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
      return;
    }

    setMessage(
      "✅ Thank you! Your review has been submitted successfully. It will appear after approval."
    );

    setFormData({
      name: "",
      rating: 5,
      review: ""
    });
  }

  return (
    <section className="review-form-section" id="leave-review">
      <div className="review-form-header">
        <p className="section-tag">
          CLIENT FEEDBACK
        </p>

        <h2>Share Your Experience</h2>

        <p>
          Rate your experience and write a short review. Every review is
          manually verified before being published.
        </p>
      </div>

      <form className="review-form" onSubmit={submitReview}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          maxLength={50}
          value={formData.name}
          onChange={handleChange}
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value="5">★★★★★ (Excellent)</option>
          <option value="4">★★★★☆ (Very Good)</option>
          <option value="3">★★★☆☆ (Good)</option>
          <option value="2">★★☆☆☆ (Fair)</option>
          <option value="1">★☆☆☆☆ (Poor)</option>
        </select>

        <textarea
          name="review"
          placeholder="Tell us about your experience..."
          required
          rows={6}
          minLength={20}
          maxLength={500}
          value={formData.review}
          onChange={handleChange}
        />

        <button
          className="submit-review-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>

        {message && (
          <p className="review-message">
            {message}
          </p>
        )}
      </form>
    </section>
  );
}

export default ReviewForm;