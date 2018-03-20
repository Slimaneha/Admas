







 homme = document.getElementById("homeUn")
 adultes= document.getElementById("adultes")
 enfants= document.getElementById("enfants")

choix = 0; 

// Fuction choix de là langue 













function ChoixLanFr ()
{
     choix=1;
    document.getElementById("langueUn").style.display="none"
    document.getElementById("homeUn").style.display="block  "
    document.getElementById("nav").style.display="flex"

    

}










// Affiche et cache l'élément non sélctioner 
function ChoxiDeux  ()

{


}




function lienAdl ()
{
    document.getElementById("enfants").style.display="none"
    document.getElementById("adultes").style.display="block"
    document.getElementById('homeUn').style.display="none"


}

function lienEfan ()
{
    document.getElementById("enfants").style.display="block"
    document.getElementById("adultes").style.display="none"
    document.getElementById('homeUn').style.display="none"


}

function lienHome ()
{
    document.getElementById("enfants").style.display="none"
    document.getElementById("adultes").style.display="none"
    document.getElementById('homeUn').style.display="block"


}








function ChoixUk ()
{
    document.getElementById("langueUn").style.display="none"
    document.getElementById("homeUn").style.display="block  "
    document.getElementById("nav").style.display="flex"
    choix =2 ; 
    

}


function ChoixNl()
{
    choix = 3; 
    document.getElementById("langueUn").style.display="none"
    document.getElementById("homeUn").style.display="block  "
    document.getElementById("nav").style.display="flex"

   
}