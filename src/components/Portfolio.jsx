import { useState } from "react";
import "./Portfolio.css";
import Reveal from "./Reveal";

function Portfolio() {


const [activeCategory, setActiveCategory] = useState("Podcast Reel");



const categories = [
 "Podcast Reel",
 "Real Estate",
 "AI Videos",
 "Before / After",
 "Podcast"
];



const projects = [


{
category:"Podcast Reel",
image:"/podcast-thumbnail.png",
title:"Podcast Reel 1",
desc:"High retention podcast editing.",
link:"https://www.instagram.com/reel/DZXKX8hRt3i/?igsh=YTZhcHVleGhuMDAy"
},


{
category:"Podcast Reel",
image:"/podcast-thumbnail-2.png",
title:"Podcast Reel 2",
desc:"High retention podcast editing.",
link:"https://www.instagram.com/reel/Da7dfRCx111/?igsh=eThxODllemxpcTFx"
},


{
category:"Podcast Reel",
image:"/podcast-thumbnail-3.png",
title:"Podcast Reel 3",
desc:"High retention podcast editing.",
link:"https://www.instagram.com/reel/DbK3Lgdxhe9/?igsh=NHVkbmxkeDY1dGVw"
},



{
category:"Real Estate",
image:"/realestate-1.png",
title:"Real Estate 1",
desc:"Cinematic property videos.",
link:"https://www.instagram.com/reel/DbBUJ22Rcfd/?igsh=MW0ybGQ3M2N4NnBhaA=="
},


{
category:"Real Estate",
image:"/realestate-2.jpg",
title:"Real Estate 2",
desc:"Cinematic property videos.",
link:"https://instagram.com"
},


{
category:"Real Estate",
image:"/realestate-3.jpg",
title:"Real Estate 3",
desc:"Cinematic property videos.",
link:"https://instagram.com"
},



{
category:"AI Videos",
image:"/ai-video-1.jpg",
title:"AI Video 1",
desc:"Creative AI visuals with storytelling.",
link:"https://instagram.com"
},


{
category:"AI Videos",
image:"/ai-video-2.jpg",
title:"AI Video 2",
desc:"Creative AI visuals with storytelling.",
link:"https://instagram.com"
},


{
category:"AI Videos",
image:"/ai-video-3.jpg",
title:"AI Video 3",
desc:"Creative AI visuals with storytelling.",
link:"https://instagram.com"
},



{
category:"Before / After",
image:"/before-after-1.png",
title:"Before After Reel 1",
desc:"Professional before & after editing.",
link:"https://instagram.com"
},


{
category:"Before / After",
image:"/before-after-2.png",
title:"Before After Reel 2",
desc:"Professional before & after editing.",
link:"https://instagram.com"
},


{
category:"Before / After",
image:"/before-after-3.png",
title:"Before After Reel 3",
desc:"Professional before & after editing.",
link:"https://instagram.com"
},



{
category:"Podcast",
image:"/long-video-1.jpg",
title:"Podcast Episode",
desc:"Long-form YouTube podcast editing.",
link:"https://youtu.be/RIfAu4c3o8s?si=reyFKKJNEoZQyN_6"
}


];



const filteredProjects = projects.filter(
item => item.category === activeCategory
);



return (

<section className="portfolio" id="portfolio">


<Reveal>

<div className="portfolio-header">

<p className="section-tag">
MY WORK
</p>


<h2>
Videos that capture
<br/>
attention.
</h2>


<p className="section-description">
A collection of edits created for creators,
brands and digital platforms.
</p>


</div>

</Reveal>



<Reveal delay={0.2}>

<div className="portfolio-categories">

{
categories.map((cat)=>(

<button

key={cat}

className={
activeCategory === cat
?
"active"
:
""
}

onClick={()=>setActiveCategory(cat)}

>

{cat}

</button>

))

}

</div>

</Reveal>





<div className="portfolio-grid">


{

filteredProjects.map((project,index)=>(


<Reveal

key={index}

delay={index * 0.08}

>


<a

href={project.link}

target="_blank"

rel="noreferrer"

className={
project.category === "Podcast"
?
"portfolio-card podcast-card"
:
"portfolio-card"
}

>


<div className={
project.category === "Podcast"
?
"card-image horizontal-card-image"
:
"card-image"
}>


<img

src={project.image}

alt={project.title}

/>


<span>
▶
</span>


</div>



<h3>
{project.title}
</h3>


<p>
{project.desc}
</p>



</a>


</Reveal>


))


}


</div>



</section>

);


}


export default Portfolio;