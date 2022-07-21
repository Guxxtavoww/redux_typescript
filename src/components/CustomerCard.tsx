import { useState } from "react";
import { useDispatch } from "react-redux";

import { addFoodtoCustomer } from "../redux/CustomerSlice";

type Props = {
    id: any;
    name: String;
    foods: string[];
}

const CustomerCard = ({ id, name, foods }: Props) => {
    const [ food, setFood ] = useState("");

    const dispatch = useDispatch();

    const handleAddFood = () => {
        if(food === "") return;
        dispatch(addFoodtoCustomer({ id, food}));
        setFood("");
    }

    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    { 
                        foods?.map((food, index) => (
                            <p key={index}>{food}</p>
                        )) 
                    }
                </div>
                <div className="customer-food-input-container">
                    <input type="text" placeholder="Pratos Desejados..." onChange={e => setFood(e.target.value)} value={food} />
                    <button onClick={handleAddFood}>Adicionar</button>
                </div>
            </div>
        </div>
    );
}

export default CustomerCard;