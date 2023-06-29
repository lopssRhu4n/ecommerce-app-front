import AxiosClient from '../clients/AxiosClient';

const categoryResource = '/category/';

export const CategoryService = {
  getCategory(id: number) {
    return AxiosClient.get(categoryResource + id);
  },

  getAllCategoriesPreview() {
    return AxiosClient.get(categoryResource);
  },
};
