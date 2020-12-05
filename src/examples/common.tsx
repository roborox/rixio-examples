import { Person } from "../data/person"
import React from "react"
import { lift } from "@rixio/rxjs-react"

export type DisplayPersonProps = {
	person: Person
}

export function DisplayPerson({ person: { firstName, lastName } }: DisplayPersonProps) {
	return (
		<>
			<div>First Name: {firstName}</div>
			<div>Last Name: {lastName}</div>
		</>
	)
}

export const RxDisplayPerson = lift(DisplayPerson, {
	pending: "Wait, please",
	rejected: "Oops",
})
