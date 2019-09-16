
import produce from 'immer';
import { object } from 'prop-types';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './userAction';


interface action {
    data: string
}

const initialState = {
    user: null,
    isLoging: false,
}


export default (state = '', action: action) => {
    return produce(state, draft => {
        switch (action.data) {
            case USER_LOGIN_REQUEST: {

                break;
            };
            case USER_LOGIN_SUCCESS: {
                draft.user = action.data
            }
            default: return draft;
        }
    })
};
