import { useState } from "react";
import { supabase } from "../supabaseClient";
import "./ReviewForm.css";

function ReviewForm() {

  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    review: "",
    social_link: "",
  });


  const [message, setMessage] = useState("");



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const submitReview = async (e) => {

    e.preventDefault();


    const { error } = await supabase
      .from("reviews")
      .insert([
        {
          name: formData.name,
          rating: Number(formData.rating),
          review: formData.review,
          social_link: formData.social_link,
          status: "pending",
        },
      ]);



    if(error){

      console.log(error);
      setMessage("❌ Something went wrong.");

      return;

    }



    setMessage(
      "✅ Thank you! Your review has been submitted for approval."
    );


    setFormData({
      name:"",
      rating:5,
      review:"",
      social_link:"",
    });


  };



  return (

    <section 
      className="review-form-section"
      id="leave-review"
    >


      <div className="review-form-header">


        <p className="section-tag">
          CLIENT FEEDBACK
        </p>


        <h2>
          Love the Edit?
        </h2>


        <p>
          If we've worked together, I'd love to hear your honest feedback.
        </p>


      </div>





      <form 
        onSubmit={submitReview} 
        className="review-form"
      >


        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />



        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >

          <option value="5">
            ⭐⭐⭐⭐⭐ (5)
          </option>

          <option value="4">
            ⭐⭐⭐⭐ (4)
          </option>

          <option value="3">
            ⭐⭐⭐ (3)
          </option>

          <option value="2">
            ⭐⭐ (2)
          </option>

          <option value="1">
            ⭐ (1)
          </option>

        </select>




        <textarea
          name="review"
          placeholder="Write your review..."
          value={formData.review}
          onChange={handleChange}
          required
        />




        <input
          type="url"
          name="social_link"
          placeholder="Instagram / YouTube / LinkedIn Profile (optional)"
          value={formData.social_link}
          onChange={handleChange}
        />




        <button 
          type="submit"
          className="submit-review-btn"
        >
          Submit Review
        </button>



        {
          message && (

            <p className="review-message">
              {message}
            </p>

          )
        }



      </form>


    </section>

  );

}


export default ReviewForm;