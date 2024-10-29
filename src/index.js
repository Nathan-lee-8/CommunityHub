import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';
import { createProduct } from './graphql/mutations'; // Adjust path as needed
import { listProducts } from './graphql/queries'; // Adjust path as needed

Amplify.configure(awsconfig);

// Create Product
// async function createNewProduct() {
//     const product = {
//       name: 'Sample Product',
//       description: 'This is a sample product',
//       price: 29.99,
//       seller: 'Seller Name',
//     };
  
//     try {
//       await API.graphql(graphqlOperation(createProduct, { input: product }));
//       console.log('Product created!');
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
// }

// Fetch Product
// async function fetchProducts() {
//     try {
//       const productData = await API.graphql(graphqlOperation(listProducts));
//       console.log('Products:', productData.data.listProducts.items);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
// }

AppRegistry.registerComponent(appName, () => App);