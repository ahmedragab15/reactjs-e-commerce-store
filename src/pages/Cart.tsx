import { Heart, Trash2 } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../components/context/CartContext";
import toast from "react-hot-toast";

const Cart = () => {
  const { cartItems, removeCartItem } = useContext(CartContext);

  const handleRemoveFromCart = (id: number) => {
    removeCartItem({ id });
    toast.success("Item removed from cart");
  };
  return (
    <>
      <main className="container mx-auto py-10 space-y-10 mt-37">
        <section className="cart-items"></section>
        <div className="space-y-2 px-4">
          <h3 className="text-2xl font-medium ">
            <span className="cart-count">{cartItems.length}</span> Items in your cart
          </h3>

          <p className="max-w-xl">all the items aded into the basket or cart is listed out here! you can add more items or remove the one youre not conortable with</p>
        </div>
        <section className="cart-items">
          <div className="head hidden sm:flex flex-row justify-between items-center gap-2 py-1 px-20 border-b border-gray-200">
            <h3 className="font-medium">ITEMS</h3>
            <div className="flex gap-20">
              <h3 className="font-medium">QUANTITY</h3>
              <h3 className="font-medium">UNIT (PRICE)</h3>
              <h3 className="font-medium">Total</h3>
            </div>
          </div>
          <div className="list py-6 px-14 sm:px-0 space-y-6">
            {cartItems.map((item: { id: number; title: string; image: string; category: string; price: number; quantity: number; total: number }) => (
              <div key={item.id} className="product bg-neutral-100 flex flex-col sm:flex-row justify-evenly items-center gap-1 lg:gap-8 border-y border-gray-200 py-2 rounded-xl">
                <img src={item.image} className="bg-gray-100 w-44 max-w-11/12 h-44 object-center rounded-xl" alt="hero image" />
                <div className="details flex flex-col sm:gap-20">
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="space-y-2">
                    <span className="block font-medium">{item.category}</span>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <span className="text-orange-400 font-medium flex items-center gap-1">
                        <Heart className="cursor-pointer hover:scale-110 duration-200" />
                        Add to wishlist
                      </span>
                      <button
                        className="text-red-500 font-medium hover:text-red-600 cursor-pointer flex items-center gap-1"
                        onClick={() => {
                          handleRemoveFromCart(item.id);
                        }}
                      >
                        <Trash2 /> Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="quantity font-medium space-x-2 lg:space-x-6">
                  <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-xl py-0.5 px-2 lg:px-3 cursor-pointer">-</button>
                  <span className=" lg:text-xl">{item.quantity}</span>
                  <button className="border border-gray-300 bg-neutral-100 hover:bg-neutral-200 lg:text-xl py-0.5 px-2 lg:px-3 cursor-pointer">+</button>
                </div>
                <span className="price lg:text-xl font-medium">${item.price}</span>
                <div className="total-price lg:text-xl font-medium">${item.price * item.quantity}</div>
              </div>
            ))}
          </div>
          <div className="confirmation text-right border-t border-gray-200 py-6 px-4 space-y-3 mt-16">
            <h3 className="text-2xl font-medium">
              Total Amount:{" "}
              <span className="ml-6">
                $
                {cartItems
                  .map((item: { price: number; quantity: number }) => item.price * item.quantity)
                  .reduce((a: number, b: number) => a + b, 0)
                  .toLocaleString()}
              </span>
            </h3>

            <span className="block text-sm mb-8">Delivery fee is not included</span>
            <div className="btns flex flex-col sm:flex-row items-center gap-4">
              <button className="font-medium inline-block ml-auto text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-white cursor-pointer py-2 px-8 rounded-sm">Continue Shopping</button>
              <button className="font-medium inline-block ml-auto sm:ml-0 text-white border bg-orange-400 hover:bg-orange-500 cursor-pointer py-2 px-8 rounded-sm">Proceed to Checkout</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
