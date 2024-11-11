function login() {
  var email1 = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var profileImage = document.getElementById("profileImage").files[0];
  // console.log(email,password);
  var formData = new FormData();
    formData.append("email", email1);
    formData.append("password", password);
    formData.append("profileImage", profileImage);

  axios
    .post("http://localhost:5000/login",  formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Required for file upload
      },
    })
    .then((res) => {
      console.log("response >>>>>", res);
      alert(res.data.message);
      if (res.data.sucess) {
        console.log(res.data)
        // window.location.href = "./profile.html";
        // getData();
      }
    })
    .catch((err) => {
      console.log("err >>>> ", err);
    });
}

const getData = () => {
  document.getElementById("listData").innerHTML;
  axios
    .get("http://localhost:5000/data")
    .then((res) => {
      console.log("response >>>>>", res);
      res.data.data.map((data, index) => {
        var innerData = `
           <li>${data.email}
           <buttton class="btn" onClick="deleteBtn('${data._id}')">Delete</button>
           <buttton class="btn2">Edit</button>
           </li>
       `;
        document.getElementById("listData").innerHTML += innerData;
      });
    })
    .catch((err) => {
      console.log("err >>>> ", err);
    });
};

function deleteBtn(_id) {
  console.log(_id);

  axios
    .delete("http://localhost:5000/del/" + _id)
    .then((res) => {
      console.log(res);
      alert(res.data.message);
      document.getElementById("listData").innerHTML = "";
      getData();
    })
    .catch((err) => {
      console.log("err >>>> ", err);
    });
}

getData();
