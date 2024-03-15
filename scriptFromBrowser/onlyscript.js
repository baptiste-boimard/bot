(async function fetchScript() { 
    
    try {
            
        const response = await fetch("https://www.talenteo.fr/wp/wp-admin/admin-ajax.php", {
            "headers": {
            "accept": "*/*",
            "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "voted_10=168; WEBSRVID=eddv-acti-mutu-front-2.eolas-services.com; cookielawinfo-checkbox-necessary=yes; cookielawinfo-checkbox-slideshare-embed=yes; cookielawinfo-checkbox-youtube-embed=yes; cookielawinfo-checkbox-acast-embed=yes; cookielawinfo-checkbox-twitter-social-widget=yes; cookielawinfo-checkbox-linkedin-social-widget=yes; cookielawinfo-checkbox-instagram-embed=yes; cookielawinfo-checkbox-pinterest-widget=yes; cookielawinfo-checkbox-facebook-pixel-scripts=yes; cookielawinfo-checkbox-google-maps-embed=yes; cookielawinfo-checkbox-addthis-social-widget=yes; cookielawinfo-checkbox-sharethis-social-widget=yes; cookielawinfo-checkbox-non-necessary=yes; cookielawinfo-checkbox-soundcloud-player-embed=yes; cookielawinfo-checkbox-vimeo-embed=yes; viewed_cookie_policy=yes; cli_user_preference=fr-cli-yes-checkbox-necessary-yes-checkbox-slideshare-embed-yes-checkbox-youtube-embed-yes-checkbox-acast-embed-yes-checkbox-twitter-social-widget-yes-checkbox-linkedin-social-widget-yes-checkbox-instagram-embed-yes-checkbox-pinterest-widget-yes-checkbox-facebook-pixel-scripts-yes-checkbox-google-maps-embed-yes-checkbox-addthis-social-widget-yes-checkbox-sharethis-social-widget-yes-checkbox-non-necessary-yes-checkbox-soundcloud-player-embed-yes-checkbox-vimeo-embed-yes; CookieLawInfoConsent=eyJ2ZXIiOiIxIiwibmVjZXNzYXJ5IjoidHJ1ZSIsInNsaWRlc2hhcmUtZW1iZWQiOiJ0cnVlIiwieW91dHViZS1lbWJlZCI6InRydWUiLCJhY2FzdC1lbWJlZCI6InRydWUiLCJ0d2l0dGVyLXNvY2lhbC13aWRnZXQiOiJ0cnVlIiwibGlua2VkaW4tc29jaWFsLXdpZGdldCI6InRydWUiLCJpbnN0YWdyYW0tZW1iZWQiOiJ0cnVlIiwicGludGVyZXN0LXdpZGdldCI6InRydWUiLCJmYWNlYm9vay1waXhlbC1zY3JpcHRzIjoidHJ1ZSIsImdvb2dsZS1tYXBzLWVtYmVkIjoidHJ1ZSIsImFkZHRoaXMtc29jaWFsLXdpZGdldCI6InRydWUiLCJzaGFyZXRoaXMtc29jaWFsLXdpZGdldCI6InRydWUiLCJub24tbmVjZXNzYXJ5IjoidHJ1ZSIsInNvdW5kY2xvdWQtcGxheWVyLWVtYmVkIjoidHJ1ZSIsInZpbWVvLWVtYmVkIjoidHJ1ZSJ9; _gid=GA1.2.1353138138.1710316546; _ga_FSBYLLVKX7=GS1.1.1710404816.6.1.1710405163.0.0.0; _ga=GA1.1.1139197033.1710144864",
            "Referer": "https://www.talenteo.fr/talenteo-awards-2024-vote/",
            "Referrer-Policy": "no-referrer-when-downgrade"
            },
            "body": "action=polls&view=process&poll_id=10&poll_10=168&poll_10_nonce=55f0c9eb4a",
            "method": "POST"
        });

        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
    
})();