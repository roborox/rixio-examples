import React, { useMemo } from "react"
import { getRandomActor } from "../data/actors"
import { from } from "rxjs"
import { delay } from "rxjs/operators"
import { RxWrapper } from "@rixio/rxjs-react"
import { DisplayPerson } from "./common"


export function Wrapper() {
	const actor$ = useMemo(() => from(getRandomActor()).pipe(delay(500)), [])
	return (
		<>
			<div style={{paddingBottom: 10}}>RxWrapper allows you to convert simple components to reactive. Also check pending and rejected props</div>
			<RxWrapper component={DisplayPerson} person={actor$} pending={<span>Loading...</span>} />
		</>
	)
}
