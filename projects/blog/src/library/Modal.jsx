import { Component } from 'react';
import { createPortal } from 'react-dom'; // for rendering the modal in the DOM

/**
 * A component that displays a modal.
 *
 * @param {React.Component} Component
 * @returns {React.Component}
 */
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.modalRoot = document.querySelector('.modals');
  }

  componentDidMount() {
    console.log(`✅ ${this.props.modal.title} is mounted, open in ${this.props.modal.delay}ms`);
    this.timer = setTimeout(() => {
      this.setState({ showModal: true });
    }, this.props.modal.delay);
  }

  componentWillUnmount() {
    console.log(`❌ ${this.props.modal.title} is unmounted`);
    clearTimeout(this.timer);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.modal !== this.props.modal) {
      console.log(`🔄 ${this.props.modal.title} is updated`);
    }
  }

  render() {
    const { modal, onClose, onRandomize, children } = this.props;
    const { showModal } = this.state;

    const modalContent = (
      <div
        className="backdrop"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {showModal ? (
          <div className="modal content-center">
            <h3 className="text-2xl font-bold">{modal.title}</h3>
            <p className="text-gray-500">{modal.description}</p>
            <button
              onClick={onRandomize}
              className="cursor-pointer bg-blue-500 text-white px-6 py-2 my-4 shadow-md rounded-md"
            >
              Randomize Image
            </button>
            <img width="200" className="mx-auto" src={modal.image} alt={modal.title} />
            <hr />
            {children}
          </div>
        ) : (
          <div className="loading">
            <img
              width="200"
              className="mx-auto"
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXN0d2d2dTBuenpoOG9lbTd0Z2p2aTV5MmF5dnlyODJjdHZ3cGwyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aSzp02xpRLOhy/giphy.gif"
              alt={modal.title}
            />
            <h1 style={{ color: '#ff0000' }}>Loading...</h1>
          </div>
        )}
      </div>
    );

    return createPortal(modalContent, this.modalRoot);
  }
}

export default Modal;
