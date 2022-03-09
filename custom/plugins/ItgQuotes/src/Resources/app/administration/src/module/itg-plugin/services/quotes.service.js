export default class QuotesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getRandomQuote() {
        return fetch(
            "https://programming-quotes-api.herokuapp.com/Quotes/random",
            {
                method: "GET",
                mode: "cors",
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Response was not ok");
                }
            })
            .then((data) => {
                // Random number between 0 and data length
                const index = Math.floor(Math.random() * (data.length + 1));
                return data[index];
            })
            .catch((error) => {
                console.error("Couldn't fetch quote.", error);
            });
    }

    getQuote(author) {
        return fetch(
            `https://programming-quotes-api.herokuapp.com/Author/${encodeURIComponent(
                author
            )}`,
            {
                method: "GET",
                mode: "cors",
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Response was not ok");
                }
            })
            .catch((error) => {
                console.error("Couldn't fetch quote.", error);
            });
    }

    getAuthors() {
        return fetch("https://programming-quotes-api.herokuapp.com/Authors", {
            method: "GET",
            mode: "cors",
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Response was not ok");
                }
            })
            .then((data) => {
                // { "Edsger W. Dijkstra": { "name": "Edsger W. Dijkstra", ... }} to [{name: "Edsger W. Dijkstra", ...}]
                return Object.entries(data).map(([, value]) => value);
            })
            .catch((error) => {
                console.error("Couldn't fetch authors.", error);
            });
    }
}
