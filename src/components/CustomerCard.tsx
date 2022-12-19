import { useState, FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import { addFoodtoCustomer } from "../redux/CustomerSlice";

interface Props {
  id: string | number;
  name: string;
  foods: string[];
}

const CustomerCard: FC<Props> = ({ id, name, foods }) => {
  const [food, setFood] = useState<string>("");

  const dispatch = useDispatch();

  const handleAddFood = useCallback(() => {
    if (food === "") return;
    dispatch(addFoodtoCustomer({ id, food }));
    setFood("");
  }, [food, dispatch, id]);

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foods?.map((food, index) => (
            <p key={index}>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            type="text"
            placeholder="Pratos Desejados..."
            onChange={(e) => setFood(e.target.value)}
            value={food}
          />
          <button onClick={handleAddFood}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
