{
    "author": "dj",
    "ua": "",
    "homeUrl": "http://www.jrskan.com/",
    "cateManual": {
        "华语高清": "1",
        "美女打碟": "10"
    },
	
	// 首页推荐视频的节点
    "homeVodNode": "//ul[@data-stype='zqlq']",
	// 首页推荐视频的名称
    "homeVodName": "/li[@class='lab_events']/span/text()",
	// 首页推荐视频的id
    "homeVodId": "/li[@class='lab_channel']/a/@href",
	// 二次处理正则
    //"homeVodIdR": "/play/(\\d+).html",
	// 首页推荐视频的图片
    "homeVodImg": "/li[@class='lab_team_home']/span/img/@src",
	// 首页推荐视频的简介
    "homeVodMark": "concat(//li[@class='lab_team_home']/strong/text(),'-',//li[@class='lab_team_away']/strong/text())",
	
	// 分类页地址 {cateId} 分类id {catePg} 当前页
    "cateUrl": "http://www.jrskan.com/",
	  // 同上面的homeVod字段 分类列表中的视频信息
	"cateVodNode": "//ul[@data-stype='zqlq']",
    "cateVodName": "/li[@class='lab_events']/span/text()",
    "cateVodId": "/li[@class='lab_channel']/a/@href",
    //"cateVodIdR": "/play/(\\d+).html",
    "cateVodImg": "/li[@class='lab_team_home']/span/img/@src",
    "cateVodMark": "concat(//li[@class='lab_team_home']/strong/text(),'-',//li[@class='lab_team_away']/strong/text())",
	
	// 详情页地址 用于获取详情页信息 及 播放列表和地址
    //"dtUrl": "https://www.kuqimv.com/play/{vid}.html",
	"dtUrl": "http://play.sportsteam365.com/play/steam{vid}.html",
	
	// 详情节点
    "dtNode": "//body",
	  // 视频名
    "dtName": "//div[@class='lei_info mt']/div[2]/h1/text()",
	// 视频图片
    "dtImg": "//div[@class='lei_info mt']/div[1]/img/@src",
	// 视频分类
    "dtCate": "//div[@class='play_info']/li[3]/a/text()",
    "dtActor": "//div[@class='play_info']/li[4]/a/text()",
	 // 播放源节点
    "dtFromNode": "//div[@class='lei_title']/h1",
	  // 播放源名称
    "dtFromName": "/text()",
    "dtFromNameR": "(\\S+) mp4\\S+",
	// 播放列表节点
    "dtUrlNode": "//div[@class='down_sm mt']/p[2]",
	 // 播放地址节点
    "dtUrlSubNode": "/a",
	  // 播放地址
    "dtUrlId": "@data-clipboard-text",
    "dtUrlIdR": "\\S+/(\\d+).html",
	// 剧集名称
    "dtUrlName": "/text()",
    "dtUrlNameR": "",
	//播放页面的地址 {playUrl} 对应上面 dtUrlId 获取到的地址
    "playUrl": "https://www.kuqimv.com/play/{playUrl}.html",
    "playUa": "",
	
    "searchUrl": "https://www.kuqimv.com/search.php?key={wd}",
    "scVodNode": "//div[@class='play_xg']/li",
    "scVodName": "//div[@class='name']/a/@title",
    "scVodId": "//div[@class='name']/a/@href",
    "scVodIdR": "/play/(\\d+).html",
    "scVodImg": "//div[@class='pic']/a/img/@src",
    "scVodMark": ""
}