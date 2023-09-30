document.addEventListener("DOMContentLoaded", ()=>{
    let session =  JSON.parse(localStorage.getItem('sessionGes'))
    let user = document.querySelector('.user')
    let inserForm = document.querySelector('.inserForm')
    let btnEnr = document.getElementById('btnEnr')
    let msg = document.querySelector('.msg')
    let btndes = document.querySelector('.btndes')
    console.log(session)
   if(session == null){
    window.location.href = "../index.html"
   }
   btndes.addEventListener('click',()=>{
        localStorage.removeItem("sessionGes")
        window.location.href = "../index.html"

   })
   
   user.textContent = session.nom
   inserForm.addEventListener("submit",(e)=>{
    e.preventDefault()
   })
   btnEnr.addEventListener('click', ()=>{
        let liste = JSON.parse(localStorage.getItem('listeClient'))
        let nom = document.getElementById('nom').value
        let tel = document.getElementById('tel').value
        let produit = document.getElementById('produit').value
        let montant = document.getElementById('montant').value

        if(nom !== "" && tel !== ""  && produit !== ""  && montant !== ""  ){
            let data = {
                nom,
                tel,
                produit,
                montant,
                session: session.nom,
                key: session.tel
            }
            if(liste == null){
                liste =[]
                liste.push(data)
                localStorage.setItem("listeClient",JSON.stringify(liste))
                msg.textContent = "ajouter effectué"
                window.location.reload()
            }
            else{
                liste.push(data)
                localStorage.setItem("listeClient",JSON.stringify(liste))
                msg.textContent = "ajouter effectué"
                window.location.reload()
            }
        }
        else {
         msg.textContent = "erreur"
        }
   })
let tbody = document.querySelector("tbody")
console.log(tbody)
let listeProd = JSON.parse(localStorage.getItem("listeClient")) 
console.log(listeProd)

listeProd.forEach(element => {
    if(element.session == session.nom && element.key== session.tel ){
        let tex = `
         <tr>
        <td data-title="Nom">${element.nom}</td>
        <td data-title="Nationalité">${element.tel}</td>
        <td data-title="Date création">${element.produit}</td>
        <td data-title="Date création">${element.montant}</td>
    </tr>
        `
        tbody.innerHTML += tex
    }
    
});

})