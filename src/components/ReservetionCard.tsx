import { useId } from "react";
import { useDispatch } from "react-redux";

import { addCustomer } from "../redux/CustomerSlice";
import { removeReservetion } from "../redux/ReservetionSlice";

type Props = {
    name: String;
    index: number;
}

const ReservetionCard = ({ name, index }: Props) => {
    const id = useId();
    const dispatch = useDispatch();

    const handleRemoveReservetion = () => {
        dispatch(removeReservetion(index));
        dispatch(addCustomer({
            id,
            name,
            food: []
        }));
    }
    
    return <div className="reservation-card-container" onClick={handleRemoveReservetion} title={`Remover a reserva de "${name}"(a)`}>{name}</div>; 
}

export default ReservetionCard;