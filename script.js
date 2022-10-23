const para = document.querySelector('p');
para.addEventListener('click', updateName);
function updateName() {
  let name = prompt("ユーザー名を入力してください。");
  para.textContent = "ユーザー名: "+name;
}
let button = document.querySelector('button');
button.onclick = function f2() {
    let name = prompt('新しいユーザー名を入力してください');
    alert(name + 'に変更しました！');
    para.textContent = "ユーザー名: "+name;
}
var i=0;
function henkou() {
  if(i%2==0){
    img = document.getElementById("img_file").src="python-logo.png";
    i++;
  }else{
    img = document.getElementById("img_file").src="Python_logo_and_wordmark.svg.png";
    i++;
  }
}
  
