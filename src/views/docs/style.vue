<template>
<article class="markdown">
  <p class="t22">样式与布局</p>
  <p class="t16">样式会根据产品做相应的变化，基于SASS,我们提供了一套变量和函数以适应不同产品外观表现。</p>
  <p class="t16">页面整体布局是一个产品最外层的结构,包含导航(nav,hedaer)、侧边栏(silder)、布局容器(container),我们尝试以组件(header.vue,leftMenu.vue)的形式提供布局方式,由于产品的定位不一样,我们发现输出一套基于变量的布局样式更能提高开发质量、效率。</p>
  <p class="t18">准备</p>
  <p class="t16"><a href="https://www.w3cplus.com/sassguide/">sass相关教程</a></p>
  <p class="t16">我们使用sass-resource-loader，统一管理sass的变量、函数，通过引入style.scss提供基础的工具类样式与布局。</p>
  <p class="t16">我们提供button.scss,dropdown.scss,flex.scss,nav.scss 等常用样式</p>
  <pre v-highlightjs><code class="javascript">
    if(loader == "sass"||loader == "scss") {
      loaders.push({
        loader:"sass-resources-loader",
        options:{
          resources:[resolveResouce('common.scss')]
        }
      })
    }
    </code></pre>
  <pre v-highlightjs>
common.scss(所有组件，布局都根据该变量做出相应的样式调整。对于丰声微应用的开发，我们倾向于使用postcss提供不同的组件以解决移动端的样式问题)
    <code class="scss">
$pr:#20a0ff;
$prs:#44AFDD;
$se:#002140;
$ses:#53C5AC;

$semenu:#001529;
$sesub: #000c17;
$menu-font:#9eb7ca;

$orange: #ff7e00;
$blue:#3aaafc;
$red: #fe5140;

$font-color: #656565;
$border-color: #d6d6d6;
$border: #dcdcdc;
$border-radius: 4px;
@mixin mb {
    margin-bottom: 18px;
}

@mixin sf-btn($color, $border-color, $backgroundColor) {
    padding: 7.5px 20px;
    // margin: 0 5px;
    color: $color;
    &~button {
        margin-left: 7px;
    }
    font-size: 14px;
    border: 1px solid $border-color;
    background-color: $backgroundColor;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    &.first {
        margin-left: 0px;
    }
}
@mixin text($font-size) {
    font-size: $font-size;
    margin-bottom: 18px;
    line-height: 1.46;
}

@mixin sf-hover($color) {
    &:hover {
        border-color: $color;
        background-color: $color;
    }
}
    </code></pre>
  <pre v-highlightjs>
style.scss(重写浏览器user自定义造成布局不一的问题)
    <code class="scss">
html,body {
    margin:0;
    padding:0;
    box-sizing: content-box;
    height:100%;
    width:100%;
    font-family:"Microsoft Yahei",'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1365px;
}
input, textarea, keygen, select, button {
font-family: "Microsoft Yahei", 'Avenir', Helvetica, Arial, sans-serif;
}
h1,h2,h3,h4,h5,h6,p,span {
    line-height: 1.46;
    margin:0;
}
    </code></pre>
    <pre v-highlightjs>
style.scss(提供header、silderbar、container的布局样式)
    <code class="scss">
/* 头部*/
header.bdp-header{
    width: 100%;
    top: 0;
    background-color: $se;
    text-align: left;
    color: white;
    z-index: 2000;
    .title {
        line-height: 61px;
        img{
            height: 30px;
            width: 30px;
            padding:12px;
            vertical-align: middle;
            display: inline-block;
        }
        .right {
            display: inline-block;
            vertical-align: middle;
            a {
                margin: 0;
                font-size: 24px;
                text-decoration: none;
                //   color: #d9f0fd;
                color: #fff;

            }
            p {
                margin: 0;
                font-size: 12px;
            }
        }
    }
    .logout {
        line-height: 59px;
        text-align: right;
        cursor: pointer;
        .fa-icon {
            margin: 0 18px;
        }
    }
}
/* 侧边栏 */
.bdp-sider {
    .left-menu {
        height: calc(100vh - 65px);
        flex: 0 0 200px;
        background-color:$semenu;
        padding-top: 20px;
        box-sizing: border-box;
        overflow-y: scroll;
        ul.bdp-menu {
            font-size: 14px;
            line-height: 1.5;
            color: rgba(0, 0, 0, .65);
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            outline: none;
            margin-bottom: 0;
            padding-left: 0;
            list-style: none;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
            background: #001529;
            color: hsla(0, 0%, 100%, .65);
            transition: background .3s, width .2s;
            li.bdpMs,
                {
                &:hover {
                    color: #fff;
                }
                .bdp-menu-submenu-title {
                    position: relative;
                    padding: 0 12px;
                    margin: 4px;
                    &.active {
                        border: 1px solid $se;
                        border-left: 4px solid $pr;
                    }
                    .fa-icon.angle {
                        position: absolute;
                        top: 50%;
                        right: 12px;
                        transform: translateY(-50%);
                    }
                }
                ul.bdp-menu-sub {
                    background-color: black;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: none;
                    &.active {
                        display: block;
                    }
                    li {
                        span{
                           color: hsla(0, 0%, 100%, .65);

                        }
                        a {
                           padding-left:40px;
                           display: inline-block;
                           width: 100%;
                           box-sizing: border-box;
                           &.router-link-active{
                             span{
                                color: $pr;
                             }
                           }
                           &:hover{
                               background-color: $pr;
                               span {
                                   color: hsla(0, 0%, 100%, .65);
                               }
                           }
                        }

                    }
                }
                cursor: pointer;
                line-height: 40px;
                .fa-icon.title {
                    margin-right: 12px;
                    vertical-align: middle;
                }
            }
            li.bdpMi {
                padding: 0 12px;
                margin: 4px;
                &:hover {
                    a {
                        color: #fff;
                    }
                }
                &.active {
                    border: 1px solid $se;
                    border-left: 4px solid $pr;
                }
                .fa-icon.title {
                    margin-right: 12px;
                    vertical-align: middle;
                }
                a {
                    line-height: 40px;
                    color: hsla(0, 0%, 100%, .65);
                    background-color: transparent;
                    text-decoration: none;
                    outline: none;
                    cursor: pointer;
                    transition: color .3s;
                }
            }
        }
        // .el-menu {
        //     margin-top: -1px;
        //     border-radius: 0;
        //     background-color: #383856;
        //     .el-menu-item.is-active {
        //         background: #3397FD;
        //     }
        //     .el-menu-item:hover,
        //     .el-submenu__title:hover {
        //         background: #3397FD;
        //     }
        //     .el-menu-item,
        //     .el-submenu__title {
        //         color: #fff;
        //         font-size: 16px;
        //     }
        // }
    }
    > .main {
        flex: auto;
        overflow-y: scroll;
        height: calc(100vh - 65px);
        article.markdown {
            padding: 20px;
        }
    }
}
.bdp-layout {
    display: flex;
}
section.bdp-content {
    flex:1;
    > .main {
        padding: 20px;
    }
}
    </code></pre>
    <pre v-highlightjs>
style.scss(提供工具类的使用,参考使用)
    <code class="scss">
/* sf-panel */
.sf-panel {
    margin: 0 18px 18px 0;
    background-color: #fff;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    .panel-heading {
        padding: 10px 15px;
        border-bottom: 1px solid #f5f5f5;
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
        color: #fff;
        background-color: $blue;
    }
    .panel-body {
    padding: 15px;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin-bottom: 10px;
    }
}

/* 工具类*/

.t26 {
    @include text(26px);
}

.t22 {
    @include text(22px);
}

.t18 {
    @include text(18px);
}

.t16 {
    @include text(16px);
}

.t14 {
    @include text(14px);
}

.t12 {
    @include text(12px);
}

.btn-group {
    @include mb();
    button:nth-child(1) {
        margin-left: 0;
    }
}

.btn-primary {
    @include sf-btn(#656565, #d6d6d6, #fff);
    &:hover {
        color: $pr;
        border-color: $pr;
    }
}

.btn-blue {
    @include sf-btn(#fff, $blue, $blue);
    @include sf-hover(#20a2ff);
}

.btn-red {
    @include sf-btn(#fff, $red, #e5473a);
    @include sf-hover(#ea4d3d);
}

.btn-dis {
    @include sf-btn(#656565, $border-color, #dedede);
}

.btn-lg {
    padding: 8.5px 20px;
}

.btn-sm {
    padding: 6.5px 20px;
}

.btn-tiny {
    padding: 3px 10px;
    font-size: 10px;
}
    </code></pre>
</article>
</template>

