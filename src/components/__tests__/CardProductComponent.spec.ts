import { describe, it, expect } from 'vitest';
import CardProductComponent from '@/components/CardProductComponent.vue';
import { mount } from '@vue/test-utils';
import router from '@/router';

describe('Component Test', () => {
  const wrapper = mount(CardProductComponent, {
    global: {
      plugins: [router],
    },
    props: {
      product: {
        name: 'Produto Teste',
        price: 100.0,
        description: 'Testar',
        likes: 10,
        id: 1,
        category_id: 1,
        sales: 20,
        image: '',
      },
    },
  });

  it('should redirect to product page when name is clicked', async () => {
    await wrapper.find('[data-testid=product-link]').trigger('click');
  });
});
