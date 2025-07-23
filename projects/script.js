const data = [
  {
    "Sr No.": 1,
    "Name": "Uday",
    "E-mail": "uday12@gmail.com",
    "Phone no.": 8872567265,
  },
  {
    "Sr No.": 2,
    "Name": "Krish",
    "E-mail": "kr12@gmail.com",
    "Phone no.": 9876354736,
  },
  {
    "Sr No.": 3,
    "Name": "Rohit",
    "E-mail": "rohit01@gmail.com",
    "Phone no.": 8874279265,
  },
  {
    "Sr No.": 4,
    "Name": "Virat",
    "E-mail": "virat18@gmail.com",
    "Phone no.": 9872466715,
  },
  {
    "Sr No.": 5,
    "Name": "Rahul",
    "E-mail": "rahul20@gmail.com",
    "Phone no.": 8992657157,
  },
  {
    "Sr No.": 6,
    "Name": "Abhishek",
    "E-mail": "abhi32@gmail.com",
    "Phone no.": 7892551718,
  },
  {
    "Sr No.": 7,
    "Name": "Amit",
    "E-mail": "amit45@gmail.com",
    "Phone no.": 6289915838,
  },
  {
    "Sr No.": 8,
    "Name": "Arjun",
    "E-mail": "arjun@gmail.com",
    "Phone no.": 9757826881,
  },
  {
    "Sr No.": 9,
    "Name": "Hardik",
    "E-mail": "hardik@gmail.com",
    "Phone no.": 8858992537,
  },
  {
    "Sr No.": 10,
    "Name": "Nihal",
    "E-mail": "nihal@gmail.com",
    "Phone no.": 6283891793,
  },
  {
    "Sr No.": 11,
    "Name": "Ishaan",
    "E-mail": "ishaan@gmail.com",
    "Phone no.": 8738868292,
  },
];



    const rowsPerPage = 5;
    let currentPage = 1;

    const body = document.getElementById("records");

    function table(page) {
      body.innerHTML = "";
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      const pageData = data.slice(start, end);

      pageData.forEach((user, i) => {
        const index = start + i;
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user["Sr No."]}</td>
          <td>${user.Name}</td>
          <td>${user["E-mail"]}</td>
          <td>${user["Phone no."]}</td>
          <td>
            <button onclick="editRow(${index})">Edit</button>
            <button onclick="deleteRow(${index})">Delete</button>
          </td>
        `;
        body.appendChild(row);
      });
    }

    function pagination() {
      const totalPages = Math.ceil(data.length / rowsPerPage);
      const pagination = document.getElementById("pagination");
      pagination.innerHTML = "";

      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.classList.add("active");

        btn.addEventListener("click", () => {
          currentPage = i;
          table(currentPage);
          pagination();
        });

        pagination.appendChild(btn);
      }
    }

    function deleteRow(index) {
      data.splice(index, 1);
      const totalPages = Math.ceil(data.length / rowsPerPage);
      if (currentPage > totalPages) currentPage = totalPages;
      table(currentPage);
      pagination();
    }

    function editRow(index) {
      const row = body.rows[index % rowsPerPage];
      const cells = row.querySelectorAll("td");

      cells[0].innerHTML = `<input type="text" value="${data[index]["Sr No."]}">`;
      cells[1].innerHTML = `<input type="text" value="${data[index].Name}">`;
      cells[2].innerHTML = `<input type="text" value="${data[index]["E-mail"]}">`;
      cells[3].innerHTML = `<input type="text" value="${data[index]["Phone no."]}">`;

      cells[4].innerHTML = `
        <button onclick="saveRow(${index})">Update</button>
        <button onclick="renderTable(${currentPage})">Cancel</button>
      `;
    }

    function saveRow(index) {
      const row = body.rows[index % rowsPerPage];
      const inputs = row.querySelectorAll("input");

      data[index]["Sr No."] = inputs[0].value;
      data[index].Name = inputs[1].value;
      data[index]["E-mail"] = inputs[2].value;
      data[index]["Phone no."] = inputs[3].value;

      table(currentPage);
      pagination();
    }

    table(currentPage);
    pagination();

