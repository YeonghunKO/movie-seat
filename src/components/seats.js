import { seatsContainer, allSeats } from '../utils/doms.js';

export default function Seats({ initialState, onClickSeats }) {
  this.state = initialState;
  this.setState = nextState => {
    this.state = nextState;
  };

  this.render = () => {
    const { selectedSeats } = this.state;
    if (selectedSeats && selectedSeats.length > 0) {
      allSeats.forEach((seat, seatIndex) => {
        if (selectedSeats.indexOf(seatIndex) > -1) {
          seat.classList.add('selected');
        }
      });
    }
  };
  seatsContainer.addEventListener('click', onClickSeats);

  this.render();
}
