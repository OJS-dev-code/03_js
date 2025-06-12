$(function(){
    //video
    let mainVideo = document.getElementById('myvideo');

    //video resize -> 화면크기 줄여도 꽉차게
    function videoResizeFN(){
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let vidW = document.getElementById('myvideo').clientWidth;
        let vidH = document.getElementById('myvideo').clientHeight;

        document.querySelector('.m-video').style.width='100%'
        document.querySelector('.m-video').style.height= winH +'px';
        
        if(winH>vidH){
            document.getElementById('myvideo').style.height=winH+'px';
            document.getElementById('myvideo').style.width= 'auto';
        }
        if(winW>vidW){
            document.getElementById('myvideo').style.height='auto';
            document.getElementById('myvideo').style.width= winW+'px';
        }
    }
    window.addEventListener('resize', videoResizeFN);

    //section1의 video 정지 기능, muted 기능 만들기
    let videoPlay='on';
    let soundMuted='off';

    document.querySelector('.pauseIcon').addEventListener('click',function(e){
        e.preventDefault();

        if(videoPlay==='on'){
            mainVideo.pause();
            videoPlay='off';
            document.querySelector('.pauseIcon i').className="fas fa-play"
        }else{
            mainVideo.play();
            videoPlay='on';
            document.querySelector('.pauseIcon i').className="fas fa-pause"
        }
    });

    document.querySelector('.mutedIcon').addEventListener('click', function(e){       
        e.preventDefault();
        if(soundMuted==="off"){
            mainVideo.muted=false;
            soundMuted="on";
            document.querySelector('.mutedIcon i').className='fas fa-volume-up'
        }else{
            mainVideo.muted=true;
            soundMuted="off";
            document.querySelector('.mutedIcon i').className='fas fa-volume-mute'
        }
    })
    // 스페이스키->영상 재생,정지 엔터키 ->영상사운드
    document.addEventListener('keypress', function(e){
        if(e.keyCode===32){
            e.preventDefault();
            if(videoPlay==='on'){
            mainVideo.pause();
            videoPlay='off';
            document.querySelector('.pauseIcon i').className="fas fa-play"
            }else{
                mainVideo.play();
                videoPlay='on';
                document.querySelector('.pauseIcon i').className="fas fa-pause"
            }
        }
        if(e.keyCode===13){
            e.preventDefault();
            if(soundMuted==="off"){
                mainVideo.muted=false;
                soundMuted="on";
                document.querySelector('.mutedIcon i').className='fas fa-volume-up'
            }else{
                mainVideo.muted=true;
                soundMuted="off";
                document.querySelector('.mutedIcon i').className='fas fa-volume-mute'
            }
        }
    });

    //video가 끝나면 again 버튼이 나타나고 누르면 영상이 다시 재생됨
    mainVideo.autoplay=true;
    mainVideo.loop= 0;

    let setId=setInterval(function(){
        if(mainVideo.ended){
            document.querySelector('.m-again').style.display='block';
            videoPlay='off';
            document.querySelector('.pauseIcon i').className='fas fa-play';
            clearInterval(setId)
        }
    },100)

    document.querySelector('.m-again').addEventListener('click', function(){
        videoPlay='on';
        mainVideo.play();
        document.querySelector('.pauseIcon i').className='fas fa-pause';
        this.style.display='none'
    })
})