import { app } from "./app";
import { envVars } from "./app/config/env";

const port = envVars.PORT || 5000;
// Start the server
const bootstrap = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};
bootstrap();
