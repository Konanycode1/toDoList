
document.addEventListener("DOMContentLoaded", ()=>{
    function inscription() {
        let btn = document.querySelector('.btn');
        let meForm = document.querySelector(".meForm")
        let msg = document.querySelector('.msg')

        meForm?.addEventListener('submit',(e)=>{
           e.preventDefault()
        })
        btn.addEventListener("click", ()=>{
            let nom = document.getElementById('nom').value
            let tel = document.getElementById('tel').value
            let pass = document.getElementById('pass').value
            let mpass = document.getElementById('mpass').value
            
            let data = {
                nom,
                tel,
                pass
            }
          
            if(nom != "" && tel != "" && pass != "" && mpass != ""){
                if(mpass == pass){

                    let gest = JSON.parse(localStorage.getItem('gestion')) 
                    if(gest == null){
                        gest =[]
                        gest.push(data)
                        localStorage.setItem("gestion",JSON.stringify(gest))
                        window.location.href = "../index.html"
                    }
                    else{
                        gest.push(data)
                        localStorage.setItem("gestion",JSON.stringify(gest))
                        window.location.href = "../index.html"
                    }

                }
                else {
                    msg.textContent = "le mot de passe n'est pas identique"
                }
            }
            else {
                    msg.textContent = "Veuillez remplir tout les champs"
                }

           
        })
        
    }
    inscription()
  
})