//getting the values
let name= document.getElementById('candiatename')
let phnnum = document.getElementById('number')
let age = document.getElementById('age')
let country = document.getElementById('selectField')
let email = document.getElementById('email')
let address = document.getElementById('address')
let gender = document.getElementById('gender')
let form = document.getElementById('form')
let resetBtn = document.getElementById('resetBtn')
let submitBtn = document.getElementById('submitBtn')

// form?.addEventListener('submit', function(e) {
//     e.preventDefault();
// });

//reset button
resetBtn?.addEventListener('click', function() {
    let name= document.getElementById('candiatename')
    let phnnum = document.getElementById('number')
    let age = document.getElementById('age')
    let country = document.getElementById('selectField')
    let email = document.getElementById('email')
    let address = document.getElementById('address')
    let gender = document.getElementById('gender')

    name.value='';
    phnnum.value='';
    age.value='';
    country.value='';
    email.value='';
    address.value='';
    gender.value='';
})

//setting the data to local storage
submitBtn?.addEventListener('click', function () {
    let name= document.getElementById('candiatename').value
    let phnnum = document.getElementById('number').value
    let age = document.getElementById('age').value
    let country = document.getElementById('selectField').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let gender = document.getElementById('gender').value
    // console.log("name",name)
  
    localStorage.setItem('is_name',name);
    localStorage.setItem('is_phnnum',phnnum);
    localStorage.setItem('is_age', age);
    localStorage.setItem('is_country', country);
    localStorage.setItem('is_email', email);
    localStorage.setItem('is_address', address);
    localStorage.setItem('is_gender', gender);

    let username = localStorage.getItem('is_name')
    let contact = localStorage.getItem('is_phnnum')
    let userage = localStorage.getItem('is_age')
    let Country = localStorage.getItem('is_country')
    let mail_Id = localStorage.getItem('is_email')
    let Location = localStorage.getItem('is_address')
    let Gender = localStorage.getItem('is_gender')
});

 

function showBtn(){
  document.getElementById('user_data').classList.remove("hidden");
  
}
function hideBtn(){
  document.getElementById('user_data').classList.add("hidden");
}

    