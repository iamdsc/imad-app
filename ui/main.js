//Counter Code
var btn = document.getElementById("counter");
btn.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make the request
    request.open('GET','http://dilpreetchawla382.imad.hasura-app.io/counter',true);
    request.send(null);
};

//Submit name

var submit = document.getElementById("submit_btn");
submit.onclick = function() {
    //Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
            //Capture a list of names and render it as a list
            var names = request.responseText;
            names = JSON.parse(names);//Converting back to array
            var list = '';
            for(var i = 0;i<names.length;i++){
            list += '<li>'+names[i] + '</li>';
            }
            var ul = document.getElementById("namelist");
            ul.innerHTML = list;
            }
        }
        
    };
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    //Make the request
    request.open('GET','http://dilpreetchawla382.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);

    
};



