import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./AdminReviews.css";


function AdminReviews() {

  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetchReviews();
  }, []);



  async function fetchReviews() {

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("display_order", { ascending: true });


    if(error){
      console.log("Fetch Error:", error);
      return;
    }


    setReviews(data || []);

  }



  async function uploadImage(file){

    if(!file) return null;


    const fileName = `${Date.now()}-${file.name}`;


    const { error } = await supabase.storage
      .from("client-images")
      .upload(fileName, file);


    if(error){

      console.log("Upload Error:", error.message);
      alert(error.message);
      return null;

    }


    const { data } = supabase.storage
      .from("client-images")
      .getPublicUrl(fileName);


    return data.publicUrl;

  }





  async function saveDetails(item){

    let imageUrl = item.client_image || "";


    if(item.newImage){

      imageUrl = await uploadImage(item.newImage);

    }



    const { error } = await supabase
      .from("reviews")
      .update({

        client_image:imageUrl,

        review:item.review,

        client_role:item.client_role,

        display_order:item.display_order,

        company_name:item.company_name,

        designation:item.designation,

        instagram:item.instagram,

        youtube:item.youtube,

        linkedin:item.linkedin,

        facebook:item.facebook,

        website:item.website

      })
      .eq("id",item.id);



    if(error){

      console.log("Save Error:", error);
      alert(error.message);
      return;

    }



    alert("Details Saved");

    fetchReviews();

  }


    function updateField(id,field,value){

    setReviews(prev =>

      prev.map(item =>

        item.id === id

        ? {
            ...item,
            [field]:value
          }

        :

          item

      )

    );

  }






  async function updateStatus(id,status){


    const { error } = await supabase
      .from("reviews")
      .update({
        status:status
      })
      .eq("id",id);



    if(error){

      alert(error.message);
      return;

    }


    alert("Status Updated Successfully");

    fetchReviews();

  }





  async function deleteReview(id){


    if(!window.confirm("Delete this review?")) return;



    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id",id);



    if(error){

      alert(error.message);
      return;

    }



    fetchReviews();

  }






return (

<section className="admin-reviews">


<h1>
Review Admin Panel
</h1>



{
reviews.map(item => (


<div className="admin-card" key={item.id}>


<h3>
{item.name}
</h3>


<p>
⭐ {item.rating}
</p>



<textarea
placeholder="Edit Client Review"
value={item.review || ""}
onChange={(e)=>

updateField(
item.id,
"review",
e.target.value
)

}
/>



<input
placeholder="Client Role (Founder of XYZ)"
value={item.client_role || ""}
onChange={(e)=>

updateField(
item.id,
"client_role",
e.target.value
)

}
/>



<input
type="number"
placeholder="Display Order"
value={item.display_order || 0}
onChange={(e)=>

updateField(
item.id,
"display_order",
Number(e.target.value)
)

}
/>





<input
type="file"
accept="image/*"
onChange={(e)=>

updateField(
item.id,
"newImage",
e.target.files[0]
)

}
/>





<input
placeholder="Company Name"
value={item.company_name || ""}
onChange={(e)=>

updateField(
item.id,
"company_name",
e.target.value
)

}
/>





<input
placeholder="Designation"
value={item.designation || ""}
onChange={(e)=>

updateField(
item.id,
"designation",
e.target.value
)

}
/>





<input
placeholder="Instagram Link"
value={item.instagram || ""}
onChange={(e)=>

updateField(
item.id,
"instagram",
e.target.value
)

}
/>



<input
placeholder="YouTube Link"
value={item.youtube || ""}
onChange={(e)=>

updateField(
item.id,
"youtube",
e.target.value
)

}
/>



<input
placeholder="LinkedIn Link"
value={item.linkedin || ""}
onChange={(e)=>

updateField(
item.id,
"linkedin",
e.target.value
)

}
/>



<input
placeholder="Facebook Link"
value={item.facebook || ""}
onChange={(e)=>

updateField(
item.id,
"facebook",
e.target.value
)

}
/>



<input
placeholder="Website Link"
value={item.website || ""}
onChange={(e)=>

updateField(
item.id,
"website",
e.target.value
)

}
/>





<button
onClick={()=>saveDetails(item)}
>
Save Details
</button>





<div className="admin-buttons">


<button
className="approve-btn"
onClick={()=>updateStatus(item.id,"approved")}
>
Approve
</button>




<button
className="reject-btn"
onClick={()=>updateStatus(item.id,"rejected")}
>
Reject
</button>




<button
className="delete-btn"
onClick={()=>deleteReview(item.id)}
>
Delete
</button>



</div>



</div>


))

}



</section>

);


}


export default AdminReviews;