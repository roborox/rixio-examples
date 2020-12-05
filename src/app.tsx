import { Atom } from '@rixio/rxjs-atom'
import React from 'react'
import { Html } from "./examples/html"
import { Wrapper } from "./examples/wrapper"
import { Cache } from "./examples/cache"
import { Rx } from "@rixio/rxjs-react"
import { Observable } from "rxjs"
import { map } from 'rxjs/operators'
import { RxTab } from "./examples/rx"

export const tabs = {
	html: Html,
	wrapper: Wrapper,
	cache: Cache,
	rx: RxTab,
}

type Tab = keyof typeof tabs
const keys = Object.keys(tabs) as Array<Tab>
const tab$ = Atom.create<Tab>("html")

export function App() {
	return (
		<div>
			{keys.map(tab => <TabSelector key={tab} tab={tab}/>)}
			<div><Tabs tab$={tab$}/></div>
		</div>
	)
}

function TabSelector({ tab }: { tab: Tab }) {
	return <button onClick={() => tab$.set(tab)}>{tab}</button>
}

function Tabs({ tab$ }: { tab$: Observable<Tab> }) {
	return <Rx value$={tab$.pipe(map(tab => React.createElement(tabs[tab])))}/>
}

