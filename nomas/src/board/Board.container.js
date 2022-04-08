import {connect}      from "react-redux"
import BoardComponent from "./../board/Board"

export const Board = connect(state => ({messages: state.messages}), {})(BoardComponent)
