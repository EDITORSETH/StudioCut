import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Reviews from "./components/Reviews";
import ReviewForm from "./components/ReviewForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Reveal from "./components/Reveal";
import AdminReviews from "./components/AdminReviews";


function Home() {

  const [showReviewForm, setShowReviewForm] = useState(false);


  return (
    <>

      <Hero />


      <Reveal>
        <Portfolio />
      </Reveal>


      <Reveal>
        <About />
      </Reveal>


      <Reveal>
        <Reviews 
          setShowReviewForm={setShowReviewForm}
        />
      </Reveal>



      {
        showReviewForm && (

          <Reveal>
            <ReviewForm />
          </Reveal>

        )
      }



      <Reveal>
        <Contact />
      </Reveal>


      <Reveal>
        <Footer />
      </Reveal>


    </>
  );

}



function App() {

  const [loading,setLoading] = useState(true);
  const [hideLoading,setHideLoading] = useState(false);



  useEffect(()=>{

    const timer=setTimeout(()=>{
      setHideLoading(true);
    },1800);


    const removeTimer=setTimeout(()=>{
      setLoading(false);
    },2800);


    return()=>{
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };

  },[]);



  if(window.location.pathname === "/admin-reviews"){
    return <AdminReviews />;
  }



  return(

    <>

    {
      loading && 
      <LoadingScreen hide={hideLoading}/>
    }


    <main className={loading ? "website-hidden":"website-show"}>

      <Routes>

        <Route 
          path="/" 
          element={<Home />}
        />

      </Routes>


    </main>

    </>

  );

}


export default App;