function verif1(){
    let np =document.getElementById("npermis").value ;
    let n =document.getElementById("nom").value ;
    let p =document.getElementById("prenom").value ;
    let l = np.length;
    let ln=n.length
    let lp=p.length
    let f=document.getElementById("f").checked
    let m=document.getElementById("m").checked
    let v = document.getElementById("ville").selectedIndex
    
    if(l>8 || l<8 || isnum()==false || np.indexOf("/")!=2){
        window.alert("verifier le numero permis")
        
    }
    if (!islettres(ln,n) || ln<3 & ln>20){
        window.alert("verifier le nom")

    }
    
    if (!islettres(lp,p) || lp<3 & lp>20){
        window.alert("verifier le prénom")

    }
    if(!m & !f){
        window.alert("champ genre est obligatoire")
    }
    if(v==0){
        window.alert("champ ville est obligatiore")
    }
    
}

function checkent(){

    
    let s =document.getElementById("securite").value
    let c =document.getElementById("conduite").value
    let co =document.getElementById("confort").value
    let ls=s.length
    let lc =c.length
    let lco=co.length
    if(ls<1 || ls>5){
        return false
    }
    return true
}



function verif2(){
    let np =document.getElementById("npermis").value ;
    let l = np.length;
    let v = document.getElementById("model").selectedIndex
   

    if(l>8 || l<8 || isnum()==false || np.indexOf("/")!=2){
        window.alert("verifier le numero permis")
        
    }
    if (v=="0") {
        window.alert("champ modele obligatoire")
    }
    if (checkent()==false){
        window.alert("valeur entre 1 et 5 ")
    }


}


function islettres(ln,n){
    for (let i = 0; i < ln; i++) {
        let car=n[i].toUpperCase()
        if(car<"A" || car >"Z"){
            return false
 
        }
    }
    return true


}



function isnum(l,np){
for (let i = 0; i < l; i++) {
    window.alert(i);
    let car=np[i];
    console.log(car)
    if(i!=2){
        if(car<"0" || car >"9"){
            return false

        }
    }
    return true}
}