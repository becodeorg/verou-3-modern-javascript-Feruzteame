(()=>{"use strict";class e{constructor(e,t){this.graph_temp=e,this.graph_date=t}draw(){const e=this.graph_temp,t=this.graph_date;console.log(e),console.log(t);const r={type:"bar",data:{labels:t,datasets:[{label:"Weekly temperature graph",backgroundColor:["blue","green","red","yellow","purple"],hoverBorderWidth:"3px",hoverBorderColor:"black",data:e}]},options:{}};new Chart(document.getElementById("myChart"),r)}}let t=document.getElementById("weather"),r=document.getElementById("cityName");const a=[],n=[];document.getElementById("submit").addEventListener("click",(function(){({getCity:document.getElementById("city").value,days_record:[],fetchData:function(){fetch("https://api.openweathermap.org/data/2.5/forecast?q="+this.getCity+"&units=metric&appid=808e0c9b54f6aacec3566d6e9ff35b3d").then((e=>e.json())).then((e=>{""==this.getCity&&alert("pls put city name!");let t=e.list;this.dayData(t);let a=this.getCity;r.innerHTML=a}))},separateDailyRecord:function(e,t,r){e.forEach((e=>{const a=new Date(e.dt_txt).getDate();if(t.getDate()===a)r.push(e);else{this.getAverage(r),this.days_record.push(r),r=[];let n=t.setDate(t.getDate()+1);(t=new Date(n)).getDate()===a&&r.push(e)}}))},getAverage:function(e){if(e.length){const t=e.reduce((function(e,t){return e+t.main.temp}),0);e.averTemp=(t/e.length).toFixed(1)+"°C"}},getStrDate:function(e){if(this.days_record[0].length){let t=this.days_record[e][0].dt_txt;return t.slice(0,t.length-9)}},getWeather:function(e){if(this.days_record[0].length)return this.days_record[e][0].weather[0].main},getWeatherDescription:function(e){if(this.days_record[0].length)return this.days_record[e][0].weather[0].description},renderAverage:function(e){if(this.days_record[0].length)return this.days_record[e].averTemp},dayData:function(r){let i=new Date;this.separateDailyRecord(r,i,[]);for(let e=0;e<this.days_record.length;e++){let r=this.days_record[e][0].weather[0].icon,i=document.createElement("DIV");i.className="container";let s=document.createElement("p"),d=document.createElement("p"),o=document.createElement("p"),c=document.createElement("p"),h=document.createElement("img");s.innerHTML=this.getStrDate(e),a.push(this.getStrDate(e)),d.innerHTML=this.getWeather(e),o.innerHTML=this.renderAverage(e),n.push(parseFloat(this.renderAverage(e).substring(-1,1))),c.innerHTML=this.getWeatherDescription(e),h.src=`http://openweathermap.org/img/wn/${r}@2x.png`,i.appendChild(o),i.appendChild(d),i.appendChild(c),i.appendChild(s),i.appendChild(h),t.appendChild(i);let l=t.children[0];l.id="today",l.setAttribute("style"," color:orange; transform: scale(1.1);"),l.children[0].setAttribute("style","font-size: 40px; font-style: italic; color:orangered; margin-top:-15%;line-height: 60px;")}new e(n,a).draw()}}).fetchData()}))})();