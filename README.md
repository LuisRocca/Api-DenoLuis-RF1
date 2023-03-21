# Api-DenoLuis-RF1
Es un api de base para el estudio y la adaptacion de servicios con deno, si vienes de trabajar con express este servicio se te ara muy comodo 

# Production Deployment
este servicio en su rama master esta deployado tiern dos url: luisservice-665-a2jbdsek2ngg.deno.dev y luisservice-665.deno.dev si le haces click te llevara a un 404 ya que no tienen nigura respuesta para esta peticion mas sin embargo te voy a dejar una guia para que puedas hacerle teticiones desde postman al deployd para que luego puedas llevar el proyecto a tu ordenador y adecuarlo a tus necesidades

```javascript

```
# Postman

GET: https://luisservice-665.deno.dev/cars
paramts: any

GET: https://luisservice-665.deno.dev/car/:id
Path Variables: 1 - 5

POST: https://luisservice-665.deno.dev/users/login
raw JSON: 

```javascript
{
    "username": "lrocca@example.com",
    "password": "4321"
}
```

POST: https://luisservice-665.deno.dev/cars
raw JSON: 
```javascript
{
    "id": "7",
    "model": "Kia Rio 2-xt",
    "price": 7990990
}
```

PUT: https://luisservice-665.deno.dev/cars/:id
Path Variables: 1 - 5
```javascript
{
    "model": "Kia Rio 2-xt",
    "price": 7990990
}
```

DELETE: https://luisservice-665.deno.dev/cars/:id
Path Variables: 1 - 5

