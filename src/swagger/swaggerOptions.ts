export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger Test",
      version: "1.0.0",
      description: "A siple api CRUD"
    },
    server: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./src/swagger/routes/*.ts"]
};