import { Dialog } from "radix-ui";
import { Modal } from "../../atoms/Modal/Modal";

export const ProductCard = ({ product, addToCart }) => {
  const { title, thumbnail, description, price } = product;
  return (
    <div className='col-span-12 md:col-span-4 lg:col-span-3 flex flex-col items-centre shadow-md'>

      <Dialog.Root>
        <Dialog.Trigger className="cursor-pointer">
          <img src={thumbnail} alt={title} />
        </Dialog.Trigger>

        <Modal title={title}>
          <div className="flex flex-col items-center pt-2 h-[95%] justify-between">
            <img src={thumbnail} alt={title} />
            <p aria-label='description'>{description}</p>

            <div className="flex justify-between w-full pt-5">
              <span aria-label='price'>£{price}</span>
              <Dialog.Close asChild>
                <button onClick={() => addToCart(product)}
                  className="cursor-pointer"
                  data-testid='ProductCardAddButton'>
                  Add to cart
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Modal>
      </Dialog.Root>

      <div className='w-full flex justify-around'>
        <span className='pr-1' aria-label='item name' data-testid='ProductCardTitle'>{title}</span>
        <div>
          <span className='pr-2' aria-label='price' data-testid='ProductCardPrice'>£{price}</span>
        </div>
      </div>
    </div>);
};

