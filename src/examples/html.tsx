/* eslint-disable react/jsx-pascal-case */
import React, { useCallback } from "react"
import { forkJoin, from, of } from "rxjs"
import { delay, map } from "rxjs/operators"
import { Atom } from "@rixio/rxjs-atom"
import { Rx, useRxOrThrow } from "@rixio/rxjs-react"

const value = Atom.create<string>("")
const rx$ = from(Promise.resolve()).pipe(
	delay(500),
	map(() => {
		const v = value.get()
		if (v !== "") {
			return v
		} else {
			throw new Error("Is zero")
		}
	}),
)
const combined$ = forkJoin({ rx: rx$, value: of(10) })

export function Html() {
	return (
		<>
			<div>
				<Input value={value}/>
				<br/>
				Value:
				<Rx value$={combined$} rejected={(e, reload) => (<button onClick={() => reload()}>reload</button>)} pending="loading...">
					{(value) => value.rx + "_" + value.value}
				</Rx>
			</div>
		</>
	)
}

function Input({ value }: { value: Atom<string> }) {
	const text = useRxOrThrow(value)
	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => value.set(e.target.value), [value])
	return <input value={text} type="text" onChange={onChange}/>
}
