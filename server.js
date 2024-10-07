const app = require("./app")
const { connectDatabase } = require("./config/db")
const { cloudinaryConnect } = require("./config/cloudinaryConnect")

const origin = process.env.FRONTEND_URL;
console.log({ origin });

cloudinaryConnect();
connectDatabase();
app.listen(process.env.PORT, () => {
    console.log(`server is listening on port `, process.env.PORT)
})
