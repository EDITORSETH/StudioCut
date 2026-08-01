import { useEffect, useState } from "react";
import "./Reviews.css";
import { supabase } from "../supabaseClient";

function Reviews({ setShowReviewForm }) {

  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    getReviews();
  }, []);



  async function getReviews(){

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("status","approved")
      .order("created_at",{ascending:false});


    if(error){
      console.log(error);
    }
    else{
      setReviews(data);
    }

  }



  function openReviewForm(){

    setShowReviewForm(true);

    setTimeout(()=>{

      document
      .getElementById("leave-review")
      ?.scrollIntoView({
        behavior:"smooth"
      });

    },200);

  }




  return (

    <section className="reviews" id="reviews">


      <div className="reviews-header">


        <p className="section-tag">
          CLIENT REVIEWS
        </p>


        <h2>
          Creators Trust
          <br/>
          Our Editing
        </h2>


        <p className="reviews-desc">
          Real reviews from creators and businesses we've worked with.
        </p>



        <button
          className="view-review-btn"
          onClick={()=>{
            document
            .getElementById("review-list")
            ?.scrollIntoView({
              behavior:"smooth"
            });
          }}
        >
          View Reviews
        </button>



      </div>





      <div 
        className="reviews-grid"
        id="review-list"
      >


        {
          reviews.length === 0 ? (

            <p className="no-review">
              No reviews yet.
            </p>

          ) : (

            reviews.map((item)=>(

              <div
                className="review-card"
                key={item.id}
              >


                <div className="review-top">

                  <div className="review-user">

                    <h3>
                      {item.name}
                    </h3>

                  </div>

                </div>




                <div className="stars">
                  {"★".repeat(item.rating)}
                </div>




                <p className="review-text">
                  "{item.review}"
                </p>




                {
                  item.social_link && (

                    <div className="review-socials">

                      <a
                        href={item.social_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Profile
                      </a>

                    </div>

                  )
                }



              </div>

            ))

          )
        }



      </div>





      <div className="review-bottom">


        <p>
          Worked with me?
        </p>


        <button
          className="bottom-review-btn"
          onClick={openReviewForm}
        >
          Leave a Review
        </button>


      </div>



    </section>

  );

}


export default Reviews;