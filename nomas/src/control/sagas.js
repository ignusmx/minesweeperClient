import { takeEvery } from "redux-saga/effects"
import * as types    from "./../control/actionTypes"

const handleNewMessage = function* handleNewMessage(params)
{
	yield takeEvery(types.ADD_MESSAGE, (action) =>{params.socket.send(JSON.stringify(action))})
}

export default handleNewMessage
