<!-- Firebase SDK -->
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";



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





//Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

//Variable to access database collection
const db_ch = collection(firestore,"CharecterProfile");
const db_co = collection(firestore,"Comics");
const db_bl = collection(firestore,"Blogs");










//Handle form submissions


document.addEventListener('DOMContentLoaded', () =>
{




 //Handle charecter profile form
 document.forms['charecter_profile'].addEventListener('submit',async(event)=> 
 {
  event.preventDefault();
  const ch_name = document.getElementById('ch_name').value;
  const ch_image = document.getElementById('ch_image').value;
  const ch_attribute_name = document.getElementById('ch_attribute_name').value;
  const ch_attribute_value = document.getElementById('ch_attribute_value').value;

  console.log('Character Name:', ch_name);
  console.log('Character Image URL:', ch_image);
  console.log('Attribute Name:', ch_attribute_name);
  console.log('Attribute Value:', ch_attribute_value);

  try
  {
   await addDoc(db_ch,
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
   await addDoc(db_co,
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
   await addDoc(db_bl,
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
