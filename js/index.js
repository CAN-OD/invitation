/**
 * Created by SF-1888 on 2016/9/28.
 */


define(["jquery","ckplayer"],function($){
    $(function(){

        // 视频加载
        videoMethod();
        function videoMethod(){
            var flashvars={
                p:0,
                e:1,
                i:'images/IMG_0004.JPG'
            };
            var video=['voiceBand/video/one.mp4->video/mp4'];
            var support=['all'];
            CKobject.embedHTML5('a1','ckplayer_a1',600,400,video,flashvars,support);
        }

    });
    return {
        $:$,
        aa:111
    };
});