<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js"></script>
<!-- Include other Firebase SDKs as needed -->


import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLpOAcZx919tFHTzN3R9a3a-aRhOiG6RI",
  authDomain: "writer-blog-21.firebaseapp.com",
  projectId: "writer-blog-21",
  storageBucket: "writer-blog-21.appspot.com",
  messagingSenderId: "986595186275",
  appId: "1:986595186275:web:a20f3e931330e48f458a56",
  measurementId: "G-9JWSKQKSVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);














//Handle form submissions


document.addEventListener('DOMContentLoaded', () =>
{




 //Handle charecter profile form
 document.forms['charecter_profile'].addEventListener('submit',async(event)=> 
 {
  event.preventDefault();
  const ch_name = event.target.ch_name.value;
  const ch_image = event.target.ch_image.value;
  const ch_attribute_name = event.target.ch_attribute_name.value;
  const ch_attribute_value = event.target.ch_attribute_value.value;

  try
  {
   await addDoc(collection(db, 'CharecterProfile'),
   {
    ch_name:ch_name,
    ch_image_url: ch_image,
    attributes:
    {
     [ch_attribute_name]: ch_attribute_value
    }
   });
   alert('Charecter profile added!');
   event.target.reset(); 
  }
  catch(error)
  {
   alert('Error: '+error.message);
  }
 });
 









 document.forms['comic'].addEventListener('submit',async(event)=>
 {
  event.preventDefault();
  
  const comic_title = event.target.comic_title.value;
  const comic_description = event.target.comic_description.value;
  const comic_image = event.target.comic_image.value;


  try
  {
   await addDoc(collection(db, 'Comics'),
   { 
    title: comic_title,
    description: comic_description,
    image: comic_image
   });
   alert('Comic added!');
   event.target.reset();
  }  
  catch(error)
  {
   alert('Error: '+error.message);
  }

 });










 document.forms['blog'].addEventListener('submit',async(event)=>
 {
  event.preventDefault();
  
  const blog_title = event.target.blog_title.value;
  const blog_description = event.target.blog_description.value;
  const blog_image = event.target.blog_image.value;
  const blog_content = event.target.blog_content.value;

  try
  {
   await addDoc(collection(db, 'Blogs'),
   { 
    title: blog_title,
    description: blog_description,
    image: blog_image,
    content: blog_content
   });
   alert('Blog added!');
   event.target.reset();
  }  
  catch(error)
  {
   alert('Error: '+error.message);
  }

 });








});