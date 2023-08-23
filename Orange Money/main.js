const boutons = [...document.querySelectorAll('.bouton')]
const bouton = boutons.map(bouton => bouton.value)
const touchAppel = document.getElementById('appel')
const supprime = document.getElementById('delet')
const divBoutons = document.querySelector('.boutons')
const valideProgramme = document.getElementById('valide')
const credit = document.getElementById('credit')
const erreur = document.getElementById('erreur')
const quitterCredit = document.getElementById('quittercredit')
// // variable div paiement
const paiement = document.getElementById('paiement')
const programmeInput = document.getElementById('programmeInput')
const envoiTransfert = document.getElementById('send')
const tarnsfertEffectuer = document.getElementById('tarnsfertEffectuer')
const transfertInput = document.getElementById('transfertInput')
const creditPrix = document.getElementById('creditPrix')
// variable div transfert
const transfert = document.getElementById('transfert')
let monSolde = 10000
// // variable div solde compte
const solde = document.getElementById('solde')
// variable div espace affichage
let espaceAffiche = document.getElementById('espaceAffiche')
espaceAffiche.innerText = ""
document.addEventListener('click', (e) =>{
    const valeur = e.target.value;
    console.log(valeur);
    const indexValeur = bouton.indexOf(valeur)
    const nombre = boutons[indexValeur]
    espaceAffiche.innerText += valeur
    touchAppel.addEventListener('click', function(){
        if (espaceAffiche.innerText === '#144#') {
            // rendre visible le div de programme
            programme.style.display = 'flex'
            // caché le div de espace affiche
            espaceAffiche.style.display = 'none'
            // caché le div des boutons
            divBoutons.style.display = 'none'
            espaceAffiche.innerText === '' 
            // écoute du bouton valider du div programme
            valideProgramme.addEventListener('click', function(){
            // si l'input de programme ne contient rien ne fait aucune action
             if (programmeInput.value === "") { 
            }else{
                // cache div programme
                programme.style.display = 'none'
                programme.style.visibility = 'hidden'
                // si input de programme contient 1 faire:
                if (programmeInput.value === "1") {
                // rendre visible le div de solde
                solde.style.display = 'flex'
                // création element p
                const baliseP = document.getElementById('baliseP');
                // insertion text de p
                baliseP.innerText = 'votre solde est de ' + monSolde + "fr"
                let quitterSolde = document.getElementById('quitterSolde')
                quitterSolde.addEventListener('click', function(){  
                    //caché div solde   
                    solde.style.display = 'none'
                    // rendre visible espace affichage et les boutons
                    espaceAffiche.style.display = 'flex' 
                    divBoutons.style.display = 'flex'
                }) 
                }
                // si l'input de programme contient 2 faire :
                else if(programmeInput.value === "2"){
                    // rendre visible div transfert
                    transfert.style.display = 'flex'
                    // ecouter le bouton envoyer de transfert
                    envoiTransfert.addEventListener('click', function(){
                        // rendre visible div transfert effectuer
                        const tarnsfertEffectuer = document.getElementById('tarnsfertEffectuer')
                        tarnsfertEffectuer.style.display = 'flex'
                        transfert.style.display = 'none'
                        // si le input de transfert est inférieur au solde actuel faire :
                        if (transfertInput.value <= monSolde) {
                            const reussi = document.getElementById('reussi')
                            reussi.style.display = 'flex'
                            let nouveauSolde = monSolde - transfertInput.value
                            let reussiP = document.getElementById('reussiP')
                            reussiP.innerText = "Transfert effectué. Merci! Votre nouveau solde est de " + nouveauSolde 
                            
                            // créer un bouton quitter pour transfert effectuer                        
                             let quitterTranfertYes = document.getElementById('quitterTranfertYes')
                             quitterTranfertYes.addEventListener('click', function(){  
                                 //caché div reussi   
                                 reussi.style.display = 'none'
                                 // rendre visible espace affichage et les boutons
                                 espaceAffiche.style.display = 'flex' 
                                 divBoutons.style.display = 'flex'
                             }) 
                        }else{
                                const echouer = document.getElementById('echouer')
                                let echouerP = document.getElementById('echouerP')
                                echouerP.innerText = "Désolé le transfert n'est pas effectué . Votre solde est inférieur a " + transfertInput.value + ". Votre solde est égal à " + monSolde
                                let quitterTranfertNo = document.getElementById('quitterTranfertNo')
                                quitterTranfertNo.addEventListener('click', function(){  
                                    //caché div echouer
                                    echouer.style.display = 'none'
                                    // rendre visible espace affichage et les boutons
                                    espaceAffiche.style.display = 'flex' 
                                    boutons.style.display = 'flex'
                                })
                        }  
                    })
                }
                // si l'input de programme contient 3 faire :
                else if (programmeInput.value === "3") {
                    // rendre visible div paiement
                    paiement.style.display = 'flex'
                    paiement.style.visibility = 'visible'
                    const envoyerPay = document.getElementById('sendPay')
                    const payInput = document.getElementById('payInput')
                    // ecouter bouton envoyer de paiement
                    envoyerPay.addEventListener('click', function(){
                        paiement.style.display = 'none'
                        const modePay = document.getElementById('modePay')
                        modePay.style.display = 'flex'
                        if (payInput.value === "1") {
                            const liquide = document.getElementById('liquide')
                            liquide.style.display = 'flex'
                            const quitterModePay = document.getElementById('quitterModePay')
                            quitterModePay.addEventListener('click', function(){
                                modePay.style.display = 'none'
                                espaceAffiche.style.display = 'flex'
                                divBoutons.style.display = 'flex'
                            })
                        }else if(payInput.value === "2"){
                            const cheque = document.getElementById('cheque')
                            cheque.style.display = 'flex'
                            const quitterModePayC = document.getElementById('quitterModePayC')
                            quitterModePayC.addEventListener('click', function(){
                                modePay.style.display = 'none'
                                espaceAffiche.style.display = 'flex'
                                divBoutons.style.display = 'flex'
                            })
                        }else{

                        }
                    })
                // ecouter bouton quitter de paiement
                    quitterPay.addEventListener('click', function(){                
                        paiement.style.display = 'none'
                        espaceAffiche.style.display = 'flex'
                        divBoutons.style.display = 'flex'
                    })            
                }
                // si l'input de programme contient 4 faire :
                else if (programmeInput.value === "4") {
                    // rendre visible div credit
                    credit.style.display = 'flex'
                    const numInput = document.getElementById('numInput')
                    const creditPrix = document.getElementById('creditPrix')
                    // ecouter bouton envoyer de envoie credit
                    const envoiNum = document.getElementById('sendNum')
                    envoiNum.addEventListener('click', function(){
                        creditPrix.style.display = 'flex'
                        credit.style.display = 'none'
                        const montantInput = document.getElementById('montantInput')
                        const montant = montantInput.value
                        if (montant <= monSolde) {

                        }
                        // ecouter bouton quitter de montant credit
                        const quitterMontant = document.getElementById('quitterMontant')
                        quitterMontant.addEventListener('click', function(){
                            creditPrix.style.display = 'none'
                            espaceAffiche.style.display = 'flex'
                            divBoutons.style.display = 'flex'
                        })
                    })
                    // ecouter bouton quitter de envoie credit
                    quitterCredit.addEventListener('click', function(){
                        credit.style.display = 'none'
                        espaceAffiche.style.display = 'flex'
                        divBoutons.style.display = 'flex'
                    })
                }
                // si l'input de programme contient 5 faire :
                else if (programmeInput.value === "5") {
                    espaceAffiche.style.display = 'flex'
                    divBoutons.style.display = 'flex'
                }
                // si l'input de programme ne contient rien faire :
                else{
                    espaceAffiche.style.display = 'flex'
                    divBoutons.style.display = 'flex'
                }
            }
        })
        }else{
            erreur.style.display = 'flex'
            divBoutons.style.display = 'none'
            espaceAffiche.style.display = 'nono'
            quitterErreur.addEventListener('click', function(){
                erreur.style.display = 'none'
                espaceAffiche.style.display = 'flex'
                divBoutons.style.display = 'flex'
            }) 
        }
    })
    supprime.addEventListener('click', function(){
        
    espaceAffiche.innerText = ""
    })
    
})
// // variable phone
// const phone = document.getElementById('phone')

// // variable div programme
// const programme = document.getElementById('programme')

// // variable div espace affichage
// const espaceAffiche = document.getElementById('espaceAffiche')


// //  déclaration des touche
// const touch1 = document.getElementById('un')
// const touch2 = document.getElementById('deux')
// const touch3 = document.getElementById('trois')
// const touch4 = document.getElementById('quatre')
// const touch5 = document.getElementById('cinq')
// const touch6 = document.getElementById('six')
// const touch7 = document.getElementById('sept')
// // const touch8 = document.getElementById('huit')
// const touch9 = document.getElementById('neuf')
// const touch0 = document.getElementById('zero')
// const touchzz = document.getElementById('zz')
// const touchEtoil = document.getElementById('etoile')
// const touchAppel = document.getElementById('appel')
// const supprime = document.getElementById('delet')

// // variable div erreur de requete
// const erreur = document.getElementById('erreur')

// // variable quitter erreur de requete
// const quitterErreur = document.getElementById('quitterErreur')

// // variable input programme
// const programmeInput = document.getElementById('programmeInput')
// // variable bouton valide de programme
// const valideProgramme = document.getElementById('valide')

// // variable div solde compte
// const solde = document.getElementById('solde')

// // variable div transfert
// const transfert = document.getElementById('transfert')
// // variable bouton envoyer transfert
// const envoiTransfert = document.getElementById('send')
// // variable bouton quitter transfert
// const quitter = document.getElementById('quitter')
// variable input transfert
// const transfertInput = document.getElementById('transfertInput')

// // variable div paiement
// const paiement = document.getElementById('paiement')
// // variable bouton quitter paiement
// const quitterPay = document.getElementById('quitterPay')

// // variable div numéro achat credit
// const credit = document.getElementById('credit')
// // variable bouton quitter div entrer num transfert credit
// const quitterCredit = document.getElementById('quittercredit')

// // const chequeInput = document.getElementById('liquideInput')
// // liquideInput.value = 0;
// // chequeInput.value = "";
// // let nombreInupt;

// // variable valeur touche
// let nombre = "";
// // variable balise p contenant valeur du touche cliqué
// let affiche
// affiche = document.createElement('p')
// variable concaténation valeur des touche clicqué
// let afficheGlobal = affiche.innerText
// // variable solde compte actuel
// let monSolde = 10000

// // Ecoute clique touche 1
// touch1.addEventListener('click', function(){
//     // affectaion valeur de touche à sa variable
//     nombre = touch1.value
//     // insertion valeur touche à son balise p
//     affiche.innerText = nombre
//     // concaténation des valeurs des touches clicqué
//     afficheGlobal = afficheGlobal + affiche.innerText
//     // ajout affiche comme enfant de espace affuche
//     espaceAffiche.append(afficheGlobal)
// })

// // Ecoute clique touche 2
// touch2.addEventListener('click', function(){
//     nombre = touch2.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
//     espaceAffiche.append(afficheGlobal)
// })

// // Ecoute clique touche 3
// touch3.addEventListener('click', function(){
//     nombre = touch3.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
// //     espaceAffiche.append(afficheGlobal)
// })

// // Ecoute clique touche 4
// touch4.addEventListener('click', function(){
//     nombre = touch4.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
//     espaceAffiche.append(afficheGlobal)
// })

// // Ecoute clique touche 5
// touch5.addEventListener('click', function(){
// //     nombre = touch5.value
// //     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
//     espaceAffiche.append(afficheGlobal)
// })

// // Ecoute clique touche 6
// touch6.addEventListener('click', function(){
//     nombre = touch6.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
//     espaceAffiche.append(affiche)
// })

// // Ecoute clique touche 7
// touch7.addEventListener('click', function(){
//     nombre = touch7.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
//     espaceAffiche.append(afficheGlobal)
// })

// // Ecoute clique touche 8
// touch8.addEventListener('click', function(){
//     nombre = touch8.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
//     espaceAffiche.append(afficheGlobal)
// })

// Ecoute clique touche 9
// touch9.addEventListener('click', function(){
//     nombre = touch9.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
//     espaceAffiche.append(afficheGlobal)
// })

// // Ecoute clique touche 0
// touch0.addEventListener('click', function(){
//     nombre = touch0.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
//     espaceAffiche.append(affiche)
// })

// // Ecoute clique touche #
// touchzz.addEventListener('click', function(){
//     nombre = touchzz.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
//     espaceAffiche.append(afficheGlobal)
// })

// // Ecoute clique touche *
// touchEtoil.addEventListener('click', function(){
//     nombre = touchEtoil.value
//     affiche.innerText = nombre
//     afficheGlobal = afficheGlobal + affiche.innerText
// //     espaceAffiche.append(afficheGlobal)
// })

// // Ecoute clique touche appel
// touchAppel.addEventListener('click', function(){
//     // rendre visible le div de programme
//     programme.style.display = 'flex'
//     programme.style.visibility = 'visible'
//     // caché le div de espace affiche
//     espaceAffiche.style.display = 'none'
//     espaceAffiche.style.visibility = 'hidden' 
//     // caché le div des boutons
//     boutons.style.display = 'none'
//     boutons.style.visibility = 'hidden'
//     // vérification si la contaténation des touches cliqué équivaut à #144#
//     if (afficheGlobal === "#144#") {  
//         // écoute du bouton valider du div programme
//         valideProgramme.addEventListener('click', function(){
//         // si l'input de programme ne contient rien ne fait aucune action
//         if (programmeInput.value === "") {
            
//         }        
//         // si l'input de programme contient quelque chose faire :
//         else {
//             // cache div programme
//             programme.style.display = 'none'
//             programme.style.visibility = 'hidden'
//             // si input de programme contient 1 faire:
//             if (programmeInput.value === "1") {
//                 // rendre visible le div de solde
//                 solde.style.display = 'flex'
//                 solde.style.visibility = 'visible'
//                 // création element p
//                 const baliseP = document.createElement('p');
//                 // insertion text de p
//                 baliseP.innerText = 'votre solde est de ' + monSolde + "fr"
//                 // ajouter la balise p dans solde
//                 solde.append(baliseP);
//                 let quitterSolde = document.createElement('button')
//                 quitterSolde.innerText = "Quitter"
//                 solde.append(quitterSolde)
//                 // créer un bouton quitter pour solde
//                 quitterSolde.addEventListener('click', function(){  
//                     //caché div solde   
//                     solde.style.display = 'none'
//                     solde.style.visibility = 'hidden'
                    
//                     // rendre visible espace affichage et les boutons
//                     espaceAffiche.style.display = 'flex'
//                     espaceAffiche.style.visibility = 'visible' 
//                     boutons.style.display = 'flex'
//                     boutons.style.visibility = 'visible' 
//                 }) 
//             }
//             // si l'input de programme contient 2 faire :
//             else if(programmeInput.value === "2"){                    
//                 // rendre visible div transfert
//                 transfert.style.display = 'flex'
//                 transfert.style.visibility = 'visible'
//                 // ecouter le bouton envoyer de transfert
//                 envoiTransfert.addEventListener('click', function(){
//                     // rendre visible div transfert effectuer
//                     const tarnsfertEffectuer = document.getElementById('tarnsfertEffectuer')
//                     tarnsfertEffectuer.style.display = 'flex'
//                     transfert.style.display = 'none'
//                     transfert.style.visibility = 'hidden'
//                     // si le input de transfert est inférieur au solde actuel faire :
//                     if (transfertInput.value <= monSolde) {
//                         let nouveauSolde = monSolde - transfertInput.value
//                         const reussi = document.getElementById('reussi')
//                         let reussiP = document.createElement('p')
//                         reussiP.innerText = "Transfert effectué. Merci! Votre nouveau solde est de " + nouveauSolde 
//                         reussi.append(reussiP)
//                         // créer un bouton quitter pour transfert effectuer
//                         let quitterTranfertYes = document.createElement('button')
//                         quitterTranfertYes.innerText = "Quitter"
//                         reussi.append(quitterTranfertYes)
//                         quitterTranfertYes.addEventListener('click', function(){  
//                             //caché div reussi   
//                             reussi.style.display = 'none'
//                             reussi.style.visibility = 'hidden'
                        
//                             // rendre visible espace affichage et les boutons
//                             espaceAffiche.style.display = 'flex'
//                             espaceAffiche.style.visibility = 'visible' 
//                             boutons.style.display = 'flex'
//                             boutons.style.visibility = 'visible' 
//                         })
//                     }else{
//                         const echouer = document.getElementById('echouer')
//                         let echouerP = document.createElement('p')
//                         echouerP.innerText = "Désolé le transfert n'est pas effectué . Votre solde est inférieur a " + transfertInput.value + ". Votre solde est égal à " + monSolde
//                         echouer.append(echouerP)// créer un bouton quitter pour transfert effectuer
//                         let quitterTranfertNo = document.createElement('button')
//                         quitterTranfertNo.innerText = "Quitter"
//                         echouer.append(quitterTranfertNo)
//                         quitterTranfertNo.addEventListener('click', function(){  
//                             //caché div echouer   
//                             echouer.style.display = 'none'
//                             echouer.style.visibility = 'hidden'
                        
//                             // rendre visible espace affichage et les boutons
//                             espaceAffiche.style.display = 'flex'
//                             espaceAffiche.style.visibility = 'visible' 
//                             boutons.style.display = 'flex'
//                             boutons.style.visibility = 'visible' 
//                         })
//                     }           
//                 })
                
//                 // ecouter le bouton quitter de transfert
//                 quitter.addEventListener('click', function(){                
//                     transfert.style.display = 'none'
//                     transfert.style.visibility = 'hidden'
//                     espaceAffiche.style.display = 'flex'
//                     espaceAffiche.style.visibility = 'visible' 
//                     boutons.style.display = 'flex'
//                     boutons.style.visibility = 'visible' 
//                 })
//             }
//             // si l'input de programme contient 3 faire :
//             else if (programmeInput.value === "3") {
//                 // rendre visible div paiement
//                 paiement.style.display = 'flex'
//                 paiement.style.visibility = 'visible' 
//                 const envoyerPay = document.getElementById('sendPay')
//                 const payInput = document.getElementById('payInput')
//                 // ecouter bouton envoyer de paiement
//                 envoyerPay.addEventListener('click', function(){                 
//                     paiement.style.display = 'none'
//                     paiement.style.visibility = 'hidden' 
//                     const modePay = document.getElementById('modePay')
//                     modePay.style.display = 'flex'
//                     if (payInput.value === "1") {
//                         // creation des element de paiment liquide
//                         const liquideP = document.createElement('h1')
//                         liquideP.innerText = "Paiement Liquide"
//                         const liquideInput = document.createElement('input')
//                         liquideInput.style.width = "200px"
//                         liquideInput.placeholder = "Saisir le montant en entier"
//                         const quitterModePay = document.createElement('button')
//                         quitterModePay.innerText = "Quitter"
//                         quitterModePay.style.width = "100px"                    
//                         quitterModePay.style.height = "40px"
//                         modePay.append(liquideP)
//                         modePay.append(liquideInput)
//                         modePay.append(quitterModePay)
//                         quitterModePay.addEventListener('click', function(){
//                             modePay.style.display = 'none'
//                             espaceAffiche.style.display = 'flex'
//                             espaceAffiche.style.visibility = 'visible' 
//                             boutons.style.display = 'flex'
//                             boutons.style.visibility = 'visible'
//                         })
//                     }else if(payInput.value === "2"){
//                         // creation des element de paiment cheque
//                         const chequeP = document.createElement('h1')
//                         chequeP.innerText = "Paiement chéque"
//                         const chequeInput = document.createElement('input')
//                         chequeInput.style.width = "300px"
//                         chequeInput.placeholder = "Saisir le montant en  chaîne de caractères"
//                         const quitterModePay = document.createElement('button')
//                         quitterModePay.innerText = "Quitter"
//                         quitterModePay.style.width = "100px"                    
//                         quitterModePay.style.height = "40px"
//                         modePay.append(chequeP)
//                         modePay.append(chequeInput)
//                         modePay.append(quitterModePay)
//                         quitterModePay.addEventListener('click', function(){
//                             modePay.style.display = 'none'
//                             espaceAffiche.style.display = 'flex'
//                             espaceAffiche.style.visibility = 'visible' 
//                             boutons.style.display = 'flex'
//                             boutons.style.visibility = 'visible'
//                         })
//                     }else{

//                     }

//                 })
//                 // ecouter bouton quitter de paiement
//                 quitterPay.addEventListener('click', function(){                
//                     paiement.style.display = 'none'
//                     espaceAffiche.style.display = 'flex'
//                     espaceAffiche.style.visibility = 'visible' 
//                     boutons.style.display = 'flex'
//                     boutons.style.visibility = 'visible' 
//                 })            
//             }
//             // si l'input de programme contient 4 faire :
//             else if (programmeInput.value === "4") { 
//                 // rendre visible div credit
//                 credit.style.display = 'flex'
//                 credit.style.visibility = 'visible'
//                 const numInput = document.getElementById('numInput')
//                 const creditPrix = document.getElementById('creditPrix')
//                 // if (numInput.value === "") {  

//                 // } else {
                    
//                 // }
                
//                 // ecouter bouton envoyer de envoie credit
//                 const envoiNum = document.getElementById('sendNum')
//                     envoiNum.addEventListener('click', function(){
//                         creditPrix.style.display = 'flex'
//                         creditPrix.style.visibility = 'visible'
//                         credit.style.display = 'none'
//                         credit.style.visibility = 'hidden'
//                         const montantInput = document.getElementById('montantInput')
//                         const montant = montantInput.value
//                         if (montant <= monSolde) {
                            
//                         }
//                         // ecouter bouton quitter de montant credit
//                         const quitterMontant = document.getElementById('quitterMontant')
//                         quitterMontant.addEventListener('click', function(){
//                             creditPrix.style.display = 'none'
//                             creditPrix.style.visibility = 'hidden'
//                             espaceAffiche.style.display = 'flex'
//                             espaceAffiche.style.visibility = 'visible' 
//                             boutons.style.display = 'flex'
//                             boutons.style.visibility = 'visible'
//                         })
//                     })
//                     // ecouter bouton quitter de envoie credit
//                 quitterCredit.addEventListener('click', function(){                
//                     credit.style.display = 'none'
//                     credit.style.visibility = 'hidden'
//                     espaceAffiche.style.display = 'flex'
//                     espaceAffiche.style.visibility = 'visible' 
//                     boutons.style.display = 'flex'
//                     boutons.style.visibility = 'visible' 
//                 })           
//             }
//             // si l'input de programme contient 5 faire :
//             else if (programmeInput.value === "5") { 
//                 espaceAffiche.style.display = 'flex'
//                 espaceAffiche.style.visibility = 'visible' 
//                 boutons.style.display = 'flex'
//                 boutons.style.visibility = 'visible'      
//             }
//             // si l'input de programme ne contient rien faire :
//             else{            
//                 espaceAffiche.style.display = 'flex'
//                 espaceAffiche.style.visibility = 'visible' 
//                 boutons.style.display = 'flex'
//                 boutons.style.visibility = 'visible'
//             }
            
//         }
//         })    
//     }
//     // vérification si la contaténation des touches cliqué n'équivaut pas à #144#
//     else{
//         erreur.style.display = 'flex'
//         erreur.style.visibility = 'visible'
//         programme.style.display = 'none'
//         programme.style.visibility = 'hidden'
//             quitterErreur.addEventListener('click', function(){                
//                 erreur.style.display = 'none'
//                 erreur.style.visibility = 'hidden'
//                 espaceAffiche.style.display = 'flex'
//                 espaceAffiche.style.visibility = 'visible' 
//                 boutons.style.display = 'flex'
//                 boutons.style.visibility = 'visible'
//             }) 
//     }
// })

// supprime.addEventListener('click', function(){
//     afficheGlobal = ""
//     espaceAffiche.append(afficheGlobal)
// })