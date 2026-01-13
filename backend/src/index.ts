import "./config/env.js";
import connectDB from "./db/mongo.db.js";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();

    app
      .listen(PORT, () => {
        console.log(
          `ATS ${process.env.NODE_ENV} Server is running on port ${PORT}`
        );
      })
      .on("error", error => {
        console.error("Error starting server:", error);
        process.exit(1);
      });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
})();
