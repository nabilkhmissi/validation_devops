import { Car } from "../models/car.model"

type Prop = {
    car: Car
}


export default function CardCard({ car }: Prop) {
    return (
        <div className="car-card">
            <div className="car-image">
                <img src={car.image} alt="" />
            </div>
            <div className="card-body">
                <div className="rating">
                </div>
                <h3>{car.marque}</h3>
                <div className="details">
                    <p>Model : {car.model} </p>
                    <p>Color : {car.color} </p>
                </div>
                <div className="card-footer">
                    <h3>${car.pricePerDay}/day </h3>
                    <button style={car.available ? { backgroundColor: '#FF5C3D' } : {}}>Rent Now</button>
                </div>
            </div>
        </div>
    )
}