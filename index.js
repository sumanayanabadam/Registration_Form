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
    // country.value='';
    email.value='';
    address.value='';
    gender.value='';
})

//setting the data to local storage
submitBtn?.addEventListener('click', function (e) {
  e.preventDefault();
    let name= document.getElementById('candiatename').value
    let phnnum = document.getElementById('number').value
    let age = document.getElementById('age').value
    let country = document.getElementById('selectField').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let gender_male = document.getElementById('male').checked;
    let gender_female = document.getElementById('female').checked;
    let editBtn = document.querySelector("#edit_Btn")
    
  
    // editBtn.addEventListener('click', function(e) {
    //     alert("edited");
    // })
    localStorage.setItem('is_name',name);
    localStorage.setItem('is_phnnum',phnnum);
    localStorage.setItem('is_age', age);
    localStorage.setItem('is_country', country);
    localStorage.setItem('is_email', email);
    localStorage.setItem('is_address', address);
    if(gender_male){
      localStorage.setItem('is_gender', "male");
    }
    else{
      localStorage.setItem('is_gender', "female");
    }
    
    

    // if(!name || !phnnum || !age || !country || !email || !address || !gender){
    //   alert("Please Fill all the details..!")
    // }
    
    var row=1;
    var display = document.getElementById('user_data');
    var newRow = display.insertRow(row);
    row++;

    var cellName = newRow.insertCell(0);
    cellName.innerHTML = localStorage.getItem('is_name');
    var cellPhnnum = newRow.insertCell(1);
    cellPhnnum.innerHTML = localStorage.getItem('is_phnnum');
    var cellage = newRow.insertCell(2);
    cellage.innerHTML = localStorage.getItem('is_age')
    var cellCountry = newRow.insertCell(3);
    cellCountry.innerHTML = localStorage.getItem('is_country');
    var cellemail = newRow.insertCell(4);
    cellemail.innerHTML = localStorage.getItem('is_email');
    var celladdress = newRow.insertCell(5);
    celladdress.innerHTML = localStorage.getItem('is_address');
    var cellgender = newRow.insertCell(6);
    cellgender.innerHTML = localStorage.getItem('is_gender');
    var edit_Btn= newRow.insertCell(7);
    edit_Btn.innerHTML = 'Edit';
    edit_Btn.appendChild(editBtn);
    
    
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




    