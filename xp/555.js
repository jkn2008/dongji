{
    "author": "dj",
    "ua": "",
    //"homeUrl": "https://555dy.com",
	"homeUrl": "https://www.o8tv.com",
	
    "dcVipFlag": "true",
    "pCfgJs": "https://www.o8tv.com/static/js/playerconfig.js",
    "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
    "dcShow2Vip": {
        
    },
    "dcPlayUrl": "true",
    "cateNode": "//ul[contains(@class, 'myui-header__menu')]/li/a[contains(@href, 'vodtype')]",
    "cateName": "/text()",
    "cateId": "/@href",
    "cateIdR": "/vodtype(\\S+).html",
    "cateManual": {
        "电影": "1",
        "连续剧": "2",
        "综艺": "3",
        "动漫": "4",
        "纪录片": "91"
    },
	
    "homeVodNode": "//ul[contains(@class, 'myui-vodlist')]/li/div[contains(@class, 'myui-vodlist__box')]",
    "homeVodName": "/a/@title",
    "homeVodId": "/a/@href",
    "homeVodIdR": "/voddetail(\\S+).html",
    "homeVodImg": "/a/@data-original",
    //"homeVodImgR": "\\S+(http\\S+)",
    "homeVodMark": "/span[contains(@class,'pic-text')]/text()",
    
	"cateUrl": "https://www.o8tv.com/vodshow/{cateId}--------{catePg}---2021.html",
    "cateVodNode": "//ul[contains(@class, 'myui-vodlist')]/li/div[contains(@class, 'myui-vodlist__box')]",
    "cateVodName": "/a/@title",
    "cateVodId": "/a/@href",
    "cateVodIdR": "/voddetail(\\S+).html",
    "cateVodImg": "/a/@data-original",
    //"cateVodImgR": "\\S+(http\\S+)",
    "cateVodMark": "/span[contains(@class,'pic-text')]/text()",
    
	"dtUrl": "https://www.o8tv.com/voddetail/{vid}.html",
    "dtNode": "//div[contains(@class,'col-lg-wide-75')]",
    "dtName": "//div[@class='myui-content__thumb']/a[contains(@class,'myui-vodlist__thumb')]/@title",
    "dtNameR": "",
    "dtImg": "//div[@class='myui-content__thumb']/a[contains(@class,'myui-vodlist__thumb')]/img/@data-original",
    "dtImgR": "\\S+(http\\S+)",
    "dtCate": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '分类')]/following-sibling::*/text()",
    "dtCateR": "",
    "dtYear": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '年份')]/following-sibling::*/text()",
    "dtYearR": "",
    "dtArea": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '地区')]/following-sibling::*/text()",
    "dtAreaR": "",
    "dtMark": "",
    "dtMarkR": "",
    "dtActor": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '主演')]/following-sibling::*/text()",
    "dtActorR": "",
    "dtDirector": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '导演')]/following-sibling::*/text()",
    "dtDirectorR": "",
    "dtDesc": "//div[@class='myui-content__detail']//span[contains(@class,'text-muted') and contains(text(), '简介')]/parent::text()",
    "dtDescR": "",
    
	"dtFromNode": "//a[@data-toggle='tab' and contains(@href, 'playlist')]",
    "dtFromName": "/text()",
    "dtFromNameR": "",
    "dtUrlNode": "//div[contains(@class,'tab-content')]/div[contains(@id, 'playlist')]",
    "dtUrlSubNode": "//li/a",
    "dtUrlId": "@href",
    "dtUrlIdR": "/vodplay/(\\S+).html",
    "dtUrlName": "/text()",
    "dtUrlNameR": "",
    "playUrl": "https://www.o8tv.com/vodplay/{playUrl}.html",
    "playUa": "",
    "searchUrl": "https://www.o8tv.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": ""
}