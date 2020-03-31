<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="支付日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="product"
                    label="商品名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="数量"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="total"
                    label="价格"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
            width="200">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="订单状态"
                    width="150">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Axios from "axios"
    export default {
        created(){
            let data = JSON.parse(sessionStorage.getItem('data'))
            var username=data.username;
            var url="http://localhost:3000/api/user/getuserorder?username="+username;
            Axios.get(url).then(function (responese) {
                console.log(responese.data);
            })

        },
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },


        name: "info"
    }
</script>

<style scoped>

</style>