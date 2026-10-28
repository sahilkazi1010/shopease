# ShopEase - Docker Practical

Simple e-commerce website served with **nginx** inside Docker.

## Build & Run

```bash
# Build the image
docker build -t shopease .

# Run the container
docker run -d --name shopease-container -p 8082:80 shopease
```

## Access

- Home page: http://localhost:8082
- Product detail: http://localhost:8082/product.html

## Stop & Remove

```bash
docker stop shopease-container
docker rm shopease-container
```
