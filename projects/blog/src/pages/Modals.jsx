import { useState } from 'react';
import Modal from '../library/Modal';
import Button from '../library/Button';

/**
 * A component that displays a list of modals.
 *
 * @returns {React.Component}
 */
function Modals() {
  const [modals, setModals] = useState([
    {
      title: 'Modal 1',
      description: 'This is a modal',
      image:
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXp6MmxnNnhnYml5ZXF0eWJkcWw1NGlma2VkNHRmOWdsY203MndpdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif',
      delay: 1000,
      isOpen: false,
    },
    {
      title: 'Modal 2',
      description: 'This is a modal 2',
      image:
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2RpbWtwMTFsYzBycXNsbmdnZDE5MzZpcmUxc3JvOHhkNWhyN2FjaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iVddRfGnwPd4TnZFpo/giphy.gif',
      delay: 2000,
      isOpen: false,
    },
  ]);

  const getRandomImage = () => {
    const randomId = Math.floor(Math.random() * 300) + 1;
    return `https://picsum.photos/id/${randomId}/200/300`;
  };

  const handleOpenModal = (index) => {
    const newModals = [...modals];
    newModals[index].isOpen = true;
    setModals(newModals);
  };

  const handleCloseModal = (index) => {
    const newModals = [...modals];
    newModals[index].isOpen = false;
    setModals(newModals);
  };

  const handleRandomizeImage = (index) => {
    const randomImage = getRandomImage();
    console.log('Get random image:', randomImage);
    const newModals = [...modals];
    newModals[index].image = randomImage;
    setModals(newModals);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold py-4">Modal</h1>
      <div className="flex flex-row gap-2">
        {modals.map((modal, index) => (
          <div key={index}>
            {modal.isOpen && (
              <Modal
                modal={modal}
                onClose={() => handleCloseModal(index)}
                onRandomize={() => handleRandomizeImage(index)}
              >
                <div>Copyright {new Date().getFullYear()} by Agung Sundoro</div>
              </Modal>
            )}
            <Button onClick={() => handleOpenModal(index)} className="bg-blue-500">
              Open {modal.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modals;
