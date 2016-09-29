/**
 * Created by SF-1888 on 2016/9/28.
 */
require.config({
    baseUrl: "./js/",
    paths : {
        "jquery" : ["jquery/jquery-1.7.1"],
        "index" : "index",
        "ckplayer" : "plugin/ckplayer/ckplayer"
    },
    shim:{

    }
});

require(["index"],function(option){
    option.$(function(){

    })
});
