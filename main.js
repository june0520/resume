let resume = `# 王亚琼
18610120521 | 1337795879@qq.com 
在线简历： https://june0520.github.io/resume/
Github: https://github.com/june0520
意向岗位 | 前端开发

## 职业技能
- HTML5 & CSS3 & JavaScript & jQuery
    - 能够使用原生 JavaScript 独立制作精美网页, 掌握ES6语法
    - 掌握 CSS3 动画、过渡、弹性盒子布局、媒体查询等响应式设计常用技术
    - 掌握常用jQuery API ，如 DOM 操作、特效、事件等
- Vue
    - 有 Vue 的开发经历，理解 指令、组件、 通讯 、实例属性 及生命周期，理解MVVM思想
    - 掌握核心插件如 vue-router、vue-axios、vuex等,配合Mui和Mint-ui的使用
- Webpack
    - 有使用 Webpack 打包项目的经验，了解其管理资源的方法，常用的一些 loader 等
- 移动端开发
    - 会使用 rem 、 vw / vh 、 媒体查询等技术制作适配手机设备的页面
- 小程序
    - 使用 mpvue 框架开发微信小程序项目
- python
    - 掌握 Django Web框架，掌握其MVT核心思想
    - 掌握Scrapy爬虫框架的基本使用，了解Selenium无头浏览器的基本操作    
- Mysql
    - 熟悉 Mysql 关系型数据库的基本操作
- 其他
    - PhotoShop的熟练操作
    - Charles抓包工具的使用
    - Git 代码管理工具

## 项目经验
### Vue移动端应用 - 小瓶盖
- 关键词：\`Vue\`、\`vueX\`、\`Mint UI\`、\`vue-router\`、\`vue-axios\`、\`webpack\`、\`组件通讯\`、\`生命周期\`
- 源码链接：https://github.com/june0520/vue-program-xiaopinggai
- 预览链接：https://june0520.github.io/vue-xiaopinggai-preview/#/home
- 描述：这是一个用 Vue + Mint-ui 制作的移动端应用，包括新闻资讯、图片分享、模拟商场、购物车、Ai聊天，利用canvas生成海报保存到本地相册，登录注册表单验证功能等页面；使用 跨域 请求实现数据加载，使用路由懒加载技术，图片懒加载技术，VueX实现购物车，全局过滤器、拦截器 及页面过渡动画 ,localStorage等技术。

### PC网站及对应移动端H5
- 关键词：\`JavaScript\`、\`CSS3\`、\`HTML5\`、\`Vue\`、\`jQuery\`
- 源码链接：https://github.com/june0520/website-PC
- 预览链接：https://june0520.github.io/website-PC/
- 描述：该项目PC端使用原生JavaScript及HTML搭建实现服务器端渲染，对SEO友好；移动端使用Vue框架搭建。

### 小程序 - 地球脉动
- 关键词：\`mpVue\`、\`Canvas\`、\`vx接口\`、\`生命周期\`、\`CSS3\`
- 源码链接：https://github.com/june0520/mpVue-plant-Earth
- 描述：这个项目是用美团出品的 mpvue 小程序框架制作的关于地震信息展示的小程序。实现基本用户授权信息认证，CSS3动画展示及利用Canvas将用户头像结合页面生成图片并保存到本地。

### 业务报表
- 关键词：\`Canvas\`、\`SVG\`、\`location.hash\`、\`localStorage\`、\`jQuery\`、\`ES6\`
- 源码链接：https://github.com/june0520/baidu-31-41day/tree/master/check-box-model
- 描述：本项目是MIS系统中的一个简单的页面示例，分别用Canvas和SVG制作的折线图和柱状图，运用本地储存保存数据，动态生成图表。

### Scrapy 爬取image.so.com
- 关键词：\`Python\`、\`Scrapy\`、\`Mysql\`
- 源码链接：https://github.com/june0520/webspider-scrapy-images360
- 描述：此项目是一个利用Scrapy爬取image.so.com网站图片，并将爬取到的图片数据保存到MySql数据库中。

## 工作经历 
### 亚萨合莱天明（北京）门业有限公司 
2014/3 - 2016/7
- 职位：销售
- 工作内容：跟进项目进展，完成订单及售后。

## 教育经历
### 北华航天工业学院
2011/9 - 2014/6
- 专业学历：机械设计制造 大专
`

let code_ready = `/*
 * hi，我是王亚琼。
 */

/* 添加一个过渡，使变化看起来更柔和 */
* {
  transition: all 0.3s;
}
/* 加个背景色 */
body {
  background: #455A64;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  padding: 16px;
  overflow: auto;
}

/* 让代码高亮起来 */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * 给它们来个特效吧！
 * 让它们在被编辑的时候产生“呼吸”的效果
 */
.breathe {
  animation: breathe 3s ease 0s infinite;
}


/* 现在开始写简历啦！ */

/* 让代码框腾出一些的位置给我的简历框 */
#options {
  width: 28%;
}
/* 准备一个白板 */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* 接下来，请看右边 */

`

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 20px;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#information {
  text-align: center;
}
#information p {
  line-height: 24px;
  white-space: pre-wrap;
}

/* 然后是详细介绍模块 */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
#skills > ul ul {
  margin: 4px 0;
}
#skills li, #works li, #education li {
  margin-bottom: 4px;
}

/* 调整“工作经历”和“教育经历”中时间的位置 */
#internship, #education {
  position: relative;
}
#internship p, #education p {
  position: absolute;
  right: 0px;
  top: 40px;
}


/* 接下来添加个头像吧！ */
`

let code_photo = `
/* 把我的头像放在个人信息里 */
#information {
  position: relative;
}
#information img {
  width: 90px;
  position: absolute;
  right: 0px;
  top: 10px;
}

/* 
 *          —— 王亚琼 2019/3
 */
`
var code_body = document.getElementById('code_body');
var code_style = document.getElementById('code_style');

function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    let intervalID = setInterval(() => {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n);
      code_body.scrollTop = code_body.scrollHeight;
      n++;
      if (n === code.length) {
        window.clearInterval(intervalID);
        resolve.call(undefined);
      }
    }, 5);
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    let intervalID = setInterval(() => {
      paper.innerHTML = resume.substr(0, n);  
      paper.scrollTop = paper.scrollHeight;
      n++;
      if (n === resume.length) {
        window.clearInterval(intervalID);
        resolve.call(undefined);
      }
    }, 5);
  })
}

writeCode(code_ready, '').then(() => {
    $('#paper').addClass('breathe');
    $('#code_body').removeClass('breathe');
    writeResume().then(() => {
        $('#code_body').addClass('breathe')
        $('#paper').removeClass('breathe')
        writeCode(code_marked, code_ready).then(() => {
            $('#paper')[0].innerHTML = marked(resume)
            $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="works"></div>', '<div id="internship"></div>', '<div id="education"></div>')
            $('#information').append($('h1'), $('p').first())
            $('#skills').append($('h2:contains("技能")'), $('ul').first())
            $('#education').append($('h2:contains("教育")'), $('h3:contains("学院")'), $('p').last(), $('ul').last())
            $('#internship').append($('h2:contains("工作经历")'), $('h3:contains("公司")'), $('#paper > p'), $('#paper > ul').last())
            $('#works').append($('h2:contains("项目")'), $('#paper').children().not($('div')))
        }).then(() => {  // 因为上个then()中的并不是个Promise，所以和这个then()同时执行。这里加入then()是为了让代码更有可读性。（可注释掉这整行）
            $('#paper')[0].scrollTop = 0
            writeCode(code_beautify_resume, code_ready + code_marked).then(() => {
                $('#information').append('<img src="./images/avatar.jpg" />')
            }).then(() => {  // 因为上个then()中的并不是个Promise，所以和这个then()同时执行。这里加入then()是为了让代码更有可读性。（可注释掉这整行）
                writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
                    $('#paper').addClass('breathe')
                    $('#code_body').removeClass('breathe')
                    setTimeout(() => {
                        $('#options').css({ 'width': '23%' })
                        $('#options').append('<a class="downloadResume" href="resume.pdf" target="_blank" download="前端开发-王亚琼">下载 PDF 简历</a>')
                    }, 1000)
                })
            })
        })
    })
})

