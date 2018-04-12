import Base from './config/Base';

import ep from '../constants/endPoints.constant';

class UserAPI extends Base {

    getAll() {
        const url = ep.users.all();
        return this.apiClient.get(url);
    }
}

export default UserAPI;
