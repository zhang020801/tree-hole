'use strict';
exports.main = async (event, context) => {
	
	const db = uniCloud.database();
	const collection = db.collection('uni-id-users');
	
	let res = await collection.where({
		username: event.username,
	}).get()
	
	if(res.affectedDocs == 0){
		return {
			res,
			code:404,
			mag:"数据请求失败"
		}
	}
	return {
		res,
		code:200,
		msg:"数据请求成功"
	}
};

