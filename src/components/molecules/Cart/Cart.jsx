import { Modal } from "../../atoms/Modal/Modal";

export const Cart = ({ items = {} }) => {
  return (
    <Modal title='Your cart'>
      {Object.values(items).length ?
        Object.values(items).map(item => {
          const { product, count } = item;

          return (
            <div className="flex justify-between w-full pt-2" key={product?.id}>

              <span> {product?.title}</span>
              <span> {count}</span>
            </div>);
        }) :
        <p className="pt-5">No items in your cart</p>
      }

    </Modal>
  );
};

