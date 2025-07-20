
   const data = [
    {
      "Name": "Uday",
      "E-mail": "uday12@gmail.com",
      "Phone no.": 8872567265
    },
    {
      "Name": "Krish",
      "E-mail": "kr12@gmail.com",
      "Phone no.": 9876354736
    },
    {
      "Name": "Rohit",
      "E-mail": "rohit01@gmail.com",
      "Phone no.": 8874279265
    },
    {
      "Name": "Virat",
      "E-mail": "virat18@gmail.com",
      "Phone no.": 9872466715
    },
    {
      "Name": "Rahul",
      "E-mail": "rahul20@gmail.com",
      "Phone no.": 8992657157
    },
    {
      "Name": "Abhishek",
      "E-mail": "abhi32@gmail.com",
      "Phone no.": 7892551718
    },
    {
      "Name": "Amit",
      "E-mail": "amit45@gmail.com",
      "Phone no.": 6289915838
    },
    {
      "Name": "Arjun",
      "E-mail": "arjun@gmail.com",
      "Phone no.": 9757826881
    },
    {
      "Name": "Hardik",
      "E-mail": "hardik@gmail.com",
      "Phone no.": 8858992537
    },
    {
      "Name": "Nihal",
      "E-mail": "nihal@gmail.com",
      "Phone no.": 6283891793
    },
    {
      "Name": "Ishaan",
      "E-mail": "ishaan@gmail.com",
      "Phone no.": 8738868292
    }
  ];

  localStorage.setItem('userdata', JSON.stringify(data))




const form = document.getElementById("Form");
const body = document.getElementById("Body");

form.addEventListener("submit", function (val) {
  val.preventDefault();

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value

  if (!name||!email||!phone) {
    alert("please enter all fields");
    return;
  }

  const row = document.createElement("tr");

  row.innerHTML = `<td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>

    <button class ="edit">Edit</button>
    <button class ="delete">Delete</button>
    
    
    </td>`;

  body.appendChild(row);
  form.reset();
  attachButtonEvents(row);
});


function attachButtonEvents(row) {
  const Edit = row.querySelector(".edit");
  const Delete = row.querySelector(".delete");


  Edit.addEventListener("click", function () {
  
    const Update = Edit.textContent === "update";

  
    const cells = row.querySelectorAll("td");

    if (Update) {
    
      for (let i=0; i<3; i++) {
        const inputValue = cells[i].querySelector("input").value;
        cells[i].textContent = inputValue;
      }

    
      Edit.textContent = "Edit";
    } else {
  
      for (let i=0; i<3; i++) {
        const text = cells[i].textContent;
        cells[i].innerHTML = '<input type="text" value="' + text + '">';
      }

      Edit.textContent = "update";
    }
  });

  Delete.addEventListener("click", function () {
    row.remove();
  });
}


const a = document.querySelectorAll("#Body tr");

   a.forEach(function (row) {
   attachButtonEvents(row);
});
