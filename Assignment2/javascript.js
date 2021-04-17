/*let button = document.getElementById("button");
button.addEventListener('click', fetch);*/

window.onload = fetch();

function fetch(){
    console.log("CLICKED");
    const xhr = new XMLHttpRequest();


    xhr.open('GET','https://reqres.in/api/users', true);


  xhr.onload = function(){
      
    var obj =JSON.parse(this.responseText);
    console.log(obj.data);
    let table= document.getElementById("table");
    for(var i =0;i<6;i++){
        
       // console.log(typeof obj[i].first_name);
        var node = document.createElement("tr");   


        var node1 = document.createElement("td");        
        var textnode1 = document.createTextNode(obj.data[i].id);   
        node1.appendChild(textnode1);  

        var node2 = document.createElement("td");
        var textnode2 = document.createTextNode(obj.data[i].first_name+" "+obj.data[i].last_name);   
        node2.appendChild(textnode2);        
      
        var node3 = document.createElement("td");        
        var textnode3 = document.createTextNode(obj.data[i].email);    
        node3.appendChild(textnode3);  

        var node4 = document.createElement("td");        
         node4.innerHTML='<img src =\"'+obj.data[i].avatar+'\">';      
        //node4.appendChild(textnode4);  

        node.appendChild(node1);
        node.appendChild(node2);
       node.appendChild(node3);
        node.appendChild(node4);
       
        
        document.getElementById("table").appendChild(node);
    }
      
}

xhr.send();
}

