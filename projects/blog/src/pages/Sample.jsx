import { Component } from 'react';
import Carousel from '../components/Carousel';
import Reference from '../components/Reference';
import Watch from '../components/Watch';

/**
 * A component that displays sample content.
 *
 * @returns {React.Component}
 */
class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-4xl font-bold py-4">Samples</h1>

        <Carousel />
        <Reference />
        <Watch />
      </div>
    );
  }
}

export default Sample;
