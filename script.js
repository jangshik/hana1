var Color={
    toNight: function(){
        document.querySelector('body').style.backgroundColor='black'
        document.querySelector('body').style.color='white';
        var links=document.querySelectorAll('a');
        var i=0;
        while(i<links.length){
        links[i].style.color='yellow';
        i=i+1;}
        content.style.color='red';
        asdf.style.color='red';
        asdf1.style.color='red';
        asdf2.style.color='red';
        asdf3.style.color='red';
        asdf4.style.color='red';
        asdf5.style.color='red';
        asdf6.style.color='red';
        asdf0.style.color='red';
    },
    toDay: function(){
        document.querySelector('body').style.backgroundColor='white'
        document.querySelector('body').style.color='black';
        var links=document.querySelectorAll('a');
        var i=0;
        while(i<links.length){
        links[i].style.color='blue';
        i=i+1;}
        content.style.color='black';
        asdf.style.color='white';
        asdf1.style.color='white';
        asdf2.style.color='white';
        asdf3.style.color='white';
        asdf4.style.color='white';
        asdf5.style.color='white';
        asdf6.style.color='white';
        asdf0.style.color='white';
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