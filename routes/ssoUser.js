const router = require ('express').Router();
const axios = require('axios')
require('dotenv').config();

router.post('/', async (req, res) => {
    const body = {
        member: {
            first_name: "testertes",
            last_name: "flexcare",
            gender: "female",
            birthdate: "27-09-1960",
            external_id: "MDL20201110",
            phone: "8888888888",
            email: "mgarcia@mdlive.com",
            address1: "123 Test Road",
            city: "Miami",
            state: "FL",
            zip: "33172"
        }
    };
    try {
        const {newUser} = await axios.post(
            "https://stage-members.mdlive.com/services/members",
            body,
            {
                headers: {
                    "Content-Type": "application/json",
                    "RemoteUserId": "1", 
                    Authorization: `Bearer ${process.env.API_KEY}`,
                },
            }
        );
        console.log("Data sent successfully.");
        console.log("Body: ", body);
    } catch (err) {
        console.error(err);
    }
});



 
module.exports = router;