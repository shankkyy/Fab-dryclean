const express = require('express');
const app = express();
const userModel = require('./users'); // Assuming this is your Mongoose model
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.get('/create', async (req, res) => {
    try {
        const newUser = await userModel.create({
            name: "Nisha",
            email: "nisha@123",
            age: 22
        });

        // Render the 'user' view and pass the newUser object to it
        res.render('user', { user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Failed to create user' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
