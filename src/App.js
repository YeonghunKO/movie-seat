import MovieContainer from './components/movieContainer.js';
import Seats from './components/seats.js';
import Results from './components/result.js';

import { setItem, getItem } from './utils/storage.js';
import { allSeats } from './utils/doms.js';
import { isChangedState, isValidate } from './utils/validate.js';
import { STATE_KEY } from './utils/constants.js';

export default function App() {
  this.state = {
    selectedMovieIndex: null,
    selectedMovieTicketPrice: null,
    selectedSeatsIndexArr: [],
  };

  const populateUI = () => {
    const selectedMovieIndex = getItem('selectedMovieIndex', null);
    const selectedMovieTicketPrice = getItem('selectedMovieTicketPrice', null);
    const selectedSeatsIndexArr = getItem('selectedSeatsIndexArr', []);
    this.setState({
      selectedMovieIndex,
      selectedMovieTicketPrice,
      selectedSeatsIndexArr,
    });
  };

  const setMovieData = () => {
    setItem('selectedMovieIndex', this.state.selectedMovieIndex);
    setItem('selectedMovieTicketPrice', this.state.selectedMovieTicketPrice);
    setItem('selectedSeatsIndexArr', this.state.selectedSeatsIndexArr);
  };

  const onChangeMovie = (event = null) => {
    if (event) {
      this.setState({
        ...this.state,
        selectedMovieTicketPrice: +event.target.value,
        selectedMovieIndex: event.target.selectedIndex,
      });
    }
  };

  const onClickSeats = (e = null) => {
    const selectedSeat = e.target;
    if (
      selectedSeat.classList.contains('seat') &&
      !selectedSeat.classList.contains('occupied')
    ) {
      selectedSeat.classList.toggle('selected');

      const selectedSeats = document.querySelectorAll('.row .seat.selected');
      const selectedSeatsIndexArr = [...selectedSeats].map(seat =>
        [...allSeats].indexOf(seat)
      );
      this.setState({ ...this.state, selectedSeatsIndexArr });
    }
  };

  const movieContainer = new MovieContainer({
    initialState: {
      selectedMovieIndex: this.state.selectedMovieIndex,
    },
    onChangeMovie,
  });

  const seats = new Seats({
    initialState: this.state.selectedSeatsIndexArr,
    onClickSeats,
  });

  const results = new Results({
    initialState: {
      selectedSeatsIndexArr: this.state.selectedSeatsIndexArr,
      selectedMovieTicketPrice: this.state.selectedMovieTicketPrice,
    },
  });

  this.setState = nextState => {
    if (isValidate(nextState)) {
      const currState = this.state;
      const needRender = isChangedState(currState, nextState);
      this.state = nextState;

      movieContainer.setState({
        selectedIndex: this.state.selectedMovieIndex,
      });

      seats.setState({ selectedSeats: this.state.selectedSeatsIndexArr });

      results.setState({
        selectedSeatsIndexArr: this.state.selectedSeatsIndexArr,
        selectedMovieTicketPrice: this.state.selectedMovieTicketPrice,
      });

      this.render(needRender);
    }
  };

  this.render = needRender => {
    needRender.forEach(renderType => {
      switch (renderType) {
        case STATE_KEY.SELECTED_MOVIE_INDEX:
          // console.log('movieContainer');
          movieContainer.render();
          break;
        case STATE_KEY.SELECTED_MOVIE_TICKET_PRICE:
          // console.log('results');
          results.render();
          break;
        case STATE_KEY.SELECTED_SEATS_INDEX_ARR:
          // console.log('seats and results');
          seats.render();
          results.render();
          break;
        default:
          throw new Error('invalid renderType');
      }
    });
  };

  populateUI();

  window.addEventListener('beforeunload', e => {
    setMovieData();
  });
}
