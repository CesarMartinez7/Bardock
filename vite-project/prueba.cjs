const bcrypt = require("bcrypt");

const password = "cesarMartinezcastro";

async function hashPassword(password) {
    try {
        const hash = await bcrypt.hash(password, 10);
        return hash
    } catch (err) {
        console.error(err);
    }
}

const data = hashPassword(password);

console.log(data)