document.addEventListener("DOMContentLoaded", ()=>{
    function inscription() {
        let btn = document.querySelector('.btn');
        let meForm = document.querySelector(".meForm")

        meForm.addEventListener('submit',(e)=>{
           e.preventDefault()
        })
        btn.addEventListener("click", ()=>{
            let nom = document.getElementById('nom').value
            let tel = document.getElementById('tel').value
            let pass = document.getElementById('pass').value
            let mpass = document.getElementById('mpass').value
        })
        
    }
    inscription()
})