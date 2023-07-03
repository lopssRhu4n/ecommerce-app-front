import { vi } from 'vitest';

// const categoryResource = '/category/';

export const CategoryService = {
  getCategory(id: number) {
    return vi.fn().mockResolvedValue({ name: 'test', description: 'testing', id });
  },

  getAllCategoriesPreview() {
    return vi.fn().mockResolvedValue([
      { name: 'test1', description: 'testing', id: 1 },
      { name: 'test2', description: 'testing', id: 2 },
    ]);
  },
};
