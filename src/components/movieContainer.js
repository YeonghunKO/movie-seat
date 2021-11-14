import { movie } from '../utils/doms.js';

export default function MovieContainer({ initialState, onChangeMovie }) {
  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
  };

  this.render = () => {
    const { selectedIndex } = this.state;

    if (selectedIndex) {
      movie.selectedIndex = this.state.selectedIndex;
    }
  };

  movie.addEventListener('change', onChangeMovie);
}
