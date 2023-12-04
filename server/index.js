const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.get('/api/v1/cars', (req, res) => {
    res.send({ carList });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const carList = [
    {
        id: 1,
        marque: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Silver",
        pricePerDay: 50,
        available: true,
        image: "https://cdn.club-auto.com/cdn-autodiscount/storage/cars/34179/toyota_20chrhybridclubsu1fb_blanc-nacre-toit-noir.webp?width=300&format=auto&quality=75"
    },
    {
        id: 2,
        marque: "Honda",
        model: "Civic",
        year: 2021,
        color: "Blue",
        pricePerDay: 45,
        available: true,
        image: "https://motor.ru/imgs/2021/11/16/07/5029149/c6a078b3c3448720cda902894d0841eb23848849.jpg"
    },
    {
        id: 3,
        marque: "Ford",
        model: "Mustang",
        year: 2020,
        color: "Red",
        pricePerDay: 70,
        available: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5NXPaylmGArsAqnWlaP3-4OjqGV7wN1PJkRp9p2F&s"
    },
    {
        id: 4,
        marque: "Chevrolet",
        model: "Malibu",
        year: 2022,
        color: "White",
        pricePerDay: 55,
        available: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/01/2019_Chevrolet_Malibu_%28facelift%29_LT%2C_front_10.19.19.jpg"
    },
    {
        id: 5,
        marque: "Nissan",
        model: "Altima",
        year: 2021,
        color: "Black",
        pricePerDay: 48,
        available: true,
        image: "https://hips.hearstapps.com/hmg-prod/images/2023-nissan-altima-111-1654783716.jpg?crop=0.787xw:0.643xh;0.0984xw,0.283xh&resize=1200:*"
    },
    {
        id: 6,
        marque: "BMW",
        model: "X5",
        year: 2022,
        color: "Gray",
        pricePerDay: 90,
        available: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Wc84tEirgeuBAQUcmYZTTo95gq4sek475-nGPEAk&s"
    },
    {
        id: 7,
        marque: "Audi",
        model: "A4",
        year: 2021,
        color: "Silver",
        pricePerDay: 80,
        available: false,
        image: "https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c520-d355/content/medias/images/cars/audi/a4/audi--a4--2021/audi--a4--2021-m-1.jpg"
    },
    {
        id: 8,
        marque: "Mercedes-Benz",
        model: "C-Class",
        year: 2022,
        color: "Blue",
        pricePerDay: 95,
        available: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTeX7Ny6K8lQcO2y94jgyxijRdR2RewNx9O5jo0Iok&s"
    },
    {
        id: 9,
        marque: "Hyundai",
        model: "Elantra",
        year: 2021,
        color: "White",
        pricePerDay: 42,
        available: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrWIE0LoXeO20vuHIcvT26tc1VIHR3P33i4X7wtM9AQ&s"
    },
    {
        id: 10,
        marque: "Kia",
        model: "Sportage",
        year: 2020,
        color: "Red",
        pricePerDay: 60,
        available: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqAFNBo6e3SCxjfTy5NX3IXyNs_ONH1ceLLMHtstFPA&s"
    },
];
