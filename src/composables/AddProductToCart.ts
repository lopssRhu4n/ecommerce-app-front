import { useUserStore } from '@/stores/UserStore';
import { CartService } from '@/http/services/CartService';
import router from '@/router';

const addProductToCart = async (id: number) => {
  const userStore = useUserStore();
  if (userStore.data?.client.cart.id) {
    const cart_id = userStore.data.client.cart.id;
    CartService.addProductToCart({ product_id: id, cart_id: cart_id });

    const { data } = await CartService.getCart(cart_id);
    userStore.data.client.cart = data;
  } else {
    router.push('/auth/login');
  }
};

export { addProductToCart };
