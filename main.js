'use strict';

let btn = document.querySelector('.btn');

let searchWiki = function() {
  let docs = document.querySelector('.docs');
  let i = document.querySelector('.search').value;
  let url = "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + i + "&limit=5";
  
  fetch(url)
  .then(function(res) {
    if(!res.ok) {
      throw Error(res);
    }
    return res.json();
  })
  .then(function(data) {
    
    docs.innerHTML = "";
    
    for(var i = 0; i < 5; i++) {
      docs.innerHTML += '<a href=' + data[3][i] + ' target= "blank">' + data[1][i] + '</h1></a><h3>' + data[2][i] + '</h3><br>';
    }
  })
 
  .catch(function(err) {
    console.log(err);
  })
}

btn.addEventListener('click', function() {
  searchWiki();
});