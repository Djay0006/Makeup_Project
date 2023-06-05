var Brand1=document.getElementById('Brand')
var Name1=document.getElementById('name')
const BASE_URL = 'https://makeupapi.com/api/v1/';

async function getMakeupData(endpoint) {
  try {
    const response = await fetch(`${http://makeup-api.herokuapp.com/}${http://makeup-api.herokuapp.com/api/v1/products.json}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

async function fetchMakeupProducts() {
  try {
    const products = await getMakeupData('products.json');
    console.log(products);
  } catch (error) {
    console.log('Failed to fetch makeup products:', error);
  }
}
var wrapper=document.createElement('div')
     wrapper.innerHTML=`
    imageContainer.innerHTML=`
  <div>
  <div class="card" style="width: 18rem;"
    id="imageContainer">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Makeup Product Description</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
  mainContainer.append(Wrapper)
fetchMakeupProducts()
