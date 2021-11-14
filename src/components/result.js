import { count, totalPrice } from '../utils/doms.js';

export default function Results({ initialState }) {
  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
  };

  this.render = () => {
    const { selectedSeatsIndexArr, selectedMovieTicketPrice } = this.state;
    count.innerText = selectedSeatsIndexArr.length;
    totalPrice.innerText =
      selectedSeatsIndexArr.length * selectedMovieTicketPrice;
  };
}
