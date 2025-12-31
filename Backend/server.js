require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 5000;

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "gWbN6@example.com",
    password: "password123",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janeWbN6@example.com",
    password: "password123",
  },
  {
    id: 3,
    name: "John Doe",
    email: "gWbN6@example.com",
    password: "password123",
  },
];

app.get("/", (req, res) => {
  res.send(`Hello ${data[0].name} <br>
    Id: ${data[0].id} <br>
            Email: ${data[0].email} <br>
            Password: ${data[0].password}
            <br><br>

            new User  :             Id: ${data[1].id} <br>
            Name: ${data[1].name} <br>
            Email: ${data[1].email} <br>
            Password: ${data[1].password}
            <br><br>
    `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
