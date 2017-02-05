console.log('Loaded!');
var nameinput= document.getElementById('inputname');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
                var names =['name1','name2', 'name3'];
                var list = '';
                for(var i=0;i<names.length; i++){
                    list +='<li>'+ names[i] +'</li>';     
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
    };
//     request.open('GET', "http://nithinm50.imad.hasura-app.io/submit-name?name="+ name, true);
//     request.send(null);
// };

//     var request = new XMLHttpRequest();
    
//     request.onreadystatechange = function(){
//         if(request.readyState === XMLHttpRequest.DONE){
//             if(request.status === 200){
//                 var names = request.responseText;
//                 names = JSON.parse(names);
//                 var list = '';
//                 for(var i=0;i<name.length; i++){
//                     list +='<li>'+ names[i] +'</li>';     
//                 }
//                 var ul = document.getElementById("namelist");
//                 ul.innerHTML=list;
//             }
//         }
//     };
//     request.open('GET', "http://nithinm50.imad.hasura-app.io/submit-name?name="+ name, true);
//     request.send(null);
// };