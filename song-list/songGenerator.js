function generateSongList(sortBy = "alphabetically") {
    const divPortfolioContainer = document.querySelector("#portfolio > div > div.row.portfolio-container");

    let songName;

    if (sortBy === "alphabetically") {
        // Sort songName array alphabetically
        songName = Object.keys(songCollection).sort();
    } else if (sortBy === "uploadDate") {
        // Use the original order (by "upload date")
        songName = Object.keys(songCollection);
    } else {
        console.error("Invalid sortBy option. Defaulting to alphabetical sorting.");
        songName = Object.keys(songCollection).sort();
    }

    for (const song of songName) {
        const songData = songCollection[song];

        const divSong = document.createElement("div");
        divSong.classList.add("col-lg-4", "col-md-6", "portfolio-item", `filter-${songData.category}`);

        const museText = document.createElement("p");

        if (songData.linkMusescore) {
            const museLink = createLink(linkText = song, linkDestination = songData.linkMusescore);
            museText.appendChild(museLink);
        } else {
			const songNameText = document.createTextNode(song);
            museText.appendChild(songNameText);
        }

        divSong.appendChild(museText);

        const megaText = document.createElement("p");
        const megaPdfText = document.createTextNode("pdf: ");
        const megaRawLink = createLink(linkText = "raw", linkDestination = songData.linkMega);
        megaText.append(megaPdfText, megaRawLink);

        if (songData.linkMegaComment) {
            const megaDecorText = document.createTextNode("|");
            const megaCommentLink = createLink(linkText = "with comment", linkDestination = songData.linkMegaComment);
            megaText.append(megaDecorText, megaCommentLink);
        }

        divSong.appendChild(megaText);
        divPortfolioContainer.appendChild(divSong);
    }
}

function createLink(linkText = "", linkDestination = "") {
    const link = document.createElement("a");
    link.setAttribute("href", linkDestination);
    link.setAttribute("target", "_blank");
    link.appendChild(document.createTextNode(linkText));
	
    return link;
}

function sortSongs() {
    // Get the selected sorting option from the dropdown
    const sortOptions = document.getElementById("sortOptions");
    const selectedSortOption = sortOptions.value;

    // Clear existing content in portfolio-container
    const divPortfolioContainer = document.querySelector("#portfolio > div > div.row.portfolio-container");
    divPortfolioContainer.innerHTML = "";

    // Call generateSongList with the selected sorting option
    generateSongList(selectedSortOption);
}

sortSongs();