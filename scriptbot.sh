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

$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$session.UserAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
$session.Cookies.Add((New-Object System.Net.Cookie("WEBSRVID", "eddv-acti-mutu-front-1.eolas-services.com", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-necessary", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-google-maps-embed", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-addthis-social-widget", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-sharethis-social-widget", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-non-necessary", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-soundcloud-player-embed", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-vimeo-embed", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-slideshare-embed", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-youtube-embed", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-acast-embed", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-twitter-social-widget", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-linkedin-social-widget", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-instagram-embed", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-pinterest-widget", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cookielawinfo-checkbox-facebook-pixel-scripts", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("viewed_cookie_policy", "yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("cli_user_preference", "fr-cli-yes-checkbox-necessary-yes-checkbox-google-maps-embed-yes-checkbox-addthis-social-widget-yes-checkbox-sharethis-social-widget-yes-checkbox-non-necessary-yes-checkbox-soundcloud-player-embed-yes-checkbox-vimeo-embed-yes-checkbox-slideshare-embed-yes-checkbox-youtube-embed-yes-checkbox-acast-embed-yes-checkbox-twitter-social-widget-yes-checkbox-linkedin-social-widget-yes-checkbox-instagram-embed-yes-checkbox-pinterest-widget-yes-checkbox-facebook-pixel-scripts-yes", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("CookieLawInfoConsent", "eyJ2ZXIiOiIxIiwibmVjZXNzYXJ5IjoidHJ1ZSIsImdvb2dsZS1tYXBzLWVtYmVkIjoidHJ1ZSIsImFkZHRoaXMtc29jaWFsLXdpZGdldCI6InRydWUiLCJzaGFyZXRoaXMtc29jaWFsLXdpZGdldCI6InRydWUiLCJub24tbmVjZXNzYXJ5IjoidHJ1ZSIsInNvdW5kY2xvdWQtcGxheWVyLWVtYmVkIjoidHJ1ZSIsInZpbWVvLWVtYmVkIjoidHJ1ZSIsInNsaWRlc2hhcmUtZW1iZWQiOiJ0cnVlIiwieW91dHViZS1lbWJlZCI6InRydWUiLCJhY2FzdC1lbWJlZCI6InRydWUiLCJ0d2l0dGVyLXNvY2lhbC13aWRnZXQiOiJ0cnVlIiwibGlua2VkaW4tc29jaWFsLXdpZGdldCI6InRydWUiLCJpbnN0YWdyYW0tZW1iZWQiOiJ0cnVlIiwicGludGVyZXN0LXdpZGdldCI6InRydWUiLCJmYWNlYm9vay1waXhlbC1zY3JpcHRzIjoidHJ1ZSJ9", "/", "www.talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("_ga_FSBYLLVKX7", "GS1.1.1710495182.9.0.1710495182.0.0.0", "/", ".talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("_ga", "GA1.2.1807176454.1709846605", "/", ".talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("_gid", "GA1.2.1850034914.1710495182", "/", ".talenteo.fr")))
$session.Cookies.Add((New-Object System.Net.Cookie("_gat_gtag_UA_29424880_1", "1", "/", ".talenteo.fr")))
Invoke-WebRequest -UseBasicParsing -Uri "https://www.talenteo.fr/wp/wp-admin/admin-ajax.php" `
-Method "POST" `
-WebSession $session `
-Headers @{
"authority"="www.talenteo.fr"
  "method"="POST"
  "path"="/wp/wp-admin/admin-ajax.php"
  "scheme"="https"
  "accept"="*/*"
  "accept-encoding"="gzip, deflate, br"
  "accept-language"="fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
  "origin"="https://www.talenteo.fr"
  "referer"="https://www.talenteo.fr/talenteo-awards-2024-vote/"
  "sec-ch-ua"="`"Not_A Brand`";v=`"8`", `"Chromium`";v=`"120`", `"Google Chrome`";v=`"120`""
  "sec-ch-ua-mobile"="?0"
  "sec-ch-ua-platform"="`"Linux`""
  "sec-fetch-dest"="empty"
  "sec-fetch-mode"="cors"
  "sec-fetch-site"="same-origin"
  "x-requested-with"="XMLHttpRequest"
} `
-ContentType "application/x-www-form-urlencoded; charset=UTF-8" `
-Body "action=polls&view=process&poll_id=10&poll_10=168&poll_10_nonce=a0b1d19cff"