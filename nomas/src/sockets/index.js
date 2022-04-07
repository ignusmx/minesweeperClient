import React from 'react'
import * as types from '../constants/ActionTypes'
import { messageReceived, populateUsersList, addMessage } from '../actions'

const setupSocket = (dispatch) => {
  const socket = new WebSocket('wss://hometask.eg1236.com/game1/')

  socket.onopen = () =>
  {
	  dispatch
	  (
			 messageReceived
			(
				<div>
					<span>
						Difficulty Level
					</span>
					<div>
						<button style={{width : 100,height : 100}} onClick={()=>socket.send("new 1")}><h1>1</h1></button>
						<button style={{width : 100,height : 100}} onClick={()=>socket.send("new 2")}><h1>2</h1></button>
						<button style={{width : 100,height : 100}} onClick={()=>socket.send("new 3")}><h1>3</h1></button>
						<button style={{width : 100,height : 100}} onClick={()=>socket.send("new 4")}><h1>4</h1></button>
					</div>
				</div>
			)
	)
  }

  socket.onmessage = (event) => {
    const data = event;
	console.log(data);
    /*switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }*/
  }

  return socket
}

export default setupSocket
