// sql语句

var sqlMap = {
    user: {
        add: 'insert into account values (null,?,?,null)',
        checkuser:"select * from account where username=? and userpassword=?",
        getimg:"select imgpath from account where username=? and userpassword=?",
        searchhot:"select * from produtionview where proName like '%%'",
        userdata:'insert into userform values(null,?,?,?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,?)',
        getcurrentuser:"select * from userform where username=?"
    },
    admin:{
        getdata:"select * from userform",
        edit:"UPDATE userform SET status=?, username = ?, useraddress=? , productamout=? WHERE orders=? and userproduct=?",
        del:"delete from userform where orders=? and userproduct=?",
    }

}

module.exports = sqlMap