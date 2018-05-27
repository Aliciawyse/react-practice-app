import { targets } from '../target-data';

export function fetchTargets(){
    return dispatch => {
        dispatch({
            type: 'FETCH_TARGETS',
            payload: targets
        })
    }
}