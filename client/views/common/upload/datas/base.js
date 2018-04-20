/**
 * Created by Administrator on 2016/5/20.
 */
 const base = {
  Config: {
    version: "2.3.7",
    showReduxDevTools: false,
    server: {
      // ajax: 'http://222.175.121.249:8082/qlwb/', //测试服务器
      // ajaxup: 'http://120.26.3.40:8082/qlwb/' //测试媒体资源上传服务器
      // ajax: 'http://114.55.148.57:8083/', //正式（公网）服务器
      // ajaxup: 'http://114.55.148.57:8083/', //正式媒体资源上传服务器（勿删）
    },
    watermarkImage: [
      {
        type: "white_small",
        tip: "白色小图",
        value: "http://7xjl1j.com1.z0.glb.clouddn.com/white_small.png",
        valuebase64: "aHR0cDovLzd4amwxai5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS93aGl0ZV9zbWFsbC5wbmc="
      }, {
        type: "white_big",
        tip: "白色大图",
        value: "http://7xjl1j.com1.z0.glb.clouddn.com/white_big.png",
        valuebase64: "aHR0cDovLzd4amwxai5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS93aGl0ZV9iaWcucG5n"
      }, {
        type: "gray_small",
        tip: "灰色小图",
        value: "http://7xjl1j.com1.z0.glb.clouddn.com/gray_small.png",
        valuebase64: "aHR0cDovLzd4amwxai5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9ncmF5X3NtYWxsLnBuZw=="
      }, {
        type: "gray_big",
        tip: "灰色大图",
        value: "http://7xjl1j.com1.z0.glb.clouddn.com/gray_big.png",
        valuebase64: "aHR0cDovLzd4amwxai5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9ncmF5X2JpZy5wbmc="
      }, {
        type: "black_small",
        tip: "黑色小图",
        value: "http://7xjl1j.com1.z0.glb.clouddn.com/black_small.png",
        valuebase64: "aHR0cDovLzd4amwxai5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9ibGFja19zbWFsbC5wbmc="
      }, {
        type: "black_big",
        tip: "黑色大图",
        value: "http://7xjl1j.com1.z0.glb.clouddn.com/black_big.png",
        valuebase64: "aHR0cDovLzd4amwxai5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9ibGFja19iaWcucG5n"
      }
    ]
  },
  events: [
    {
      datetime: "2016-11-9",
      details: [
        {
          type: "update",
          list: ["添加新闻点击标题预览", "提交视频直播验证", "实现页面新闻预览功能"]
        }
      ]
    }, {
      datetime: "2016-11-14",
      details: [
        {
          type: "update",
          list: ["添加开屏图片的新功能"]
        }
      ]
    }, {
      datetime: "2016-11-15",
      details: [
        {
          type: "update",
          list: ["修复表格行拖动组件新引发的错误", "视频直播新闻完成视频自直播完成"]
        }
      ]
    }, {
      datetime: "2016-11-16",
      details: [
        {
          type: "update",
          list: ["修改图集新闻设置列表图的功能", "根据编辑要求修改功能", "新增专题，普通，图集，视频新闻的预览功能", "新增*的验证，以及推送时间精确到分"]
        }
      ]
    }, {
      datetime: "2016-11-17",
      details: [
        {
          type: "update",
          list: ["图片编辑器自动适应可调整宽高尺寸", "左侧记忆菜单设置功能", "修复列表排序不容易操作问题", "修复大图必传的错误功能", "修复推送时间修饰的BUG"]
        }
      ]
    }, {
      datetime: "2016-11-18",
      details: [
        {
          type: "update",
          list: ["增加图集新闻的批量追加功能", "视频直播插入数据流"]
        }
      ]
    }, {
      datetime: "2016-11-23",
      details: [
        {
          type: "update",
          des: "版本1.12.15 (Beta)",
          list: ["修复表格中spin动画的样式", "文本编辑器添加固定工具栏功能", "频道新闻列表添加举报状态功能"]
        }
      ]
    }, {
      datetime: "2016-11-24",
      details: [
        {
          type: "update",
          des: "版本1.12.16 (Beta)",
          list: ["修复编辑器设置红色后再次编辑无效的错误", "完成主页日历显示更新日志和消息功能"]
        }, {
          type: "message",
          des: "测试",
          list: ["消息系统"]
        }
      ]
    }, {
      datetime: "2016-11-25",
      details: [
        {
          type: "update",
          des: "版本1.12.17 (Beta)",
          list: ["修复自动频道列表中无法发布问题", "完成“频道新闻”列表中进入新闻添加页面时自动设置添加到已选择的频道列表功能", "对调草稿里面的删除和编辑操作"]
        }
      ]
    }, {
      datetime: "2016-11-28",
      details: [
        {
          type: "update",
          des: "版本1.12.18 (Beta)",
          list: ["添加新闻列表排序时功能按钮始终保持最前特性"]
        }
      ]
    }, {
      datetime: "2016-11-30",
      details: [
        {
          type: "update",
          des: "版本1.12.19 (Beta)",
          list: ["上线粉丝管理、热词管理、积分管理、敏感词、新闻统计、点击量统计功能", "修复新闻统计的一处错误"]
        }
      ]
    }, {
      datetime: "2016-12-01",
      details: [
        {
          type: "update",
          des: "版本2.0.0 (Beta)",
          list: [
            "添加验证登录超时重新登陆功能",
            "添加编辑器固定工具栏超出部分隐藏功能",
            "调整添加修改各种类型新闻时，以选中频道与带选中频道同步功能",
            "调整几处显示不妥的样式",
            "完成粉丝管理的用户画像功能",
            "修复新引发的选取城市以后无法发布新闻的问题",
            "修复新引发的抽取新闻不显示可勾选频道问题"
          ]
        }
      ]
    }, {
      datetime: "2016-12-02",
      details: [
        {
          type: "update",
          des: "版本2.0.2 (Beta)",
          list: ["频道新闻的列表排序和轮播图排序增加“刷新排序”功能", "文本编辑器添加恢复重做功能", "编辑新闻时自动处理英文逗号间隔符（不支持微软拼音输入法）"]
        }
      ]
    }, {
      datetime: "2016-12-05",
      details: [
        {
          type: "update",
          des: "版本2.0.3 (Beta)",
          list: ["默认主题风格修改及大量样式优化", "修复 InputNumber 与其它表单控件不对齐的问题", "修复多行 Checkbox 样式不对齐的问题。", "修复 Badge(小红点) 会覆盖其他组件的问题。", "RangePicker 现在可以自定义快捷选择，陆续更新"]
        }
      ]
    }, {
      datetime: "2016-12-06",
      details: [
        {
          type: "update",
          des: "版本2.0.4 (Beta)",
          list: ["图集新闻图、文本编辑器水印图添加自动缩放功能", "添加编辑发送频道在权限配置错误（e.g.没有选择下级的本地新闻）造成无法操作问题"]
        }
      ]
    }, {
      datetime: "2016-12-07",
      details: [
        {
          type: "update",
          des: "版本2.0.5 (Beta)",
          list: ["增加时间段快速选择特性", "修复可能引起的翻页错误", "新闻阅读量添加颜色梯队"]
        }
      ]
    }, {
      datetime: "2016-12-08",
      details: [
        {
          type: "update",
          des: "版本2.0.6 (Beta)",
          list: ["修改添加子直播时上传图片方式可批量上传且支持水印和自动缩放", "修复新建活动无效问题", "修复修改子直播项目变增加的问题", "修复主任审核中审核时对话框显示空的问题"]
        }
      ]
    }, {
      datetime: "2016-12-09",
      details: [
        {
          type: "update",
          des: "版本2.0.7 (Beta)",
          list: ["修复商品时间无法修改添加问题", "修复图集新闻图片地址附加参数后导致客户端显示问题", "修复子直播新建编辑时，设置图片列表无效问题", "修复轮播图第一次保存不成功问题"]
        }
      ]
    }, {
      datetime: "2016-12-12",
      details: [
        {
          type: "update",
          des: "版本2.0.8 (Beta)",
          list: ["修复苹果系统显示时间格式问题", "修复批量追加图片时小于指定数量图片无法保存成功问题"]
        }
      ]
    }, {
      datetime: "2016-12-14",
      details: [
        {
          type: "update",
          des: "版本2.0.9 (Beta)",
          list: ["修复开屏页修改添加时的无效错误", "修复新引发的新闻排序是显示条数过多问题", "文本编辑器新版本开发，现只在添加普通新闻中应用，以便提前适应一段时间。", "活动管理列表图限制大小"]
        }
      ]
    }, {
      datetime: "2016-12-19",
      details: [
        {
          type: "update",
          des: "版本2.1.0 (Beta)",
          list: ["正式发布情报站功能", "文本编辑器添加左右对齐功能", "紧急更新域名过期导致图片访问不到的问题"]
        }, {
          type: "message",
          des: "最新版Chrome",
          list: ["最新版 32位 Chrome：http://7xpf6h.com1.z0.glb.clouddn.com/ChromeStandaloneSetup.exe", "最新版 64位 Chrome：http://7xpf6h.com1.z0.glb.clouddn.com/ChromeStandaloneSetup64.exe"]
        }
      ]
    }, {
      datetime: "2016-12-20",
      details: [
        {
          type: "update",
          des: "版本2.1.1 (Beta)",
          list: ["文本编辑器左右对齐居中功能正式发布", "修复图集新闻说明文字选择时会滚动图片问题", "情报站功能用户体验调优"]
        }
      ]
    }, {
      datetime: "2016-12-21",
      details: [
        {
          type: "update",
          des: "版本2.1.2 (Beta)",
          list: ["添加新情报站信息提醒功能", "添加页面中待处理数据提醒", "编辑器粘贴undefined的提示修复", "修复文本编辑器的二次粘贴问题", "情报站添加发布时间搜索条件"]
        }
      ]
    }, {
      datetime: "2016-12-22",
      details: [
        {
          type: "update",
          des: "版本2.1.3 (Beta)",
          list: ["情报站增加发布时间筛选条件", "情报站功能使用体验调优，各个功能执行后即时刷新功能", "文本编辑器保险库条目取消气泡弹窗", "修复在编辑器中某些文章开始自动添加空段落问题"]
        }
      ]
    }, {
      datetime: "2016-12-26",
      details: [
        {
          type: "update",
          des: "版本2.1.3 (Beta)",
          list: ["正式发布新版本文本编辑器"]
        }
      ]
    }, {
      datetime: "2016-12-28",
      details: [
        {
          type: "update",
          des: "版本2.1.5 (Beta)",
          list: ["主任审核新增原因筛选项"]
        }
      ]
    }, {
      datetime: "2017-01-05",
      details: [
        {
          type: "update",
          des: "版本2.1.6 (Beta)",
          list: ["新发布壹点号相关功能"]
        }
      ]
    }, {
      datetime: "2017-01-06",
      details: [
        {
          type: "update",
          des: "版本2.1.7 (Beta)",
          list: ["修改图片上传质量不压缩"]
        }
      ]
    }, {
      datetime: "2017-02-06",
      details: [
        {
          type: "update",
          des: "版本2.1.9 (Beta)",
          list: ["增大系统默认文字字号"]
        }
      ]
    }, {
      datetime: "2017-02-10",
      details: [
        {
          type: "update",
          des: "版本2.1.10",
          list: ["重新设计完善图片加水印操作流程，规避七牛服务器引发的图片不显示问题"]
        }
      ]
    }, {
      datetime: "2017-02-13",
      details: [
        {
          type: "update",
          des: "版本2.1.11",
          list: ["修复新建活动上传列表图后不显示问题"]
        }
      ]
    }, {
      datetime: "2017-02-14",
      details: [
        {
          type: "update",
          des: "版本2.1.12",
          list: ["修复列表图无法刷新到最新图片问题", "修正选择列表图片可以从编辑器中解析的算法"]
        }
      ]
    }, {
      datetime: "2017-02-27",
      details: [
        {
          type: "update",
          des: "版本2.1.15",
          list: ["修改投递功能，添加凤凰、网易、新浪、搜狐、腾讯、中国网选项"]
        }
      ]
    }, {
      datetime: "2017-02-28",
      details: [
        {
          type: "update",
          des: "版本2.1.15",
          list: ["完善壹点号主任审核", "修复频道主任审核时点击无数据的bug", "修复壹点号抓取新闻模块抽取频道翻页功能bug"]
        }
      ]
    }, {
      datetime: "2017-03-20",
      details: [
        {
          type: "update",
          des: "版本2.2.1",
          list: ["新增新闻评论等处各种操作记录下操作人特性，以防止出现无法追溯相关责任人信息情况。"]
        }
      ]
    }, {
      datetime: "2017-03-28",
      details: [
        {
          type: "update",
          des: "版本2.2.2",
          list: ["发布VR新闻功能", "发布赠票管理功能", "修复编辑器修改时无法获取内容问题"]
        }
      ]
    }, {
      datetime: "2017-03-30",
      details: [
        {
          type: "update",
          des: "版本2.2.2",
          list: ["修改壹点号抽取出错", "修改频道评论删除无效", "修改意见反馈分页问题", "修改视频新闻上传视频出错"]
        }
      ]
    }, {
      datetime: "2017-03-31",
      details: [
        {
          type: "update",
          des: "版本2.2.4",
          list: ["修复关联新闻列表操作问题", "修复票务管理翻页问题"]
        }
      ]
    }, {
      datetime: "2017-04-01",
      details: [
        {
          type: "update",
          des: "版本2.2.5",
          list: ["添加vr直播新增、vr直播编辑功能"]
        }
      ]
    }, {
      datetime: "2017-04-06",
      details: [
        {
          type: "update",
          des: "版本2.2.6",
          list: ["修复图片上传后无法删除的bug", "修复票务统计页面翻页问题", "修复数据统计中新闻阅读量导出时间选项无效问题", "新增软件升级功能"]
        }
      ]
    }, {
      datetime: "2017-04-07",
      details: [
        {
          type: "update",
          des: "版本2.2.7",
          list: ["修复图片批量上传失效问题", "添加活动地址适应特殊规则"]
        }
      ]
    }, {
      datetime: "2017-04-11",
      details: [
        {
          type: "update",
          des: "版本2.2.8",
          list: ["修复频道新闻中点击频道搜索后第一页数量变为10条问题", "修复频道新闻列表首页无焦点问题"]
        }
      ]
    }, {
      datetime: "2017-04-12",
      details: [
        {
          type: "update",
          des: "版本2.2.8",
          list: ["修复情报站上传文件"]
        }
      ]
    }, {
      datetime: "2017-04-19",
      details: [
        {
          type: "update",
          des: "版本2.2.9",
          list: ["修复直播列表图有时不显示的问题"]
        }
      ]
    }, {
      datetime: "2017-04-20",
      details: [
        {
          type: "update",
          des: "版本2.2.10",
          list: ["修复修改文章时正文里面携带版权信息问题"]
        }
      ]
    }, {
      datetime: "2017-04-27",
      details: [
        {
          type: "update",
          des: "版本2.2.11",
          list: ["改登录超时提示显示一次","实现抓取新闻中最后一段是图片时，在后面添加文字的操作", "支持抓取新闻编辑后再跳转回进入前的页码", "添加评论页面的导出功能", "修复点击量统计页面的数据显示功能","修复图集新闻批量上传偶尔的无法点击确定问题","轮播图新闻排序操作调优","修复商品正在进行时的重新编辑按钮功能","频道新闻筛选类型添加VR新闻项目"]
        }
      ]
    }, {
      datetime: "2017-05-02",
      details: [
        {
          type: "update",
          des: "版本2.2.13",
          list: ["调通晚报链接功能"]
        }
      ]
    }, {
      datetime: "2017-05-03",
      details: [
        {
          type: "update",
          des: "版本2.2.14",
          list: ["修改点击量统计分页","解决编辑器里因为七牛缓存渲染导致图片不显示问题"]
        }
      ]
    }, {
      datetime: "2017-05-09",
      details: [
        {
          type: "update",
          des: "版本2.2.14",
          list: ["释放对应6.0版本更改：","修改所有图片的编辑尺寸","手动填写文章编辑信息"]
        }
      ]
    }, {
      datetime: "2017-05-11",
      details: [
        {
          type: "update",
          des: "版本2.2.14",
          list: ["实现浏览量造假功能","实现所有话题的增删改查功能"]
        }
      ]
    }, {
      datetime: "2017-05-11",
      details: [
        {
          type: "update",
          des: "版本2.2.14",
          list: ["实现浏览量造假功能","实现所有话题的增删改查功能"]
        }
      ]
    }, {
      datetime: "2017-05-12",
      details: [
        {
          type: "update",
          des: "版本2.2.15",
          list: ["实现帖子添加、修改时可以添加对应话题，可以修改对应的圈子功能","帖子过滤条件增加所属话题搜索"]
        }
      ]
    }, {
      datetime: "2017-05-17",
      details: [
        {
          type: "update",
          des: "版本2.2.15",
          list: ["壹点号名字不允许修改"]
        }
      ]
    }, {
      datetime: "2017-06-01",
      details: [
        {
          type: "update",
          des: "版本2.2.16",
          list: ["正式发布适应App 6.0版本后台"]
        }
      ]
    }, {
      datetime: "2017-06-02",
      details: [
        {
          type: "update",
          des: "版本2.2.16",
          list: ["修复主任审核时提示大图上传的错误提示","修复帖子列表显示问题","修复评论审核被误锁定导致无法审核问题"]
        }
      ]
    }, {
      datetime: "2017-06-03",
      details: [
        {
          type: "update",
          des: "版本2.2.17",
          list: ["密码修改操作规则加强","添加各个评论页面的包含敏感词的危险内容提示"]
        }
      ]
    }, {
      datetime: "2017-06-04",
      details: [
        {
          type: "update",
          des: "版本2.2.18",
          list: ["添加快捷键审核新闻评论功能"]
        }
      ]
    }
  ]
}

if (process.env.NODE_ENV === 'production') {
  base.Config.server = {
    ajax: 'http://114.55.148.57:8083/', //正式（公网）服务器
    ajaxup: 'http://114.55.148.57:8083/', //正式媒体资源上传服务器（勿删）
      new_ajax: "http://114.55.182.166:80/qlwb/" // 正式新后台地址
  }
} else {
  base.Config.server = {
    ajax: 'http://222.175.121.249:8082/qlwb/', //测试服务器
    ajaxup: 'http://120.26.3.40:8082/qlwb/', //测试媒体资源上传服务器
    new_ajax: "http://222.175.121.252:8088/qlwb/" // 测试新后台地址
  }
}

module.exports = base
