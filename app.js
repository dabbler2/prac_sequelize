const {Team,Player} = require('./models/')

let makeTeam = async (teamName) => await Team.create({teamName})
let makePlayer = async (playerName,teamID) => await Player.create({playerName,teamID})

let allPlayers = async () => { 
	const table = await Player.findAll({})
	console.log(table.map(x => x.dataValues))
}

let join = async () => { 
	const table = await Player.findAll({include: Team})
	console.log(table.map(x => x.dataValues))
}

let join2 = async () => { 
	const table = await Team.findAll({include: Player})
	console.log(table.map(x => x.dataValues))
}

(async () => {
	await makeTeam('Twins') // id: 1
	await makeTeam('Wiz') // id: 2
	await makePlayer('Oh',1)
	await makePlayer('Park',1)
	await makePlayer('Bae',2)
	await makePlayer('Hwang',2)
	await makePlayer('Choi',3)
    await allPlayers()
	await join()
	await join2()
})()