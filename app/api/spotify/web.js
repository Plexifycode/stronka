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
export let albumIDs = [];
const albumNames = [
    "trojkat warszawski",
    "0,25mg",
    "cafe belga",
    "jarmark",
    "1-800oswiecenie",
];

async function fillAlbumIDs() {
    for (let i = 0; i < albumNames.length; i++) {
        let albumID = null;
        await getAlbumID(albumNames[i]).then((data) => {
            const albumURI = data["albums"]["items"][0]["uri"];
            albumID = albumURI.replace("spotify:album:", "");
        });
        albumIDs.push(albumID);
    }
}
await fillAlbumIDs();

export let albumsData = [];
export async function getAlbumsData() {
    let ids = "";
    for (let i = 0; i < albumIDs.length; i++) {
        const albumID = albumIDs[i];
        ids += albumID;
        if (i !== albumIDs.length - 1) {
            ids += ",";
        }
    }
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/albums?ids=${ids}`,
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
const test = null;
await getAlbumsData().then((data) => {
    albumsData = data["albums"];
});
