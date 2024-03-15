# $session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
# $session.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
# $session.Cookies.Add((New-Object System.Net.Cookie("WEBSRVID", "eddv-acti-mutu-front-2.eolas-services.com", "/", "www.talenteo.fr")))
# Invoke-WebRequest -UseBasicParsing -Uri "https://www.talenteo.fr/wp/wp-admin/admin-ajax.php" `
# -Method "POST" `
# -WebSession $session `
# -Headers @{
# "authority"="www.talenteo.fr"
#   "method"="POST"
#   "path"="/wp/wp-admin/admin-ajax.php"
#   "scheme"="https"
#   "accept"="*/*"
#   "accept-encoding"="gzip, deflate, br"
#   "accept-language"="en-US,en;q=0.7"
#   "origin"="https://www.talenteo.fr"
#   "referer"="https://www.talenteo.fr/talenteo-awards-2024-vote/"
#   "sec-ch-ua"="`"Chromium`";v=`"122`", `"Not(A:Brand`";v=`"24`", `"Brave`";v=`"122`""
#   "sec-ch-ua-mobile"="?0"
#   "sec-ch-ua-platform"="`"Windows`""
#   "sec-fetch-dest"="empty"
#   "sec-fetch-mode"="cors"
#   "sec-fetch-site"="same-origin"
#   "sec-gpc"="1"
#   "x-requested-with"="XMLHttpRequest"
# } `
# -ContentType "application/x-www-form-urlencoded; charset=UTF-8" `
# -Body "action=polls&view=process&poll_id=10&poll_10=168&poll_10_nonce=55f0c9eb4a"



#!/bin/sh

# Définir l'URL de la requête
url="https://www.talenteo.fr/wp/wp-admin/admin-ajax.php"

# Définir le corps de la requête
body="action=polls&view=process&poll_id=10&poll_10=168&poll_10_nonce=55f0c9eb4a"

# Exécuter la requête POST avec curl
response=$(curl -s -X POST "$url" \
    -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" \
    -H "authority: www.talenteo.fr" \
    -H "method: POST" \
    -H "path: /wp/wp-admin/admin-ajax.php" \
    -H "scheme: https" \
    -H "accept: */*" \
    -H "accept-encoding: gzip, deflate, br" \
    -H "accept-language: en-US,en;q=0.7" \
    -H "origin: https://www.talenteo.fr" \
    -H "referer: https://www.talenteo.fr/talenteo-awards-2024-vote/" \
    -H "sec-ch-ua: \"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Brave\";v=\"122\"" \
    -H "sec-ch-ua-mobile: ?0" \
    -H "sec-ch-ua-platform: \"Windows\"" \
    -H "sec-fetch-dest: empty" \
    -H "sec-fetch-mode: cors" \
    -H "sec-fetch-site: same-origin" \
    -H "sec-gpc: 1" \
    -H "x-requested-with: XMLHttpRequest" \
    -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" \
    --data "$body")

    # Afficher la réponse
    echo "$response"

    obfs4 [2a03:4000:5d:e27::1]:3785 B591D4BAC262CB148DB6139803738F6C3B7D2B51 cert=ea6xMqIyoUKdbPrxTrIdkNvyJ6y1JUh8/XFhRgMtn1u2smj4oYCulCAVtEdQf26LWY8VPQ iat-mode=0