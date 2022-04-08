import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ message}) => (
    <div>{message}</div>
)

Message.propTypes = {
  message: PropTypes.any
}

export default Message
