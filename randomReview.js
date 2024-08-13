const customerNames =['Mike Doe', 'Aaron Smith', 'Josk Kemp'];
const products = ['labtops','resturant','van delivery Service'];
const reviewStatements=['I absolutely loved the fast delivery!',
'The service needs improvement','The delivery was timely and professionaL'];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];    
}
function generateRandomReview() {
    const customer = getRandomElement(customerNames);
    const product = getRandomElement(products);
    const statements = getRandomElement(reviewStatements);
    return  `${customer}: ${statements}~~${product}`;   

}
console.log(generateRandomReview());