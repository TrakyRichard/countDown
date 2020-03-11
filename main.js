const vingtSeconds = document.getElementById("nav-20s-tab");
const etirement = document.getElementById("nav-etirement-tab");
const nav_chayi_tab = document.getElementById("nav-chayi-tab");
const nav_dambou_tab = document.getElementById("nav-dambou-tab");
const nav_dejeuner_tab = document.getElementById("nav-dejeuner-tab");
const container = document.querySelector('.alignement');
const buttonDiv = document.querySelector('.buttons');
const secInput = document.getElementById('time');
const countDown = document.querySelector('.countDown');
const comeBack = document.getElementById('comeBack');


// var seconds;
// var remseconds;
// var minuts;
// var toCount = false;

// function toSubmit(){
//     display('stop');
//     remove('submit');

//     seconds = Number(secInput.value);
//     counting();
// }

// function check(stat){
//     toCount = stat.value;
//     if(stat.id == "start"){
//         display('stop');
//         remove('start');
//     }

//     else if(stat.id == "stop"){
//         display('start');
//         remove('stop');
//     }
// }

// function count(){
//     if(seconds > 0){
//         if(toCount == true){
//             seconds--;
//             remseconds = seconds%60;
//             minuts = Math.floor(seconds/60);
//             if(minuts < 10){
//                 minuts = "0" + minuts;
//             }
//             if(remseconds < 10){
//                 remseconds = "0" + remseconds;
//             }
//             countDown.innerHTML = minuts + " : " + remseconds;
//             }
//     }
//     else {
//         countDown.innerHTML = "Done"
//         display('submit');
//         remove('stop');
    
//     }
// }

// function display(e){
//     document.getElementById(e).style.display = 'block';
// }

// function remove(e){
//     document.getElementById(e).style.display = 'none';
// }

// function counting(){
//     remseconds = seconds%60;
//     minuts = Math.floor(seconds/60);
//     if(minuts < 10){
//         minuts = "0" + minuts;
//     }

//     if(remseconds < 10){
//         remseconds = "0" + remseconds;
//     }
//     countDown.innerHTML = minuts + " : " + remseconds;


//     setInterval(count,1000);
// }


function display(e){
    document.getElementById(e).style.display = 'block';
}

function remove(e){
    document.getElementById(e).style.display = 'none';
}

function toSubmit(){
    var time_in_minutes;
    if(Number(secInput.value)){
        time_in_minutes = Number(secInput.value);
        display('clockdiv');
        display('comeBack')
    }

    else{
        alert('veuillez définir une heure');
        return 0;
    }
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes*60*1000);
    run_clock('clockdiv', deadline);
    remove("etirement");
    remove("chayi");
    remove("dambou");
    remove("dejeuner");
    remove("vingSecond")
    var heures = deadline.getHours();
    var minutes = deadline.getMinutes();
    var secondes = deadline.getSeconds();
    comeBack.innerHTML = 'revenez à  ' + heures +'H &nbsp'+ minutes + 'Min &nbsp' + secondes + 'secondes';
    return 0;
}

function time_remaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    console.log(Date(endtime));
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
    var clock = document.getElementById(id);
    display(id);
	function update_clock(){
		var t = time_remaining(endtime);
		clock.innerHTML = t.hours +' H '+t.minutes+'&nbspminutes: '+t.seconds +'&nbspsecondes';
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock(); // run function once at first to avoid delay
    var timeinterval = setInterval(update_clock,1000);
    
    return;
}
// run_clock('clockdiv',deadline);

vingtSeconds.addEventListener("click", function(){
    var time_in_minutes;
    time_in_minutes = 0.34;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes*60*1000);
    var heures = deadline.getHours();
    var minutes = deadline.getMinutes();
    var secondes = deadline.getSeconds();
    comeBack.innerHTML = 'revenez à  ' + heures +'H &nbsp'+ minutes + 'Min &nbsp' + secondes + 'secondes';
    run_clock('vingSecond', deadline);
    remove("etirement");
    remove("chayi");
    remove("dambou");
    remove("dejeuner");
    remove("clockdiv");
    return 0;
  });

  etirement.addEventListener('click', function(){
      var time_in_minutes;
      time_in_minutes = 5;
      var current_time = Date.parse(new Date());
      var deadline = new Date(current_time + time_in_minutes*60*1000);
      run_clock('etirement', deadline);
      var heures = deadline.getHours();
      var minutes = deadline.getMinutes();
      var secondes = deadline.getSeconds();
      comeBack.innerHTML = 'revenez à  ' + heures +'H &nbsp'+ minutes + 'Min &nbsp' + secondes + 'secondes';
      remove("vingSecond");
      remove("chayi");
      remove("dambou");
      remove("dejeuner");
      remove("clockdiv");
      return 0;
  })

  nav_chayi_tab.addEventListener('click', function(){
    var time_in_minutes;
    time_in_minutes = 15;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes*60*1000);
    run_clock('chayi', deadline);
    var heures = deadline.getHours();
    var minutes = deadline.getMinutes();
    var secondes = deadline.getSeconds();
    comeBack.innerHTML = 'revenez à  ' + heures +'H &nbsp'+ minutes + 'Min &nbsp' + secondes + 'secondes';
    remove("vingSecond");
    remove("etirement");
    remove("dambou");
    remove("dejeuner");
    remove("clockdiv");
    return 0;
   })

   nav_dambou_tab.addEventListener('click', function(){
    var time_in_minutes;
    time_in_minutes = 30;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes*60*1000);
    run_clock('dambou', deadline);
    var heures = deadline.getHours();
    var minutes = deadline.getMinutes();
    var secondes = deadline.getSeconds();
    comeBack.innerHTML = 'revenez à  ' + heures +'H &nbsp'+ minutes + 'Min &nbsp' + secondes + 'secondes';
    remove("vingSecond");
    remove("etirement");
    remove("chayi");
    remove("dejeuner");
    remove("clockdiv");
    return 0;
   })

   nav_dejeuner_tab.addEventListener('click', function(){
    var time_in_minutes;
    time_in_minutes = 60;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes*60*1000);
    run_clock('dejeuner', deadline);
    var heures = deadline.getHours();
    var minutes = deadline.getMinutes();
    var secondes = deadline.getSeconds();
    comeBack.innerHTML = 'revenez à  ' + heures +'H &nbsp'+ minutes + 'Min &nbsp' + secondes + 'secondes';
    remove("vingSecond");
    remove("etirement");
    remove("chayi");
    remove("dambou");
    remove("clockdiv");
    return 0;
   })

