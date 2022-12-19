import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./redux/store";
import { addReservetion } from "./redux/ReservetionSlice";
import { ReservationCard, CustomerCard } from "./components";

const App: React.FC = () => {
  const [reservation, setReservation] = useState<string>("");

  const dispatch = useDispatch();
  const costumers = useSelector((state: RootState) => state.customers.value);
  const reservetions = useSelector(
    (state: RootState) => state.reservation.value
  );

  const handleNewReservetion = () => {
    if (reservation === "") return;
    dispatch(addReservetion(reservation));
    setReservation("");
  };

  return (
    <div className="app">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservas</h5>
            <div className="reservation-cards-container">
              {reservetions.length ? (
                reservetions?.map((reserva, index) => (
                  <ReservationCard name={reserva} key={index} index={index} />
                ))
              ) : (
                <span>Não Há reservas</span>
              )}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              type="text"
              placeholder="Adicionar uma Reserva"
              onChange={(e) => setReservation(e.target.value)}
              value={reservation}
              autoFocus
            />
            <button onClick={handleNewReservetion}>Adicionar</button>
          </div>
        </div>
        <div className="customer-food-container">
          {costumers.length ? (
            costumers?.map((cliente, index) => (
              <CustomerCard
                name={cliente.name}
                id={cliente.id}
                foods={cliente.food}
                key={index}
              />
            ))
          ) : (
            <span style={{ margin: "1rem" }}>Não há clientes</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
