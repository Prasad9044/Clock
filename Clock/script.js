
        let hour=document.getElementById("hr");
        let min=document.getElementById("mn");
        let sec=document.getElementById("sec");

        function updateTime(){
            let tm=new Date();
            let hr=tm.getHours();
            let mn=tm.getMinutes();
            let sc=tm.getSeconds();
            hour.innerHTML=hr;
            min.innerHTML=mn;
            sec.innerHTML=sc;
        }
        setInterval(updateTime,1000);
        updateTime();

        
