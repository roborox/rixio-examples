import { Rx } from "@rixio/rxjs-react"
import React from "react"
import { from } from "rxjs"
import { delayPromise, getRandomNumber } from "../data/common"
import { delay } from "rxjs/operators"
import { CacheImpl, idleCache } from "@rixio/rxjs-cache"
import { Person } from "../data/person"
import { Atom } from "@rixio/rxjs-atom"
import { getRandomActor } from "../data/actors"
import { RxDisplayPerson } from "./common"

const personCache = new CacheImpl<Person>(Atom.create(idleCache), () => delayPromise(500).then(getRandomActor))

export function RxTab() {
	return (
		<>
			<div style={{ paddingBottom: 10 }}>
				Rx component has pending and rejected too. value$ prop can receive single observable or array. Also check type
				of children prop
			</div>
			<div>
				<Rx value$={from(getRandomNumber(500))} pending="isn't rendered"/>
			</div>
			<div>
				<Rx value$={[from(getRandomNumber(500)).pipe(delay(500)), from(getRandomNumber(500))]} pending="wait for it">
					{([value1, value2]) => <span>value1: {value1}; value2: {value2}</span>}
				</Rx>
			</div>
			<div style={{ paddingBottom: 10, paddingTop: 10 }}>
				Rx can be used to show children when observable emits the value. It shows pending while waiting for the value
			</div>
			<div>
				<Rx value$={personCache} pending="Wait for content to load">
					<RxDisplayPerson person={personCache}/>
				</Rx>
			</div>
		</>
	)
}
