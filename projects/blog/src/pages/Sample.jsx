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

        <Carousel delay={1000}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </Carousel>
        <Reference />
        <Watch />
      </div>
    );
  }
}

export default Sample;
