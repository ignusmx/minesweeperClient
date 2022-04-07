import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import {addMessage} from '../actions'

const MessagesList = ({messages})=>
{
	console.log(messages);

	return <section id="display">
		<Message{...messages[messages.length - 1]}/>
	</section>
}

MessagesList.propTypes={
	messages : PropTypes.arrayOf
	(
		PropTypes.shape
		({
			id       : PropTypes.number.isRequired,
			message  : PropTypes.any,
		}).isRequired
	).isRequired
}

export default MessagesList
