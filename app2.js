const {A,B} = require('./models/')

let f = async () => {
	const b = await B.findAll({include: A})
	console.log(JSON.stringify(b,null,2))
}

// model에 associate 없으면 
// f() 에러남!

// model에 associate가 있어야
// f() 쿼리 처리가 됨!