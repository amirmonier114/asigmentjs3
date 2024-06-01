
var sitenameinput= document.getElementById("Bookmark Name")
var siteurlinput= document.getElementById("bookmarkURL")
var visititeminput= document.getElementById("visititem")

var productlist = [];



if (localStorage.getItem("productcontainer")  !==null) {


    productlist=JSON.parse(localStorage.getItem("productcontainer"));

    displaydata()

    
}





function addproduct() {
    var product= {
        name:sitenameinput.value,
        URL:siteurlinput.value,
    }
    
    productlist.push(product);

    localStorage.setItem("productcontainer" , JSON.stringify(productlist))


    
    displaydata();

    clear();


    console.log(productlist);
}

function clear() {
    sitenameinput.value=null;
    siteurlinput.value=null;
}



function displaydata() {
    var x="";

for (var i = 0; i < productlist.length; i++) {
    x +=` <tr>
    <th>${i}</th>
    <th>${productlist[i].URL}</th>
    <th>
        <button onclick="visititem()" class="btn btn-outline-warning btn-sm"><i class="fa-regular fa-eye pe-2"></i>Visit</button>
    </th>
    <th>
        <button onclick="deleteitem(${i})" class=" btn btn-outline-danger btn-sm"><i class="fa-solid fa-trash pe-2"></i>Delite</button>
    </th>
</tr>`
       
    
}   

document.getElementById("TableData").innerHTML = x;
}


function deleteitem(indexitem) {

    productlist.splice(indexitem , 1)

    localStorage.setItem("productcontainer" , JSON.stringify(productlist))


    displaydata();

    console.log(productlist);
}


function visititem() {

    visititeminput = document.querySelectorAll("visititem");
    if (visititeminput) {
      for (var l = 0; l < visititeminput.length; l++) {
        visititeminput[l].addEventListener("click", function (e) {
          visitWebsite(e);
        });
      }
    }
  }
  


