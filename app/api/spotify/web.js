import React from "react";

export async function getBearerToken() {
    const env_client_id = process.env.SPOTIFY_CLIENT_ID;
    const env_client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    let bearer_token = null;
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: env_client_id,
                client_secret: env_client_secret,
            }),
        });
        if (!response.ok) {
            throw new Error(`Spotify API error: ${response.statusText}`);
        }

        bearer_token = await response.json();
        return bearer_token;
    } catch (error) {
        console.error("can't get bearer :( ", error);
    }
}
// export async function getStaticProps(params) {
//     console.log("mam nadzieje ze spotify mnie nie zabije za testy");
// }
