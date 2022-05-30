let a=document.getElementById('enlace');
a.addEventListener('click',function (event) {
  event.preventDefault(); //esto cancela el comportamiento del click
  setTimeout(()=> location.href=[routerLink]="['/perfil']",4000);
});