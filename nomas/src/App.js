import React          from "react"
import {Sidebar}      from "./containers/Sidebar"
import {MessagesList} from "./containers/MessagesList"
import {AddMessage}   from "./containers/AddMessage"
import "./App.css"

const App = ()=>
(
	<div id="container">
		<section id="main">
			<MessagesList />
		</section>
	</div>
)

export default App
