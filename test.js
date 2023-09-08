const express = require("express");
const app = express();
app.use(express.json());

// POST method endpoint
app.post("/bfhl", (req, res) => {
  const requestData = req.body;

  // Extracting numbers and alphabets from the request data
  const numbers = requestData.filter((item) => typeof item === "number");
  const alphabets = requestData.filter(
    (item) => typeof item === "string" && item.length === 1
  );

  const highestAlphabet = alphabets.sort((a, b) => b.localeCompare(a))[0] || "";

  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_alphabet: [highestAlphabet],
  };

  res.json(response);
});

// GET method endpoint
app.get("/bfhl", (req, res) => {
  const jsonResponse = {
    operation_code: 1,
  };

  res.json(jsonResponse);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
