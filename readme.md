### demo 使用介绍

该demo为微信小程序项目，导入即可通过微信开发者工具模拟器进行预览，或通过预览/真机调试在真机上体验

### 小程序各部分实现思路

* 吸顶效果
  
  利用position:sticky实现吸顶，或者直接用js控制，判断距离顶上的距离，是的话就fixed在顶上

* 点击导航的自动索引和偏移
  
  动画效果。利用scroll-view的自带scroll动画属性来控制，以及原生transition过渡效果来控制navbar。
  
  实现原理。判断当前导航项的位置，是否大于导航条中间的一半，是的话则导航条scroll往左滚动，使当前导航项其到达中间，否则反之。navbar效果则用position&left属性控制，获取元素的offsetLeft赋值给left即可

* 顶部导航栏自定义
  
  首先设置  "navigationStyle": "custom"，再利用获取到的状态栏的高度加上固定的导航高度，即可得出导航条应占据的高度

* 底部tabbar自定义
  
  vant/weapp实现，使用微信小程序自带tabbar配置custom:true。手动实现的话，则使用flex布局均分即可。
