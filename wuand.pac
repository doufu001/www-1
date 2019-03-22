// update: 2019.3.22
// 鉴于《刑法》、《网络安全法》等法律的有关条款，规则中加入了黑名单，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
// google plus
  shExpMatch(url, "https://plus.google.com/*")
) return "DIRECT";
// v2ray
if (
// google
  shExpMatch(url, "*://*.google.*/*") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "googleusercontent.com") ||
  dnsDomainIs(host, "ggpht.com") ||
  dnsDomainIs(host, "gmail.com") ||
  dnsDomainIs(host, "googlesource.com") ||
  dnsDomainIs(host, "gvt1.com") ||
  dnsDomainIs(host, "goo.gl") ||
  dnsDomainIs(host, "accounts.youtube.com") ||
  dnsDomainIs(host, "img.youtube.com") ||
// dmm
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "gsspat.jp") ||
  dnsDomainIs(host, "cxpublic.com") ||
  dnsDomainIs(host, "cxense.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  dnsDomainIs(host, "ravenjs.com") ||
  dnsDomainIs(host, "nex8.net") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  shExpMatch(url, "http://203.104.209.*/*") ||
  dnsDomainIs(host, "dovs9u514acja.cloudfront.net") ||
  dnsDomainIs(host, "itchibanketsu.jp") ||
  dnsDomainIs(host, "touken-ranbu.jp") ||
  dnsDomainIs(host, "shiropro-re.net") ||
  dnsDomainIs(host, "millennium-war.net") ||
  dnsDomainIs(host, "happyelements.co.jp") ||
  dnsDomainIs(host, "hekk.org") ||
// art
  shExpMatch(url, "*://*.pinterest.*/*") ||
  dnsDomainIs(host, "pinimg.com") ||
  dnsDomainIs(host, "cedexis") ||
  dnsDomainIs(host, "cedexis-radar.net") ||
  dnsDomainIs(host, "accountkit.com") ||
  dnsDomainIs(host, "instagram.com") ||
  shExpMatch(url, "*://instagram.*.fbcdn.net/*") ||
  dnsDomainIs(host, "graph.facebook.com") ||
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
  dnsDomainIs(host, "behance.net") ||
  dnsDomainIs(host, "shutterstock.com") ||
  dnsDomainIs(host, "sketchappsources.com") ||
  dnsDomainIs(host, "flickr.com") ||
  dnsDomainIs(host, "s.yimg.com") ||
  dnsDomainIs(host, "proko.com") ||
  dnsDomainIs(host, "tineye.com") ||
  dnsDomainIs(host, "depositphotos.com") ||
  dnsDomainIs(host, "istockphoto.com") ||
  dnsDomainIs(host, "artstation.com") ||
// acg
  dnsDomainIs(host, "nicovideo.jp") ||
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
  dnsDomainIs(host, "dmc.nico") ||
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "dmhy.org") ||
  dnsDomainIs(host, "wikiwiki.jp") ||
  dnsDomainIs(host, "saucenao.com") ||
  dnsDomainIs(host, "kadokawa.co.jp") ||
  dnsDomainIs(host, "granbluefantasy.jp") ||
  dnsDomainIs(host, "ja.wikipedia.org") ||
  dnsDomainIs(host, "cmoa.jp") ||
// coding
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
  dnsDomainIs(host, "github.io") ||
  dnsDomainIs(host, "sourceforge.net") ||
  dnsDomainIs(host, "fsdn.com") ||
  dnsDomainIs(host, "w3schools.com") ||
  dnsDomainIs(host, "android.com") ||
  dnsDomainIs(host, "golang.org") ||
  dnsDomainIs(host, "python.org") ||
  dnsDomainIs(host, "gitbook.com") ||
  dnsDomainIs(host, "gitbooks.io") ||
  dnsDomainIs(host, "tensorflow.org") ||
  dnsDomainIs(host, "mozilla.org") ||
  dnsDomainIs(host, "getpostman.com") ||
  dnsDomainIs(host, "nvidia.com") ||
  dnsDomainIs(host, "bitbucket.org") ||
  dnsDomainIs(host, "evgnet.com") ||
  dnsDomainIs(host, "androidfilehost.com") ||
// scholar
  dnsDomainIs(host, "coursera.org") ||
  dnsDomainIs(host, "archive.org") ||
  dnsDomainIs(host, "wuancake.org") ||
  dnsDomainIs(host, "jmlc.org") ||
  dnsDomainIs(host, "rus.ec") ||
  dnsDomainIs(host, "nih.gov") ||
  dnsDomainIs(host, "pubmed.gov") ||
  dnsDomainIs(host, "bioconductor.org") ||
  dnsDomainIs(host, "dictionary.goo.ne.jp") ||
  dnsDomainIs(host, "bing.com") ||
  dnsDomainIs(host, "sparknotes.com") ||
// music
  dnsDomainIs(host, "soundcloud.com") ||
  dnsDomainIs(host, "sndcdn.com") ||
// game
  dnsDomainIs(host, "twitch.tv") ||
  dnsDomainIs(host, "twitchcdn.net") ||
  dnsDomainIs(host, "twitchsvc.net") ||
  dnsDomainIs(host, "jtvnw.net") ||
  dnsDomainIs(host, "ttvnw.net") ||
  dnsDomainIs(host, "bahamut.com.tw") ||
  dnsDomainIs(host, "gamer.com.tw") ||
  dnsDomainIs(host, "miniclip.com") ||
  dnsDomainIs(host, "miniclipcdn.com") ||
  dnsDomainIs(host, "garena.live") ||
  dnsDomainIs(host, "garena.tv") ||
  dnsDomainIs(host, "humblebundle.com") ||
  dnsDomainIs(host, "steamcommunity.com") ||
  dnsDomainIs(host, "minecraft.com") ||
// entertainment
  dnsDomainIs(host, "line.me") ||
  dnsDomainIs(host, "line-apps.com") ||
  dnsDomainIs(host, "line-scdn.net") ||
  dnsDomainIs(host, "mgoon.com") ||
  dnsDomainIs(host, "wecandeo.com") ||
  dnsDomainIs(host, "vidmix.tv") ||
  dnsDomainIs(host, "btbtt.co") ||
  dnsDomainIs(host, "gyao.yahoo.co.jp") ||
  dnsDomainIs(host, "yimg.jp") ||
  dnsDomainIs(host, "brightcove.com") ||
// shopping
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "nordstrommedia.com") ||
  dnsDomainIs(host, "nordstromdata.com") ||
  dnsDomainIs(host, "amazon.co.jp") ||
  dnsDomainIs(host, "sierratradingpost.com") ||
// netdisk
  dnsDomainIs(host, "dropbox.com") ||
  dnsDomainIs(host, "dropboxstatic.com") ||
  dnsDomainIs(host, "onedrive.live.com") ||
  dnsDomainIs(host, "1drv.ms") ||
  dnsDomainIs(host, "mediafire.com") ||
  dnsDomainIs(host, "getuploader.com") ||
// others
  dnsDomainIs(host, "quora.com") ||
  dnsDomainIs(host, "reddit.com") ||
  dnsDomainIs(host, "redditstatic.com") ||
  dnsDomainIs(host, "redditmedia.com") ||
  dnsDomainIs(host, "redd.it") ||
  dnsDomainIs(host, "readmoo.com") ||
  dnsDomainIs(host, "atdmt.com") ||
  shExpMatch(url, "*://www.bbc.co.uk/learningenglish/*") ||
  dnsDomainIs(host, "bbci.co.uk") ||
  dnsDomainIs(host, "apkpure.com") ||
// config&cdn
  dnsDomainIs(host, "adblockplus.org") ||
  dnsDomainIs(host, "greasyfork.org") ||
  dnsDomainIs(host, "akamaihd.net") ||
  dnsDomainIs(host, "amazonaws.com") ||
  dnsDomainIs(host, "cloudfront.net") ||
  dnsDomainIs(host, "cloudflare.com") ||
  dnsDomainIs(host, "funcaptcha.com") ||
// debug
  dnsDomainIs(host, "ip.cn") 
) return "PROXY 127.0.0.1:2333";
return "DIRECT";
}