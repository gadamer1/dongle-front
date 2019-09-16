import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { USER_LOGIN_REQUEST } from '../reducers/user/userAction';

const Login = () => {
    const [id, setId] = useState('');
    const dispatch = useDispatch();

    const onSubimtForm = useCallback(() => {
        dispatch({
            type: USER_LOGIN_REQUEST,
            data: {
                id,
            }
        })
    }, [id]);

    return (
        <form onSubmit={onSubimtForm}>
            <input value={} onChange={() => { }} />
        </form>

    )
}