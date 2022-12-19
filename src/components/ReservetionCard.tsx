import React, { useId } from "react";
import { useDispatch } from "react-redux";

import { addCustomer } from "../redux/CustomerSlice";
import { removeReservetion } from "../redux/ReservetionSlice";

interface Props {
  name: string;
  index: number;
}

const ReservetionCard: React.FC<Props> = ({ name, index }) => {
  const id = useId();
  const dispatch = useDispatch();

  const handleRemoveReservetion = () => {
    dispatch(removeReservetion(index));
    dispatch(
      addCustomer({
        id,
        name,
        food: [],
      })
    );
  };

  return (
    <div
      className="reservation-card-container"
      onClick={handleRemoveReservetion}
      title={`Remover a reserva de "${name}"(a)`}
    >
      {name}
    </div>
  );
};

export default ReservetionCard;
