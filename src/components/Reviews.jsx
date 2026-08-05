import { useEffect, useState } from "react";
import "./Reviews.css";
import { supabase } from "../supabaseClient";

function Reviews({ setShowReviewForm }) {

  const [reviews, setReviews] = useState([]);
  const [openCard, setOpenCard] = useState(null);

  useEffect(() => {
    getReviews();
  }, []);


  async function getReviews() {

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("status", "approved")
.order("display_order", { ascending: true });

    if (error) {

      console.log(error);

    } else {

      setReviews(data);

    }

  }


  function openReviewForm() {

    setShowReviewForm(true);

    setTimeout(() => {

      document
        .getElementById("leave-review")
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }, 200);

  }


  return (

<section className="reviews" id="reviews">


<div className="reviews-header">

<p className="section-tag">
TESTIMONIALS
</p>


<h2>
Trusted by
<br />
Creators & Brands
</h2>


<p className="reviews-desc">
Genuine feedback from clients who trusted EDITOR SETH with their content.
</p>


</div>


<div
className="reviews-grid"
id="review-list"
>


{
reviews.length === 0 ? (

<p className="no-review">
No testimonials available yet.
</p>


) : (


reviews.map((item,index)=>{


const hasProfiles =
item.instagram ||
item.youtube ||
item.linkedin ||
item.facebook ||
item.website ||
item.social_link;



return(


<div
className="review-card"
key={item.id}
>


{
item.client_image && (

<img
src={item.client_image}
alt={item.name}
className="review-image"
/>

)

}


<div className="review-head">


<div>


<h3>
{item.name}
</h3>


<p className="verified">
{item.client_role}
</p>


</div>


<div className="stars">
{"★".repeat(item.rating)}
</div>


</div>


<p className="review-text">
“{item.review}”
</p>

{
hasProfiles && (

<div className="profiles-box">


<button

className="profiles-toggle"

onClick={()=>{

setOpenCard(
openCard===index
? null
: index
);

}}

>

<span>
📁 Profiles
</span>


<span>
{openCard===index ? "−" : "+"}
</span>


</button>



{
openCard===index && (


<div className="profiles-list">


{
item.instagram && (

<a
href={item.instagram}
target="_blank"
rel="noreferrer"
>

Instagram

</a>

)

}



{
item.youtube && (

<a
href={item.youtube}
target="_blank"
rel="noreferrer"
>

YouTube

</a>

)

}




{
item.linkedin && (

<a
href={item.linkedin}
target="_blank"
rel="noreferrer"
>

LinkedIn

</a>

)

}




{
item.facebook && (

<a
href={item.facebook}
target="_blank"
rel="noreferrer"
>

Facebook

</a>

)

}




{
item.website && (

<a
href={item.website}
target="_blank"
rel="noreferrer"
>

Website

</a>

)

}




{
!item.instagram &&
!item.youtube &&
!item.linkedin &&
!item.facebook &&
!item.website &&
item.social_link && (

<a
href={item.social_link}
target="_blank"
rel="noreferrer"
>

Visit Profile

</a>

)

}



</div>

)

}



</div>

)

}



</div>


);

})

)

}


</div>



<div className="review-bottom">


<p>
Already worked with EDITOR SETH?
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