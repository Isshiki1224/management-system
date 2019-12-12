// import Mock from 'mockjs';
const Mock = require ( 'mockjs' );
const h = `http://localhost:5233`
const role = { admin : 5233 , tourist : 5232 , users : 5231 , other : 5230 }
const home = function ( r ) {
    let b = JSON.parse ( r.body );
    let u = b.username;
    let userrole;
    let userid;
    if ( role.hasOwnProperty ( u ) ) {
        userrole = role[ u ];
        userid = `userid_${u}`;
    } else {
        userrole = role.other;
        userid = `userid_other`;
    }
    let res = {
        data : { username : Mock.mock ( `@name` ) , userrole , userid , token : Mock.mock ( `@String(30)` ) } ,
        code : 0 , message : "登录成功"
    }
    return res;
}
Mock.mock ( h + `/user/login` , 'post' , home );
export default Mock;