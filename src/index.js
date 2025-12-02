import express from "express";

const app = express();
app.use(express.json());

// Slack slash command endpoint
app.post("/slack/command", async (req, res) => {
    try {
        console.log("Slash command received:", req.body);

        return res.status(200).send("Bot is online. Command received!");
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal error");
    }
});

// Render needs a port from env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
