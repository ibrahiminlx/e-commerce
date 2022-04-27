import mysql from "mysql2/promise";

export let DB=null
async function main() {
    DB=await mysql.createConnection({
        host:"localhost",
        user:"root",
        database:"e-ticaret"

    })

}
export default main


