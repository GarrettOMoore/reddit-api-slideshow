var searchTerm;
var interval = null;
var textBox;
var imgElement = document.querySelector('img');
var stopBtn = document.getElementById('stop');
var header = document.getElementsByTagName('header')[0];


document.addEventListener("DOMContentLoaded", function() {
    textBox = document.getElementById("searchterm");


document.getElementById('stop').addEventListener('click', function(){
        clearInterval(interval);
        header.className = "";
    })

document.getElementsByTagName('button')[0].addEventListener('click', function(e){
    header.className = "hide";
    var searchTerm = document.getElementById('searchterm').value;
    var url = `http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`;
    fetch(url)
    .then (function(data) {
            return data.json();
    })  
    .then (function(json) {
      // console.log(json.data.children[0].data.url);
      var images = [];
      var imageCounter = 0;
      json.data.children.forEach(function(child) {
        images.push(child.data.url);
        // console.log(linkArr);
   })
   images = images.filter(function(image) {
    if (image.includes('jpeg') || image.includes('jpg') || image.includes('png')) {
        return true;
    } else {
         return false;
    }
   })
   interval = setInterval(function(){
    imgElement.src = images[imageCounter];
    imageCounter++;
    if (imageCounter === images.length) {
      imageCounter = 0;
    }
  }, 1000);
      })
    })
})


// var submitBtn = document.forms['imagesearch'];
// var imgBox = document.getElementsByClassName('imagedisplay')[0];
// var mainDisplay = document.getElementsByClassName('main-display')[0];
// let unfiltResults = [];
// var urls = [];




// submitBtn.addEventListener('submit', function(event) {
//     event.preventDefault();
//     imgBox.style.backgroundColor = "red";
//     mainDisplay.style.border = "5px solid yellow";
//     var query = document.getElementById('search')
//     console.log(query.value);
//     fetch('http://www.reddit.com/search.json?q='+query.value+'+nsfw:no')
//   .then(function(data) {
//     return data.json();
//   })
//   .then(function(json) {
//     console.log(json);
//     let entryArr = json.data.children;
//     for (let i =0; i<entryArr.length; i++) {
//         unfiltResults.push(entryArr[i].data.url);
//         // console.log(unfiltResults);
//     } 
//     unfiltResults.forEach(function (link){
//         unfiltResults.push(link);
//         urls.push(link);
//         console.log(urls);
//     })
//     for (let i = 0; i<urls.length;i++ ) {
//         urls.map(substring(i.length-4)[i.length-1]) 
//             console.log(urls);
//         }
//     })})

