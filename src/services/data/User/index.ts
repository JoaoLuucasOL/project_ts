import {IResponseUser, IUserData} from "Interface/user.interface";
import api from 'services/api';

class UserData {
    register(data: IUserData) {
        return api.post<IResponseUser>('/register', data)
    }
    login(data: IUserData) {
        return api.post<IResponseUser>('/login', data)
    }
}

export default new UserData()