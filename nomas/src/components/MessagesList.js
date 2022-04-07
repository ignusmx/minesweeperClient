import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import {addMessage} from '../actions'

const MessagesList = ({ messages }) => {
	console.log(messages);

	/*if(messages.length < 1)
	{
		return <button onClick={addMessage("new 1")}>x</button>
	}*/

  return <section id="messages-list">
    <ul>
      {messages.map(message => (
        <Message
          key={message.id}
          {...messages[messages.length - 1 ]}
        />
    ))}
    </ul>
  </section>
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.any.isRequired,
  }).isRequired).isRequired
}

export default MessagesList
