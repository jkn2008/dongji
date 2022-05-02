{
  "ua": "",
  "homeUrl": "http://www.9eguoyu.com/",
  "dcVipFlag": "true",
  "pCfgJs": "http://www.9eguoyu.com/static/js/playerconfig.js",
  "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
  "dcShow2Vip": {},
  "dcPlayUrl": "true",
  "cateManual": {"电影": "zuijinrebodianying","综艺":"zongyi","电视剧": "zuijinrebodianshiju","动漫": "dongman","美剧":"rebomeiju","日韩剧":"reborihanju","国配电影": "gypy","国配外剧": "guoyupeiyinhanju"}, 
  "homeVodNode": "//li[@class='col-lg-6 col-md-6 col-sm-4 col-xs-3']/div/a",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "/voddetail/(\\w+).html",
  "homeVodImg": "/@data-original",
  "homeVodImgR": "",
  "homeVodMark": "//span[contains(@class,'pic-text text-right')]/text()",
  "cateUrl": "http://www.9eguoyu.com/vodshow/{cateId}/page/{catePg}.html",
  "cateVodNode": "//li[@class='col-lg-8 col-md-6 col-sm-4 col-xs-3']/div/a",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "/voddetail/(\\w+).html",
  "cateVodImg": "/@data-original",
  "cateVodImgR": "",
  "cateVodMark": "//span[contains(@class,'pic-text text-right')]/text()",
  "dtUrl": "http://www.9eguoyu.com/voddetail/{vid}.html",
  "dtNode": "//body",
  "dtName": "//div[@class='col-xs-1']/div[@class='myui-content__thumb']/a/@title",
  "dtNameR": "",
  "dtImg": "//div[@class='col-xs-1']/div[@class='myui-content__thumb']/a/img/@data-original",
  "dtImgR": "",
  "dtCate": "//span[contains(text(), '分类：')]/following-sibling::a/text()",
  "dtYear": "//span[contains(text(), '年份：')]/following-sibling::a/text()",
  "dtMark": "//span[contains(text(), '更新：')]/following-sibling::span/text()",
  "dtMarkR": "",
  "dtDirector": "//span[contains(text(), '导演：')]/following-sibling::a/text()",
  //"dtActor": "//span[contains(text(), '主演：')]/following-sibling::a[*]/text()",
  "dtActor": "string(//span[contains(text(), '主演：')]/parent::p)",
  //"dtDesc": "//div[@class='col-pd text-collapse content']/p/text()",
  "dtDesc": "//span[contains(text(), '简介：')]/parent::p//text()",
  "dtFromNode": "//ul[@class='nav nav-tabs active']/li/a",
  "dtFromName": "/text()",
  "dtFromNameR": "",
  "dtUrlNode": "//ul[@class='myui-content__list scrollbar sort-list clearfix']",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/vodplay/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "http://www.9eguoyu.com/vodplay/{playUrl}.html",
  "playUa": "",
  "searchUrl": "http://www.9eguoyu.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": ""
}