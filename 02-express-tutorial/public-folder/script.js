document.getElementById('fetchButton').addEventListener('click', () => {
    
    // Issue a fetch call for /api/v1/products
    fetch('/api/v1/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('productList');
            
            // Clear previous contents of the div
            productList.innerHTML = ''; 

            if (data === 'No products matched your search') {
                productList.innerText = data;
            } else {
                data.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.innerText = `${product.name} - $${product.price}`;
                    productList.appendChild(productItem);
                });
            }
        })
        .catch(error => console.error('Error:', error));
});