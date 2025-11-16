import express from 'express'
import userRoutes from "@routes/user.route"
import 'dotenv/config'

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
