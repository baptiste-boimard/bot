#!/bin/bash

for(( i=1; i<=100; i++)); do

    # Se logger à Proton VPN
    protonvpn-cli login bouketin28@gmail.com

    # Connection Random a un server
    protonvpn-cli connect -r

    # Demande de status de connexion
    protonvpn-cli status

    # Exécuter le script PowerShell
    pwsh -File /home/punky/Téléchargements/carabistouille.ps1

    echo "Ceci est le tour de boucle N°$i"

done


#protonvpn-cli connect PT#8 -p tcp

