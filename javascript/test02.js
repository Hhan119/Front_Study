
/*
html 요소에 일어나는 이벤트 종류
버튼 클릭하면                   => click
마우스 커서를 올리면             => mouseover
마우스 커서가 요소를 벗어나면     => mouseout
마우스 클릭하면                  => mousedown
마우스를 클릭 후 때면            => mouseup
포커스가 오면                    => focus
포커스를 잃으면                  => blur 
등등 
*/

document.querySelector("#myBtn").addEventListener("click", function(){

});

document.querySelector("#one").addEventListener("mouseover", ()=>{
    document.querySelector("#one").innerText="확인";

});

document.querySelector("#inputMsg").value="안녕하세요";
    
document.querySelector("#one").innerText="p1입니다.";