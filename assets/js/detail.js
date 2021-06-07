var myUrl = window.location.pathname;
var myUrlSplit = myUrl.split('/');
var myId = myUrlSplit[myUrlSplit.length-1];
//console.log(myId);
//document.getElementById('viewTest').innerHTML = myId;
var id = myId.split('.');


const txt = '{"employee":[' +
    '{"name":"John", "age":"30", "sex":"male", "img":"https://source.unsplash.com/random", "url":"0.html"},' +
    '{"name":"KIM", "age":"20", "sex":"women", "img":"https://source.unsplash.com/random", "url":"1.html"}, ' +
    '{"name":"DOE", "age":"25", "sex":"male", "img":"https://source.unsplash.com/random", "url":"2.html"},' +
    '{"name":"KHAN", "age":"22", "sex":"women", "img":"https://source.unsplash.com/random", "url":"3.html"}]}';
const obj = JSON.parse(txt);

var x;
var y;
var z;
var k;
var firstName = "";
var age = "";
var sex = "";
var img = "";
x = obj.employee[id[0]].name;
y = obj.employee[id[0]].age;
z = obj.employee[id[0]].sex;
k = obj.employee[id[0]].img;

firstName = '<h2>Name : '+x+'</h2>';
age = '<h2>Age : '+y+'</h2>';
sex = '<h2>Sex : '+z+'</h2>'
img = '<img src='+k+'>'

document.getElementById('intro-left').innerHTML = img;
document.getElementById('viName').innerHTML = firstName;
document.getElementById('viAge').innerHTML = age;
document.getElementById('viSex').innerHTML = sex;
