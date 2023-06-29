import { useClientStore } from '@/stores/ClientStore';
import { CartService } from '@/http/services/CartService';
import router from '@/router';

const addProductToCart = async (id: number) => {
  const clientStore = useClientStore();
  if (clientStore.data?.cart.id) {
    const cart_id = clientStore.data.cart.id;
    CartService.addProductToCart({ product_id: id, cart_id: cart_id });

    const { data } = await CartService.getCart(cart_id);
    clientStore.data.cart = data;
  } else {
    router.push('/auth/login');
  }
};

export { addProductToCart };
