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
  

    localStorage.setItem('is_name',name);
    localStorage.setItem('is_phnnum',phnnum);
    localStorage.setItem('is_age', age);
    localStorage.setItem('is_country', country);
    localStorage.setItem('is_email', email);
    localStorage.setItem('is_address', address);
    localStorage.setItem('is_gender', gender);

    if(!name || !phnnum || !age || !country || !email || !address || !gender){
      alert("Please Fill all the details..!")
    }
    
    var row=1;
    var display = document.getElementById('user_data');
    var newRow = display.insertRow(row);
    row++;

    var cellName = newRow.insertCell(0);
    cellName.innerHTML = name;
    var cellPhnnum = newRow.insertCell(1);
    cellPhnnum.innerHTML = phnnum;
    var cellage = newRow.insertCell(2);
    cellage.innerHTML = age;
    var cellCountry = newRow.insertCell(3);
    cellCountry.innerHTML = country;
    var cellemail = newRow.insertCell(4);
    cellemail.innerHTML = email;
    var celladdress = newRow.insertCell(5);
    celladdress.innerHTML = address;
    var cellGender = newRow.insertCell(6);
    cellGender.innerHTML = gender;

    

    let username = localStorage.getItem('is_name')
    let contact = localStorage.getItem('is_phnnum')
    let userage = localStorage.getItem('is_age')
    let Country = localStorage.getItem('is_country')
    let mail_Id = localStorage.getItem('is_email')
    let Location = localStorage.getItem('is_address')
    let Gender = localStorage.getItem('is_gender')
});

function toggleBtn(){
  document.getElementById('user_data').classList.toggle("hidden")
}

// function toggleBtn(){
//   var show_hide = document.getElementById('user_data');
//   if (show_hide.style.visibility === 'hidden'){
//     show_hide.style.visibility = 'visible';
//   }
//   else{
//     show_hide.style.visibility = 'hidden'
//   }
// }

// function showBtn(){
//   document.getElementById('user_data').classList.remove("hidden");
  
// }
// function hideBtn(){
//   document.getElementById('user_data').classList.add("hidden");
// }




    