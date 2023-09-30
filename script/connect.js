document .addEventListener("DOMContentLoaded", ()=>{
    connxion()
    function connxion() {
        let gestion = JSON.parse(localStorage.getItem('gestion'))
        let form = document.querySelector('.log')
        let btnlog = document.querySelector('.btnsub')
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            console.log('ok')
        })

        btnlog.addEventListener('click',()=>{
            let tel = document.querySelector('#tel').value
            let pass = document.querySelector('#pass').value
            if(tel !== "" && pass !==""){
               gestion.forEach(element => {
                if(element.tel === tel && element.pass === pass){
                    let data = {
                        tel:tel,
                        nom: element.nom
                    }
                    localStorage.setItem('sessionGes', JSON.stringify(data))
                    setTimeout(()=>{
                        window.location.href = "./page/accueil.html"
                    },100)
                    
                }
                else{
                    msg.textContent = "verifier vos identifaint"
                }
                
               });

            }
            else{
                msg.textContent = "champ vide"
            }
        })

        
    }
})