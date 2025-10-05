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

let access_token = null;
await getBearerToken().then((data) => {
    access_token = data.access_token;
});
console.log(access_token);
export async function getAlbumID(query) {
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${query}&limit=1&artist=Taco%2520Hemingway&type=album&market=PL`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Spotify API error: ${response.statusText})`);
        }

        return response.json();
    } catch (error) {
        console.error("cant get data", error);
    }
}
export let albumData = [];
const albumNames = ["1-800-oswiecenie", "jarmark"];

for (let i = 0; i < albumNames.length; i++) {
    let singleAlbumData = null;
    await getAlbumID(albumNames[i]).then((data) => {
        singleAlbumData = data;
    })
    albumData.push(singleAlbumData);
}