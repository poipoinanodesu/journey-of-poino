function generateSongList() {
	const songName = Object.keys(songCollection);
	const divPortfolioContainer = document.querySelector("#portfolio > div > div.row.portfolio-container");
	for (const i of songName){
		const songNameText = document.createTextNode(i);
		const songCategory = songCollection[i]["category"];

		const divSong = document.createElement("div");
		divSong.classList.add("col-lg-4", "col-md-6", "portfolio-item", `filter-${songCategory}`);
		
		const museText = document.createElement("p");
		if (Object.hasOwn(songCollection[i], "linkMusescore")){
			const songMusescore = songCollection[i]["linkMusescore"];
			const museLink = document.createElement("a");
			museLink.setAttribute("href", songMusescore);
			museLink.setAttribute("target", "_blank");
			museLink.appendChild(songNameText);
			museText.appendChild(museLink);
		} else {
			museText.appendChild(songNameText);
		}
		
		divSong.appendChild(museText);
		
		const songMega = songCollection[i]["linkMega"];
		const megaText = document.createElement("p");
		const megaPdfText = document.createTextNode("pdf:");
		megaText.appendChild(megaPdfText);
		const megaRawText = document.createTextNode("raw");
		const megaRawLink = document.createElement("a");
		megaRawLink.setAttribute("href", songMega);
		megaRawLink.setAttribute("target", "_blank");
		megaRawLink.appendChild(megaRawText);
		megaText.appendChild(megaRawLink);
		
		if ("linkMegaComment" in songCollection[i]){
			const songMegaComment = songCollection[i]["linkMegaComment"];
			const megaCommentText = document.createTextNode("with comment");
			const megaDecorText = document.createTextNode("|");
			const megaCommentLink = document.createElement("a");
			megaCommentLink.setAttribute("href", songMegaComment);
			megaCommentLink.setAttribute("target", "_blank");
			megaCommentLink.appendChild(megaCommentText);
			megaText.appendChild(megaDecorText);
			megaText.appendChild(megaCommentLink);
		} 
		
		divSong.appendChild(megaText);
		divPortfolioContainer.appendChild(divSong);
	}
}
generateSongList();