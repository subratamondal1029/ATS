import "./config/env.js";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ATS ${process.env.NODE_ENV} Server is running on port ${PORT}`);
});
