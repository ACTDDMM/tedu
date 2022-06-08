**一、HTML：超文本标记语言，Hyper Text Markup Language**

1、常用标签：双标签(封闭型标签)：必须成对出现，比如<br></br>

单标签：只有开始，没有结束，不能包含内容，比如<br>

空格&nbsp;  换行<br>

&lt;李白&gt;<李白>

注册商标&reg;

版权声明&copy;

商标&trade;

关闭符号&times;

带圈的关闭符号&otimes;

pre标签：保留源代码中的格式   p标签:段落标签 独占一行，默认存在上下行间距

div标签：独占一行，常用的块级标签    h1~h6 字体由大变小，加粗，自带上下行间距，独占一行

p段落标签，自带上下行间距   br换行  hr分割线  b加粗   i斜体   u下划线  s删除线  sup上标字   sub下标字

pre保留源代码的原始格式

2、注释的格式<!-- -->

注释是不会被运行的文本、不能嵌套、不能写在<>内部

3、快捷键：Ctrl+D 删除当前行

Ctrl+/ 添加注释 再按一次，取消注释

4、两大类标签

块级标签：必须独占一行，换行无需<br>

p h1~h6 pre 

行内标签：可以与其他内容共处一行，换行必须使用<br>

b i

5、属性：其实就是特征，用来描述某一方面的特点

格式<标签名 属性名=”属性值” 属性名=”属性值”></标签名>

align对齐方式 right/left/center 靠右/靠左/居中

URL:路径，统一资源定位器，也就是文件对应的路径

相对路径：访问站内资源时使用，文件与文件的相对位置不同，路径会发生改变 同级目录：直接写图片名(可以加./)

​     上级目录：../图片名

​     下级目录：文件名/图片名

绝对路径：访问站外资源时使用，这种方式的优劣：好处节省本站资源、坏处有可能找不到图片

6、HTML的基本格式

<!DOCTYPE html>h5的声明格式

head:给网页设置标题 给网页设置编码

body:网页主体，这个区域的内容会显示在浏览器上

7、超链接 锚，anchor a标签

href:类似于img的src属性，资源路径

**二、表格**

table:表示表格的开始和结束，表格的所有内容都需要写在table这一对标签里

tr:表示表格中的一行table row,简称tr

tb(table datacell):写在tr标签里，表示这一行的这一个单元格，是真正写数据的地方

1、     table标签的属性：

border="2px" 表格边框的宽度

bordercolor="red" 表格边框的颜色

width="400px" 表格的宽度

height="400px" 表格的高度

align="center" 表格是水平对齐方式

bgcolor="yellow" 表格的背景颜色

cellpadding="50px" 表格的内边距(边框和内容之间的距离)

cellspacing="20px" 表格的外边距(边框和边框之间的距离)

tr标签的属性

align="center" 这一行内容的水平对齐方式 right靠右/left靠左/center居中

valign="bottom" 这一行内容的垂直对齐方式 top靠上/middle居中/bottom靠下

bgcolor="lightblue" 这一行的背景颜色

td标签的属性

width="200px" 这一个单元格的宽度

height="200px" 这一个单元格的高度

bgcolor="lightgreen" 这一个单元格的背景颜色

align="center" 这一个单元格中内容的水平对齐方式 right靠右/left靠左/center居中

valign="top" 这一个单元格中内容的垂直对齐方式 top靠上/middle居中/bottom靠下

注意：如果修改了某个单元格的高度，那么这行所有的单元格都会随之改变高度

如果修改了某个单元格的宽度，那么这列的所有单元格都会随之改变宽度

2、     表格的复杂应用-不规则的表格

(1)表格的跨列操作：colspan

定义：从指定的单元格开始，横向向右合并n个单元格(n也包含这个单元格自己)

注意：要把合并的单元格删除掉，如果要合并n列，删除n-1个td

(2)表格的跨行操作：rowspan

定义：从指定的单元格开始，纵向向下合并n个单元格(n也包含这个单元格自己)

注意：要把被合并的单元格删除掉，比如2,1合并两行，那3,1就得删除

3、     表格的标题caption

可加可不加，如果要加，一般紧挨着table开始标签，而且写1个

4、     行和列的标题th

行和列的标题使用的是th标签，效果：加粗与居住

用th替代td,所以th可以使用td的所有属性

5、     表格的嵌套 表格里面有表格

我们可以在对应的单元格中添加table表格

6、     结构标记

h5出了一些带有结构语义的标签来替代div，增强代码的可读性

header定义网页的头部，或者某个区域的顶部

footer定义网页的底部，或者是某个区域的底部

nav 定义网页的导航链接

section定义网页的主体

aside定义网页的侧边栏

article定义与文字相关的内容，比如论坛,回帖

**三、表单**

1、定义：提供了可视化的控件，表单会自动收集整理用户输入的内容，并提交给服务器

2、组成部分

前端部分：表单控件，与用户交互的，并且可以提交请求

后端部分：后台接口对提交的请求进行处理，并构建响应发出去

3、语法：form标签的属性：

(1)action=””定义当前表单提交时发送的动作，表示表单中的数据将要提交给哪个接口来处理

如果action什么值也不写，默认提交到当前页面

(2)method=””定义表单中的数据提交给服务器的方式

①get提交:默认值，一般向服务器要数据时使用

特点：明文提交，提交的内容会在地址栏显示，提交数据大小有限

②post提交:把数据传递给服务器的时候用

特点：隐式提交，提交的内容不在地址栏显示，提交的数据没有大小限制

(3)enctype:指定表单数据的编码方式，允许提交什么样的数据给服务器

"application/x-www-form-urlencoded"默认值，允许将任意字符提交给服务器(文件除外)

"text/plain"允许提交普通字符，普通字符不包含@=&等符号

"multipart/form-data"允许传文件

4、表单的控件

表单空间：在form表单中，能够与用户进行交互的可视化元素

(1) input可以在页面上提供各种各样的输入控件；属性：type:定义当前input的类型

name:为控件定义名称，提供给服务器端使用

placeholder:给控件添加一些提示信息

(2) 文本框type=”text”

maxlengt:允许输入的最大长度

value:为控件定义的默认值

readonly:只读(不能改只能看)

(3) 密码框 type=”password”

密码框中的文字不以明文的方式展现

(4) 提交 type=”submit”:将表单中的数据收集整理并发送给服务器

重置按钮type=”reset”:将表单中的数据恢复到初始化状态，注意不是清空

其他按钮 type=”button” 没有功能，配合事件，调用js脚本

注意：按钮的value属性指的是按钮上显示的文字，并不是提交的值

h5新出的标签button,作用等同于submit,可以提交数据，可以使用事件

button普通按钮，用户点击按钮没有任何功能

submit提交按钮，提交复杂的操作（将表单内容发送给服务器并且清空所有用户的输入）

(5) 单选type=”radio”

注意：必须有name属性，不然没有分组，不是单选的效果

必须有value属性，不然提交的是on

可以通过checked设置本项单选值是默认选中的

(6) 隐藏域 type=”hidden”

作用：想把数据提交给服务器，但又不想把数据提交给用户看

(7) 文件 type=”file”

注意:如果要传文件的话，form的enctype="multipart/form-data"表示允许传文件，如果设置了multiple属性，可以一次性传多个文件

(8) 多行文本域textarea

可以把多行文本域看作是一个大的文本框，允许输入多行文本

注意：设置的文本域大小根据硬件不同，会出现不准确的现象

(9) select+option 下拉选择框

如果option没有设置value的话，会把标签中的内容当做value值提交

如果option设置了value值，会提交这个value的值

size:显示出来的选项个数，默认是1个，1个的时候是下拉选框，>1时会变成滚动条

option中可以添加selected表示这一项默认被选中

(10)    label标签

主要可以实现文本和表单控件的关联

实现关联效果：input的id值和label的for值一样

1. 表单标签

\- `<form></form>` 表单标签是 HTML 表单用于搜集不同类型的用户输入

\- 双标签，一般情况下不能单独使用，需要在 form 元素中加入 input 等标签共同使用

\- 常用属性

​     \- name属性主要是对这个form进行标记

​     \- method=”get/post”， get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限。get安全性非常低，post安全性较高。但是执行效率get安全性非常低，post安全性较高。但是执行效率却比post方法好。

​     \- action，处理表单提交的 URL（可以为node中的路由接口地址）。

​     \- enctype属性，当method属性值为post时，enctype 就是将表单的内容提交给服务器的媒体类型。application/x-www-form-urlencoded：未指定属性时的默认值。

<form action="提交地址" method="提交⽅式">n个需求的表单内容 ……</form> 

2. input 标签及控件

\- `<input/>`元素是最重要的表单元素。它有很多形态，根据不同的 type 属性。

\- input 标签是单标签，主要依靠控件，input 的 type 类型就是用于书写控件的属性。它的控件有很多种类，从而达到我们要的需求。

\- input 标签是内联元素，但属于特殊的内联元素，可以定义宽度高度，

单不自占一行

<input type="控件名称" >

（1）文本框

\- `type="text"`定义单行文本输入域，用户可在其中输入文本

\- `value=""`代表初始值，用户输入后可通过事件获取该属性的值

\- `placeholder="xxx"` 占位符，可用来作为对用户的提示文字

\- `name=""`可与服务器交互数据的元素标示，可以在服务器端根据其 name 取得元素提交的值

\- `maxlength` 属性配合使用，可创建合法值范围，直接写数字

<input type="text" placeholder="输⼊⽤户名" name="username" maxlength="10" />

（2）密码框

\- `type="password"`定义密码输入域，用户在该域中输入的字符不直接显示，而是显示星号或实心圆。

\- 具有`value、placeholder、name`属性

<input type="password" placeholder="输⼊密码" name="pwd" />

（3）单选框

\- `type="radio"`定义单选框，用户只能在多个选项中选择其中一个。

\- 单选框有一个很重要的属性，name 属性。name 属性相同则可以让单选框变为一组，从而达到单选的目的 name="值"，值相同的单选框，都会被作为一组单选框，一组单选框的选项只能选择其一。

\- `checked` 属性代笔表默认被选中的,可以不用写值

checked  属性代笔表默认被选中的,可以不⽤写值

<input type="radio" name="sex" checked />男 <input type="radio" name="sex" />⼥

(4）复选框

\- `type="checkbox"`定义复选框，用户可以在多个选项中选择一个或多个。

\- 复选框有一个很重要的属性，name 属性。name 属性相同则可以让复选框变为一组，从而达到记录复选内容的目的。

\- `checked` 属性代笔表默认被选中的,可以不用写值，多选可以有多个默认被选中的项

（5）按钮

\- `type="submit"`定义提交按钮，提交按钮会把表单数据发送到服务器，数据会被发送到在 from 表单的 action 属性中规定的 URL。不定义文字内容，会显示“提交”

\- `type="reset"`重制表单里所有的内容会被清空，默认按钮文字为重制

\- `type="button"`普通按钮没有功能，需要 value 属性指定按钮文字

（6）文件上传

使用 `type="file"` 的`<input>` 元素使得用户可以选择一个或多个元素以提交表单的方式上传到服务器上

\- `multiple`属性表示允许选择多个文件。 当这个属性存在在标签中，则可以同时上传多个文件。

<input type="file" />

<!-- 多⽂件上传 --> 

<input type="file" multiple />