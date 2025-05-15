const xhr = new XMLHttpRequest(); //creates a new  http request

xhr.addEventListener('load',()=>{

  console.log(xhr.response);

});


xhr.open('GET', 'https://supersimplebackend.dev'); 
xhr.send();  //asynchronous
