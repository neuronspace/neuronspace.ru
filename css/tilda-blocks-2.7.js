function t229_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t229__list_item a[href='"+url+"']").addClass("t-active");$(".t229__list_item a[href='"+url+"/']").addClass("t-active");$(".t229__list_item a[href='"+pathname+"']").addClass("t-active");$(".t229__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t229__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t229__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t229_checkAnchorLinks(recid){if($(window).width()>=960){var t229_navLinks=$("#rec"+recid+" .t229__list_item a:not(.tooltipstered)[href*='#']");if(t229_navLinks.length>0){t229_catchScroll(t229_navLinks)}}}
function t229_catchScroll(t229_navLinks){var t229_clickedSectionId=null,t229_sections=new Array(),t229_sectionIdTonavigationLink=[],t229_interval=100,t229_lastCall,t229_timeoutId;t229_navLinks=$(t229_navLinks.get().reverse());t229_navLinks.each(function(){var t229_cursection=t229_getSectionByHref($(this));if(typeof t229_cursection.attr("id")!="undefined"){t229_sections.push(t229_cursection)}
t229_sectionIdTonavigationLink[t229_cursection.attr("id")]=$(this)});t229_updateSectionsOffsets(t229_sections);t229_sections.sort(function(a,b){return b.attr("data-offset-top")-a.attr("data-offset-top")});$(window).bind('resize',t_throttle(function(){t229_updateSectionsOffsets(t229_sections)},200));$('.t229').bind('displayChanged',function(){t229_updateSectionsOffsets(t229_sections)});setInterval(function(){t229_updateSectionsOffsets(t229_sections)},5000);t229_highlightNavLinks(t229_navLinks,t229_sections,t229_sectionIdTonavigationLink,t229_clickedSectionId);t229_navLinks.click(function(){var t229_clickedSection=t229_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof t229_clickedSection.attr("id")!="undefined"){t229_navLinks.removeClass('t-active');$(this).addClass('t-active');t229_clickedSectionId=t229_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t229_now=new Date().getTime();if(t229_lastCall&&t229_now<(t229_lastCall+t229_interval)){clearTimeout(t229_timeoutId);t229_timeoutId=setTimeout(function(){t229_lastCall=t229_now;t229_clickedSectionId=t229_highlightNavLinks(t229_navLinks,t229_sections,t229_sectionIdTonavigationLink,t229_clickedSectionId)},t229_interval-(t229_now-t229_lastCall))}else{t229_lastCall=t229_now;t229_clickedSectionId=t229_highlightNavLinks(t229_navLinks,t229_sections,t229_sectionIdTonavigationLink,t229_clickedSectionId)}})}
function t229_updateSectionsOffsets(sections){$(sections).each(function(){var t229_curSection=$(this);t229_curSection.attr("data-offset-top",t229_curSection.offset().top)})}
function t229_getSectionByHref(curlink){var t229_curLinkValue=curlink.attr("href").replace(/\s+/g,'');if(t229_curLinkValue[0]=='/'){t229_curLinkValue=t229_curLinkValue.substring(1)}
if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t229_curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t229_curLinkValue.substring(1)+"']")}}
function t229_highlightNavLinks(t229_navLinks,t229_sections,t229_sectionIdTonavigationLink,t229_clickedSectionId){var t229_scrollPosition=$(window).scrollTop(),t229_valueToReturn=t229_clickedSectionId;if(t229_sections.length!=0&&t229_clickedSectionId==null&&t229_sections[t229_sections.length-1].attr("data-offset-top")>(t229_scrollPosition+300)){t229_navLinks.removeClass('t-active');return null}
$(t229_sections).each(function(e){var t229_curSection=$(this),t229_sectionTop=t229_curSection.attr("data-offset-top"),t229_id=t229_curSection.attr('id'),t229_navLink=t229_sectionIdTonavigationLink[t229_id];if(((t229_scrollPosition+300)>=t229_sectionTop)||(t229_sections[0].attr("id")==t229_id&&t229_scrollPosition>=$(document).height()-$(window).height())){if(t229_clickedSectionId==null&&!t229_navLink.hasClass('t-active')){t229_navLinks.removeClass('t-active');t229_navLink.addClass('t-active');t229_valueToReturn=null}else{if(t229_clickedSectionId!=null&&t229_id==t229_clickedSectionId){t229_valueToReturn=null}}
return!1}});return t229_valueToReturn}
function t229_setPath(pageid){}
function t229_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t229").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t229").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t229_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$("#rec"+recid+" .t229").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");el.animate({"opacity":"1","top":"0px"},200,function(){})}}else{el.stop();el.css("visibility","hidden")}}})}}
function t229_changeBgOpacityMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t229").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll)}else{el.css("background-color",bgcolor)}})}}
function t537_setHeight(recid){var t537__el=$("#rec"+recid),t537__image=t537__el.find(".t537__bgimg:first"),t537__width=t537__image.attr("data-image-width"),t537__height=t537__image.attr("data-image-height"),t537__ratio=t537__height/t537__width,t537__padding=t537__ratio*100;$("#rec"+recid+" .t537__bgimg").css("padding-bottom",t537__padding+"%")}
/*
     FILE ARCHIVED ON 18:02:17 May 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:52:14 Oct 04, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 120.313 (3)
  esindex: 0.006
  captures_list: 678.761
  CDXLines.iter: 12.064 (3)
  PetaboxLoader3.datanode: 284.308 (5)
  exclusion.robots: 5.612
  exclusion.robots.policy: 5.6
  RedisCDXSource: 538.319
  PetaboxLoader3.resolve: 3098.736 (2)
  load_resource: 3354.323
*/