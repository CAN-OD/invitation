/**
 * Created by SF-1888 on 2016/9/28.
 */


define(["jquery","ckplayer","audioplayer"],function($){
    $(function(){

        // 视频加载
        videoMethod();
        function videoMethod(){
            var flashvars={
                p:0,
                e:1
//                i:'images/IMG_0004.JPG'
            };
            var video=['images/voiceBand/video/one.mp4->video/mp4'];
            var support=['all'];
            CKobject.embedHTML5('a1','ckplayer_a1',600,400,video,flashvars,support);
        }


        // 音乐加载
        //
        (function(doc){
            var addEvent='addEventListener',
                type='gesturestart',
                qsa='querySelectorAll',
                scales=[1,1],
                meta=qsa in doc?doc[qsa]('meta[name=viewport]'):[];
            function fix(){
                meta.content='width=device-width,minimum-scale='+scales[0]+',maximum-scale='+scales[1];
                doc.removeEventListener(type,fix,true);
            }
            if((meta=meta[meta.length-1])&&addEvent in doc){
                fix();
                scales=[.25,1.6];
                doc[addEvent](type,fix,true);
            }
        }(document));
        //
        $( 'audio' ).audioPlayer();

    });



    return {
        $:$,
        aa:111
    };
});