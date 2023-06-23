let username = document.getElementById("name");
let adress = document.getElementById("adress");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let jop = document.getElementById("jop");
let sallery = document.getElementById("sallery");
let create = document.getElementById("create");
let mood = "create";
let temp;

// local storage
let savadata;
if (localStorage.user != null) {
  savadata = JSON.parse(localStorage.user);
} else {
  savadata = [];
}
//local storage

username = ""

//creat -
create.onclick = function () {
  let newuser = {
    username: username.value,
    adress: adress.value,
    phone: phone.value,
    email: email.value,
    jop: jop.value,
    sallery: sallery.value,
  };

  if (mood === "create") {
    savadata.push(newuser);
  } else {
    savadata[temp] = newuser;
    mood = "create";
    create.innerHTML = "create";
    create.style.background = "#dfc608e9";
  }
  // savadata.push(newuser)

  // local storage
  localStorage.setItem("user", JSON.stringify(savadata));
  ClearData();
  showdata();
};
showdata();
//creat

// clear inputs
function ClearData() {
  username.value = "";
  adress.value = "";
  phone.value = "";
  email.value = "";
  jop.value = "";
  sallery.value = "";
}
// clear inputs

//reed
function showdata() {
  let table = "";
  if (savadata.length > 0) {
      for (let i = 0; i < savadata.length; i++) {
          savadata[i].username = ""
        
      table += `
    <tr>
        <td>${i + 1}</td>
        <td>${savadata[i].username}</td>
        <td>${savadata[i].adress}</td>
        <td>${savadata[i].phone}</td>
        <td>${savadata[i].email}</td>
        <td>${savadata[i].jop}</td>
        <td>${savadata[i].sallery}</td>
        <td><button onclick="UpdataData(${i})" class="update">update</button></td>
        <td><button onclick="deleteData(${i})" class="delete">delete</button></td>
    </tr>
        `;
    }
  }
  document.getElementById("tobody").innerHTML = table;
}
//reed

//delete
function deleteData(i) {
  savadata.splice(i, 1);
  localStorage.user = JSON.stringify(savadata);
  showdata();
}
//delete

//updata
function UpdataData(i) {
  username.value = savadata[i].username;
  adress.value = savadata[i].adress;
  phone.value = savadata[i].phone;
  email.value = savadata[i].email;
  jop.value = savadata[i].jop;
  sallery.value = savadata[i].sallery;
  create.innerHTML = "Update";
  create.style.background = "green";
  mood = "update";
  temp = i;
}
