let username = document.getElementById("username");
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
// local storage

// start create -
create.onclick = function () {
  let newuser = {
    username: username.value,
    adress: adress.value,
    phone: phone.value,
    email: email.value,
    jop: jop.value,
    sallery: sallery.value,
  };
  // create after updata
  if (mood === "create") {
    savadata.push(newuser);
  } else {
    savadata[temp] = newuser;
    mood = "create";
    create.innerHTML = "Create";
    create.style.backgroundColor = "#dfc608e9";
  }
  // create after updata
  // show data in local storage
  localStorage.setItem("user", JSON.stringify(savadata));
  ClearData();
  showdata();
};
showdata();
// end create


//start clear inputs
function ClearData() {
  username.value = "";
  adress.value = "";
  phone.value = "";
  email.value = "";
  jop.value = "";
  sallery.value = "";
}
// end clear inputs

// start read
function showdata() {
  let table = "";
  if (savadata.length > 0) {
    for (let i = 0; i < savadata.length; i++) {
      table += `
        <tr>
            <td>${i + 1}</td>
            <td>${savadata[i].username}</td>
            <td>${savadata[i].adress}</td>
            <td>${savadata[i].phone}</td>
            <td>${savadata[i].email}</td>
            <td>${savadata[i].jop}</td>
            <td>${savadata[i].sallery}</td>
            <td><button onclick="UpdateData(${i})" class="update">Update</button></td>
            <td><button onclick="deleteData(${i})" class="delete">Delete</button></td>
        </tr>
      `;
    }
  }
  document.getElementById("tobody").innerHTML = table;
}
//end read

// start delete
function deleteData(i) {
  savadata.splice(i, 1);
  localStorage.user = JSON.stringify(savadata);
  showdata();
}
//end delete

// start update
function UpdateData(i) {
  username.value = savadata[i].username;
  adress.value = savadata[i].adress;
  phone.value = savadata[i].phone;
  email.value = savadata[i].email;
  jop.value = savadata[i].jop;
  sallery.value = savadata[i].sallery;
  create.innerHTML = "Update";
  create.style.backgroundColor = "green";
  mood = "update";
  temp = i;
}
// end update
