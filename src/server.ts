const env = Deno.env.toObject();

const HOST = env.DB_HOST || 'localhost'; 
const PORT = env.DB_PORT || 8080;
const PASS = env.DB_PASSWORD;
const USER = env.DB_USER;

console.log(`HOST: ${HOST}`);
console.log(`PORT: ${PORT}`);
console.log(`PASS: ${PASS}`);
console.log(`USER: ${USER}`);


