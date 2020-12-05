import React from "react"
import { CacheImpl, idleCache } from "@rixio/rxjs-cache"
import { Atom } from "@rixio/rxjs-atom"
import { Person } from "../data/person"
import { getRandomActor } from "../data/actors"
import { RxWrapper } from "@rixio/rxjs-react"
import { DisplayPerson, DisplayPersonProps } from "./common"
import { delayPromise } from "../data/common"

const personCache = new CacheImpl<Person>(Atom.create(idleCache), () => delayPromise(500).then(getRandomActor))

export function Cache() {
	return (
		<>
			<div style={{paddingBottom: 10}}>Cache is observable. it means you can use it pretty the same way as other observable. See how result is cached (switch to other tab and back here)</div>
			<RxWrapper<DisplayPersonProps> component={DisplayPerson} person={personCache}/>
		</>
	)
}
