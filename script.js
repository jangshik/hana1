var Color={
    toNight: function(){
        document.querySelector('body').style.backgroundColor='black'
        document.querySelector('body').style.color='white';
        var links=document.querySelectorAll('a');
        var i=0;
        while(i<links.length){
        links[i].style.color='yellow';
        i=i+1;}
    },
    toDay: function(){
        document.querySelector('body').style.backgroundColor='white'
        document.querySelector('body').style.color='black';
        var links=document.querySelectorAll('a');
        var i=0;
        while(i<links.length){
        links[i].style.color='blue';
        i=i+1;}
    }
  }
 

function timeanddate(){
  alert(Date());
}
function sum(left, right){
  alert(left + right);
}
function greeting(){
  return 'hi';
  console.log(2);
}