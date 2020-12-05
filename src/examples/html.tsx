/* eslint-disable react/jsx-pascal-case */
import React, { useMemo } from "react"
import { from } from "rxjs"
import { delay } from "rxjs/operators"
import { R } from "@rixio/rxjs-react"
import { getRandomNumber } from "../data/common"

export function Html() {
	const rx$ = useMemo(() => from(getRandomNumber(1000)).pipe(delay(500)), [])
	return (
		<>
			<div style={{paddingBottom: 10}}>Components from R are reactive - every prop (including children) can be Observable. If observable doesn't immediately emit a value, component is not rendered</div>
			<R.div>Random number: {rx$}</R.div>
		</>
	)
}
