# Vuemytest
s1
<p>
Github基础命令

拷贝项目：git clone(仓库地址)

创建分支：git branch（name）

创建并且分支：git checkout -b <branch name>

查看当前分支状态:git status

提交分支步骤:
git add *
git commit -m 'info'

查看所有分支:git branch



关于VUE路由
Vue3.0配置资源文件等入口需要自己创建一个名为vue.config.js文件
s3
router文件架下面的index.js是路由主要作用匹配对应的模板文件（通过主键方式匹配）
关于.vue三个主要内容
1、template
2、script
3、style
关于main.js
主入口
把所有相关资源文件导入后塞进#app的index.html
4、导入前端框架以及jQuery的两种方式
https://www.cnblogs.com/haiyan123/p/8472057.html
5、VH单位基于可视图区域百分比的一种单位
如50vh即可视区域的一半




VUE文件规则

固定内容
template，script，style
template
必须有父元素

script格式：
export defalut{
    name:"home", 
    componets:{}
    data(){return{}},
    created(){},
    mounted(){},
    methods:{},
    props:{},
    watch:{}
}
name:当前名称
Components：组件,引入组件名称，
Data：数据，v—model绑定数据使用
Created：创建完成时操作（生命周期）
Mounted：挂载完成时
Methods：定义函数
Props、watch：子组件接收父组件参数
style中添加scoped可以使组件局部性使用从而不影响全局的组件
created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

绑定class的方法：
:class="{'btn btn-info':isActive}"
格式代表对该class设置一个激活值（isActive 为true时激活引用该样式，false则不引用）

常用方式:
isActive:10 
:class="'btn-info':isActive==1"
10!=1(false,此时不会引用改class)
v-for用于循环生成多种组件（视频渲染方法render）

巨坑玩意：script导入文件时开头一定要加./
解决Vue app占用顶部空白导致背景图铺不满的问题
1.设置#appmargin为0即可



