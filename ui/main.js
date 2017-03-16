// console.log('Loaded!');
// var submit = document.getElementById('submit_btn');
// submit.onclick = function(){
//     console.log("inside");
//     var request = new XMLHttpRequest();
    
//     request.onreadystatechange = function(){
//         if(request.readyState === XMLHttpRequest.DONE){
//             if(request.status === 200){
//                 var names = request.responseText;
//                 names = JSON.parse(names);
//                 var list = '';
//                 for(var i=0;i<names.length; i++){
//                     list +='<li>'+ names[i] +'</li>';     
//                 }
//     var ul = document.getElementById('namelist');
//     ul.innerHTML = list;
//             }
//         }
//     };
//     var nameinput= document.getElementById('name');
//     var name = nameinput.value;
//     request.open('GET', "http://nithinm50.imad.hasura-app.io/submit-name?name="+ name, true);
//     request.send(null);
// };
// login form
var submit = document.getElementById('submit_btn1');
submit.onclick = function(){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                console.log("login sucessful");
                alert("login sucessful");
            } else if(request.status === 403) {
                alert("incorrect username/password");
            } else if(request.status === 500) {
                alert("something went wrong");
            }
        }
    };
    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    var username1= document.getElementById('username').value;
    console.log("username");
    console.log("password");
    request.open('POST', "http://nithinm50.imad.hasura-app.io/login", true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
};
// console.log("inside");
//     var names =['name1','name2', 'name3'];
//     var list = '';
//     for(var i=0;i<names.length; i++){
//         list +='<li>'+ names[i] +'</li>';     
//     }
//     var ul = document.getElementById('namelist');
//     ul.innerHTML = list;