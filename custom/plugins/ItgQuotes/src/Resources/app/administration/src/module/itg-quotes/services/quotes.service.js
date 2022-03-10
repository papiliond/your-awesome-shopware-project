export default class QuotesService {
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
                return data;
            })
            .catch((error) => {
                console.error("Couldn't fetch quote.", error);
            });
    }

    getQuote(author) {
        return fetch(
            `https://programming-quotes-api.herokuapp.com/Quotes/Author/${encodeURIComponent(
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
            .then((data) => {
                const index = Math.floor(Math.random() * data.length);
                return data[index];
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
                return (
                    // Convert { "Edsger W. Dijkstra": { "name": "Edsger W. Dijkstra", ... }} to [{name: "Edsger W. Dijkstra", ...}]
                    Object.entries(data)
                        .map(([, value]) => value)
                        // Sort to alphabetical order
                        .sort((a, b) => (a.name >= b.name ? 1 : -1))
                );
            })
            .catch((error) => {
                console.error("Couldn't fetch authors.", error);
            });
    }
}
