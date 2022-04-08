import * as types from "./../control/actionTypes"

let nextMessageId = 0

export const addMessage = (message)=>
({
	type : types.ADD_MESSAGE,
	id   : nextMessageId++,
	message
})

export const messageReceived = (message)=>
({
	type : types.MESSAGE_RECEIVED,
	id   : nextMessageId++,
	message
})
