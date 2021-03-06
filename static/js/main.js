var dialog_tpl_css = "<style>\
div.check_version_dialog .aui_header{background:transparent;opacity:1;filter: alpha(opacity=100);}\
div.check_version_dialog .aui_title{color:#fff;text-shadow:none;}\
div.check_version_dialog .aui_min,div.check_version_dialog .aui_max{display:none;}\
div.check_version_dialog .aui_close{border-radius: 12px;}\
div.dialog-simple .dialog_mouse_in{.aui_header{.opacity(100);}}\
div.check_version_dialog .aui_content{overflow: visible;}\
div.check_version_dialog .aui_title{background-color:transparent;border: none;}\
.update_box .hidden{display: none;}\
.update_box{background:#fff;font-size: 14px;box-shadow: 0 5px 30px rgba(0,0,0,0.5);margin-top:-35px;}\
.update_box .title{width:100%;background:#6699cc;color:#fff;height:130px;}\
.update_box .button_radius{text-align:center;margin: 0 auto;padding-top:50px;}\
.update_box .button_radius a{color:#fff;text-decoration:none;border-bottom: 2px solid #f6f6f6;border:2px solid rgba(255,255,255,0.6);\
    border-radius:20px;padding:5px 10px;display: inline-block;font-size: 16px;}\
.update_box .button_radius a i{padding-left: 8px;}\
.update_box .button_radius a:hover,.button_radius a:focus,.button_radius a.this{background:rgba(255,255,255,0.3);}\
.update_box .button_radius a.this:hover{cursor: default;}\
.update_box .ver_tips{float:right; ;text-align: right;text-decoration: none;color:#9CF;display:block;margin-top: -26px;padding-right:10px;}\
.update_box .ver_tips:hover{color:#fff;}\
.update_box .version{color:#fff;font-size: 13px;text-align: center;line-height:50px;height:50px;}\
.update_box .version_info{padding:20px;}\
.update_box .version_info i{font-size:15px;display: block;border-left:3px solid #9cf;padding-left:10px;}\
.update_box .version_info .version_info_content{color: #69c;background:#eee;margin-top: 10px;padding:10px;}\
.update_box .version_info p{height:140px;overflow:auto;}\
.update_box .version_info a{float: right;color:#69c;text-decoration: none;}\
.update_box .progress{box-shadow:0 0 3px #fff;border-radius:20px;margin: 0 auto;margin-bottom:10px;width:170px;height:16px;margin-top: 10px;overflow:hidden !important;}\
.update_box .progress img{width:170px;}\
</style>";
var dialog_tpl_html = "<div class='update_box'>\
    <div class='title'>\
        <div class='button_radius'>\
            <div class='progress hidden'><img src='{{loading_img}}'/></div>\
            {{if has_new}}\
            <a href='javascript:;' class='update_click'><span>{{LNG.update_auto_update}}</span><i class='icon-arrow-right'></i></a>\
            {{else}}\
            <a href='javascript:;' class='this'>{{LNG.update_is_new}}<i class='icon-smile'></i></a>\
            {{/if}}\
        </div>\
        {{if has_new}}<a class='ver_tips ignore' href='javascript:;'>{{LNG.update_ignore}}</a>{{/if}}\
        <div class='version'>{{LNG.update_version_local}}：ver{{ver_local}} | {{LNG.update_version_newest}}：ver {{ver_new}}\
        {{if has_new}}<span class='badge' style='background:#f60;'>new</span>{{/if}}</div>\
        <div style='clear:both'></div>\
    </div>\
    <div class='version_info'>\
        <i>ver {{ver_new}} {{LNG.update_whats_new}}：</i>\
        <div class='version_info_content'>\
            <p>{{echo LNG.update_info}}</p>\
            <a class='more' href='{{readmore_href}}' target='_blank'>{{LNG.update_readmore}}</a>\
            <div style='clear:both'></div>\
        </div>\
    </div>\
</div>";