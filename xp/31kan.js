{
    "author": "dj-22.5.2",
    "ua": "",
    "homeUrl": "https://www.31kan.vip/",
    //"dcVipFlag": "true",
    //"pCfgJs": "https://gimytv.com//static/js/playerconfig.js",
    //"pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
    //"dcShow2Vip": {},
    //"dcPlayUrl": "true",
    "cateManual": {
        "电影": "1",
        "电视剧": "2",
        "综艺": "3",
        "少儿": "33",
        "动漫": "4"

    },
    "homeVodNode": "//ul[contains(@class, 'myui-vodlist clearfix')]/li/div",
    "homeVodName": "/a[contains(@class, 'myui-vodlist__thumb')]/@title",
    "homeVodId": "/a[contains(@class, 'myui-vodlist__thumb')]/@href",
    "homeVodIdR": "/31kan/(\\S+).html",
    "homeVodImg": "/a[contains(@class, 'myui-vodlist__thumb')]/@data-original",
    "homeVodMark": "/span[contains(@class, 'pic-text text-right')]/text()",

    // 分类页地址 {cateId} 分类id {catePg} 当前页
    "cateUrl": "https://www.31kan.vip/vodshow/{cateId}--------{catePg}---.html",
    "cateVodNode": "//ul[contains(@class, 'myui-vodlist clearfix')]/li/div",
    "cateVodName": "/a[contains(@class, 'myui-vodlist__thumb')]/@title",
    "cateVodId": "/a[contains(@class, 'myui-vodlist__thumb')]/@href",
    "cateVodIdR": "/31kan/(\\S+).html",
    "cateVodImg": "/a[contains(@class, 'myui-vodlist__thumb')]/@data-original",
    "cateVodMark": "/span[contains(@class, 'pic-text text-right')]/text()",

    "dtUrl": "https://www.31kan.vip/31kan/{vid}.html",
    "dtNode": "//div[contains(@class,'myui-content__thumb')]",
    "dtName": "/a/@title",
    "dtImg": "/a/img/@data-original",
    "dtFromNode": "//div[contains(@class,'myui-panel_hd')]/div/ul[contains(@class,'nav nav-tabs active')]/li/a",
    "dtFromName": "/text()",

    "dtCate": "//span[contains(text(), '分类')]/following-sibling::a/text()",
    "dtYear": "//span[contains(text(), '年份')]/following-sibling::a/text()",
    // 视频地区
    "dtArea": "//span[contains(text(), '地区')]/following-sibling::a/text()",
    "dtAreaR": "",
    // 视频状态
    "dtMark": "//span[contains(text(), '更新')]/following-sibling::*/text()",
    "dtMarkR": "",
    "dtDirector": "//span[contains(text(), '导演')]/following-sibling::a/text()",
    "dtActor": "//span[contains(text(), '主演')]/following-sibling::a/text()",
    //"dtDesc": "//div[@class='col-pd text-collapse content']/p/text()",
    "dtDesc": "//span[contains(text(), '简介')]/parent::p/text()",

    "dtUrlNode": "//ul[contains(@class,'myui-content__list')]",
    "dtUrlSubNode": "/li/a",
    "dtUrlId": "@href",
    "dtUrlIdR": "/play/(\\S+).html",
    "dtUrlName": "/text()",
    "playUrl": "https://www.31kan.vip/play/{playUrl}.html",
    "searchUrl": "https://www.31kan.vip/index.php/ajax/suggest?mid=1&wd={wd}",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": ""
}
