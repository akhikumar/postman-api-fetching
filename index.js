console.log("This is index.js section of this projects ")

function paramsIncrement(string){
  let div =  document.createElement("div");
  div.innerHTML =string;
   return div.firstElementChild;    ``
}

let customeIncrement = 0;

let parametersBox =document.getElementById("parametersBox");
parametersBox.style.display="none";

let requestJsonBox =document.getElementById("requestJsonBox");


// when we clicked on custome  parameter radio button  then json box become hide and custome parameter box shown
let paramsRadio =document.getElementById("paramsRadio");
paramsRadio.addEventListener('click',()=>{
    console.log("custome parameter button clicked");
    parametersBox.style.display ="block";
    requestJsonBox.style.display ="none";

    
})

// when we clicked on json radio button  then json box become shown and custome parameter box hide:
let jsonRadio =document.getElementById("jsonRadio");

jsonRadio.addEventListener('click',()=>{
    console.log("json radio button clicked");
    parametersBox.style.display ="none";
    requestJsonBox.style.display ="block";

});

// on clicking Plus(+) button new custome parameter content section is formed
let parameterButton =document.getElementById("parameterButton");

parameterButton.addEventListener("click",(e)=>{
    console.log("clicked on + button")
    // let html ="";
    let string =` <div class="row my-3">
                    <label for="url" class="col-sm-2 col-form-label">Custom parameter ${customeIncrement+2}</label>

                    <div class="col-4">
                        <input type="text" class="form-control" id="parameterKey${customeIncrement+2}" placeholder="Enter parameter ${customeIncrement+2} key">
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" id="parameterValue${customeIncrement+2}" placeholder="Enter parameter ${customeIncrement+2} value">
                    </div>
                    <button class="btn btn-primary col-sm-1 col-form-label deleteButton" id="parameterButton">-</button>
                    </div> `;
    //   html = html + string;
    customeIncrement += 1;

    let paramElement = paramsIncrement(string);
        let params = document.getElementById("params");

        params.appendChild(paramElement);

    let deleteButton = document.getElementsByClassName("deleteButton");

    for(let button of deleteButton){
        button.addEventListener("click",(e)=>{
            console.log("clicked on - button");
            e.target.parentElement.remove();
           
        })
    }

})

//  when some one clicked on submit button then all the data fetched :

let submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    //  e.preventDefault();
    console.log("submit button clicked");
    
    // document.getElementById("responseJson").innerHTML = "Please wait.... fetching response......";
    document.getElementById("responsePrism").innerHTML = "Please wait.... fetching response......";

    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType =document.querySelector("input[name='contentType']:checked").value;

    console.log(url,requestType,contentType);

    if(contentType == 'PARAMS'){
          data ={};
        for(let i=0; i< customeIncrement+1 ;i++){
            if(document.getElementById('parameterKey'+(i+1)) != undefined){

                let key =document.getElementById('parameterKey' +(i+1)).value;
                let value = document.getElementById('parameterValue' +(i+1)).value;
                data[key]=value;
            }

        }
        data = JSON.stringify(data);
    }
    else{
        
        data = document.getElementById('jsonValue').value;
    }

    console.log("url is :",url);
    console.log("request type  is :",requestType);
    console.log("content type is :",contentType);
    console.log(data);


//   if requestType is GET the invoke fetch api to get GET request:

if(requestType == 'GET'){

    fetch(url,{
        method:'GET'
    }).then((response) =>{
        return response.text()
    }).then((text)=>{
        // let responseJson =document.getElementById("responseJson");
        let responseJson =document.getElementById("responsePrism");
        responseJson.innerHTML = text;
        Prism.highlightAll();
    })
}

else{
    fetch(url, {
        method: 'POST', 
        body: data,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }  
    }).then(response => response.text()).then(text =>{
        // let responseJson =document.getElementById("responseJson");
        let responseJson =document.getElementById("responsePrism");
        responseJson.innerHTML = text;
        Prism.highlightAll();
    })
}

})