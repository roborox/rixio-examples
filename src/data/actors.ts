import { Person } from "./person"

export const actors: Person[] = [
	{ firstName: "Jack", lastName: "Nicholson" },
	{ firstName: "Al", lastName: "Pacino" },
	{ firstName: "Dustin", lastName: "Hoffman" },
	{ firstName: "Tom", lastName: "Hanks" },
	{ firstName: "Brad", lastName: "Pitt"}
]

export async function getRandomActor(): Promise<Person> {
	return actors[Math.floor(Math.random() * actors.length)]
}
