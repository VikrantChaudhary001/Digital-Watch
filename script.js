const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
   
if(htime < 10){
    htime = '0' + htime;
}
if(mtime < 10){
    mtime = '0' + mtime;
}
if(stime < 10){
    stime = '0' + stime;
}
   
hour.textContent = htime;
minute.textContent = mtime;
second.textContent = stime;
}, 1000);