import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./AdminReviews.css";


function AdminReviews() {

  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetchReviews();
  }, []);



  async function fetchReviews(){

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at",{ascending:false});


    if(error){
      console.log(error);
    }
    else{
      setReviews(data);
    }

  }




  async function updateStatus(id,status){

    const {error} = await supabase
      .from("reviews")
      .update({status})
      .eq("id",id);


    if(error){
      console.log(error);
    }
    else{
      fetchReviews();
    }

  }




  async function deleteReview(id){

    const confirmDelete = window.confirm(
      "Delete this review?"
    );


    if(!confirmDelete) return;



    const {error} = await supabase
      .from("reviews")
      .delete()
      .eq("id",id);



    if(error){
      console.log(error);
    }
    else{
      fetchReviews();
    }

  }




  return (

    <section className="admin-reviews">


      <h1>
        Review Admin Panel
      </h1>



      {
        reviews.length === 0 && (
          <p>
            No reviews found.
          </p>
        )
      }



      {
        reviews.map((item)=>(


          <div
            key={item.id}
            className="admin-card"
          >


            <h3>
              {item.name}
            </h3>


            <p>
              ⭐ {item.rating}
            </p>


            <p>
              {item.review}
            </p>


            <p>
              Status: {item.status}
            </p>



            <button
              onClick={() =>
                updateStatus(item.id,"approved")
              }
            >
              Approve
            </button>



            <button
              onClick={() =>
                updateStatus(item.id,"rejected")
              }
            >
              Reject
            </button>



            <button
              onClick={() =>
                deleteReview(item.id)
              }
            >
              Delete
            </button>



          </div>


        ))
      }



    </section>

  );

}


export default AdminReviews;