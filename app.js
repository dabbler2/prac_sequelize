const {A,B} = require('./models/')

let f = async (name) => {
	await A.create({name})
}

let g = async (name) => {
	await B.create({name})
}

// model에 aID 없음
// g(4,5) -> 당연히 씹힘

// model에 aID 있음
// g(6,7) -> a에 id가 7인 행이 없어서 에러
// g(6,1) -> ㅇㅋ

// model에 이상한 열 있음
// g(11) -> 이상한 열 그냥 무시함