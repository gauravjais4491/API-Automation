const express = require("express");
const app = express();
const port = process.env.PORT || 5050;
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("./model/db");
const testUtils = require("./test/test.utils");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./router/user"));

const options = {
    swaggerDefinition: {
        openapi: "3.1.3",
        info: {
            title: "Gaurav Swagger API",
            version: "1.0.0",
            description: "This is my first Swagger API documentation",
        },
        servers: [
            {
                url: testUtils.App_Url,
            },
            {
                url: "http://localhost:5051/api/",
            }
        ]
    },
    apis: ["./router/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

app.listen(port, () => {
    console.log(`Server connected on port ${port}`);
});
