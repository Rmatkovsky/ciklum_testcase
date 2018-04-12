import Base from './config/Base';

import ep from '../constants/endPoints.constant';

class ProductAPI extends Base {

    getAll() {
        const url = ep.products.all();
        return this.apiClient.get(url);
    }
}

export default ProductAPI;
