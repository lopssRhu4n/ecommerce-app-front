import { describe, it, expect, vi } from 'vitest';
import MainHeader from '@/components/layout/MainHeader.vue';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useClientStore } from '@/stores/ClientStore';

describe('MainHeader', () => {
  const wrapper = mount(MainHeader, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn() })],
    },
  });

  const clientStore = useClientStore();

  clientStore.data = {
    name: 'testing',
    email: 'testing',
    cpf: 'sla',
    phone: 'sla',
    password: 'sla',
    birthdate: 'sla',
  };

  it('should show cart when client store is not empty', () => {
    expect(wrapper.html()).toContain('Cart');
  });
});
