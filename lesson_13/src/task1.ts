//Задача 4. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

const boys: string[] = ['Ivan', 'Stepan', 'Petro']

const girls: string[] = ['Olga', 'Ivanna', 'Inna']

function getDancePairs(boys: string[], girls: string[]) {

	for (let i = 0; i < boys.length; i++) {
		for (let j = 0; j < girls.length; j++){
			console.log(`${boys[i]} танцює з ${girls[j]}`);

		}
	}
}
getDancePairs(boys, girls);

