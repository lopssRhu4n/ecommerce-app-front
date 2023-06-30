import { describe, it, expect, vi } from 'vitest';
import MainHeader from '@/components/layout/MainHeader.vue';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useClientStore } from '@/stores/ClientStore';
import router from '@/router';

describe('MainHeader', () => {
  const wrapper = mount(MainHeader, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn() }), router],
    },
  });

  const clientStore = useClientStore();

  clientStore.data = {
    id: 1,
    name: 'testing',
    email: 'testing',
    cpf: 1234567810,
    phone: 'sla',
    birthdate: 'sla',
    cart: {
      id: 1,
      amount: 0,
      shipping: 0,
      discount: 0,
      products: [
        {
          name: 'Qualquer coisa',
          id: 1,
          description: '',
          price: 0,
          category_id: 1,
          likes: 0,
          sales: 0,
          image: '',
        },
      ],
    },
  };

  it('should show cart when client store is not empty', () => {
    expect(wrapper.html()).toContain('Cart');
  });

  it('should toggle cart view when clicking cart button', async () => {
    await wrapper.find('[data-testid=cart-toggle]').trigger('click');
    expect(wrapper.find('[data-testid=cart-preview]').text()).toContain('Amount');
  });

  it('should toggle categories preview when clicking categoires button', async () => {
    await wrapper.find('[data-testid=categories-toggle]').trigger('click');
    expect(wrapper.find('[data-testid=categories-preview]').text()).toContain('');
  });
});
