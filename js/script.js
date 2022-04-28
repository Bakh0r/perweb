fetch ('JSON\images.json').then(function(response) {
     response.json().then(function(json) {
var json = JSON.parse(jtext);
var content =document.getElementById('content');
var heading =document.createElement('h1');//<h1.this is a gallery</h1>
heading.innerText ="This is the gallery page";
content.appendChild(heading);
var gallery = document.getElementById('gallery');
for(var i=0; i<json.Images.length ; i++){
var divCol = document.createElement('div');
divCol.class ="card";
var image =document.createElement('img');
var divCard = document.createElement('div');

divCard.class="card";
divCard.style="width:30%";
var divCardBody = document.createElement('div');
divCardBody.class = "card-body";
var caption = document.createElement('h4');
caption.innerText=json.Images[i].Caption;
caption.style="text-align:center";
image.src =json.Images[i].URL;
image.alt =json.Images[i].Caption;
image.style = 'width:100%';
image.class ="card-img-top";



divCardBody.appendChild(caption);
divCard.appendChild(image);
divCard.appendChild(divCardBody);
content.append(divCard);
divCol.appendChild(divCard);
gallery.appendChild(divCol);
}

     });
})
