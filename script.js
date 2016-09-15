var mainContainer = $('#left-container'),
	typee, functionName,
	sites = {
		firstBootcampSite: {
		pageName: 'firstBootcampSite',
		photos: ['mebleFurni1.jpg', 'mebleFurni2.jpg', 'mebleFurni3.jpg', 'mebleFurni4.jpg'],
		urlimg: 'mebleFurni4.jpg',
		title: 'Pierwsza strona zrobiona na bootcampie',
		siteDescriptionText: 'Strona Meble Furni jest responsywną stroną stworzoną na kursie front-endu od Kodilli. Jest to pierwsza wykonana przeze mnie strona. Prosta jednostronicowa wizytówka może służyć jako strona informacyjna dla firmy sprzedającej meble. Została stworzona w celu przećwiczenia tworzenia stron opartych na gridzie.',
		list: ['Html, CSS', 'Sass', 'Responsive web design', 'Oparta na gridzie']
		},
		secondBootcampSite: {
			pageName: 'secondBootcampSite',
			photos: ['bootstrap1.jpg', 'bootstrap2.png', 'bootstrap3.jpg', 'bootstrap4.png'],
			urlimg: 'bootstrap1.jpg',
			title: 'Strona zaprojektowana i zakodowana przeze mnie',
			siteDescriptionText: 'Kolejna prosta stronka stworzona na bootcampie. Stworznie jej miało na celu przećwiczenie posługiwania się bootstrapem.',
			list: ['Html, CSS', 'Bootstrap', 'Responsive web design', 'Oparta na gridzie']
		}
	};
function showInfo(site) {
	clearContainer();

	$('body').attr('id', site.pageName);
	var portfolioGallery = $('<div>', {"class": "row portfolio-gallery"}),
		portfolioGalleryFirstColumn = $('<div>', {"class": "col-md-3 gallery-list"}),
		portfolioGallerySecondColumn = $('<div>', {"class": "col-lg-9 col-md-9 gallery-img"}),
		
		mainPortfolioImage = $('<img>', {"class": "img-responsive", "src": site.urlimg}),
		
		secondRow = $('<div>', {"class": "row portfolio-description"}),
		thirdRow = $('<div>', {"class": "row"}),
		fourthRow = $('<div>', {"class": "row"}),
		
		col12 = $('<div>', {"class": "col-md-12"}),
		col6 = $('<div>', {"class": "col-md-6"}),
		col62 = $('<div>', {"class": "col-md-6"}),
		
		siteTitle = $('<h2>').text(site.title),
		siteDescription = $('<p>').text(site.siteDescriptionText),
		siteDescriptionList = $('<ul>'),
		
		buttonHomePage = $('<button>', {'class': 'portfolio-button', 'id': 'button-home-page', "onClick": 'window.location="/#/portfolio"'}).text('Powrót do Strony głównej'),
		buttonGithub = $('<button>', {'class': 'portfolio-button', 'id': 'button-github'}).text('Github'),
		buttonDemo = $('<button>', {'class': 'portfolio-button', 'id': 'button-demo'}).text('Demo');
		
	
	portfolioGalleryFirstColumn.appendTo(portfolioGallery);
	site.photos.forEach(insertItem);
	portfolioGallery.appendTo(mainContainer);
	portfolioGallerySecondColumn.appendTo(portfolioGallery);
	mainPortfolioImage.appendTo(portfolioGallerySecondColumn);
	secondRow.appendTo(mainContainer);
	col12.appendTo(secondRow)
	siteTitle.appendTo(col12);
	thirdRow.appendTo(secondRow);
	col6.appendTo(thirdRow);
	siteDescription.appendTo(col6);
	col62.appendTo(thirdRow);
	siteDescriptionList.appendTo(col62);
	site.list.forEach(insertItemsToList);
	fourthRow.appendTo(secondRow);
	buttonHomePage.appendTo(fourthRow);
	buttonGithub.appendTo(fourthRow);
	buttonDemo.appendTo(fourthRow);
	document.location = 'projects.html#' + site.pageName;	
	
	function insertItem(url) {
		portfolioImage = $('<img>', {, "src": url, "onCLick": "changeImg()"});
		portfolioImage.appendTo(portfolioGalleryFirstColumn);
	};
	function insertItemsToList(item) {
		listItem = $('<li>').text(item);
		listItem.appendTo(siteDescriptionList);
	};
	function changeImg() {
		console.log('d')
	}
};
function clearContainer() {
	mainContainer.empty();	
};
clearContainer();

function getUrlId() {
	return window.location.hash.substr(1);
}

// nie wiem dlaczego functionName skoro jak sama nazwa funkcji wskazuje - zwracasz id urla
urlId = getUrlId();
// spawdź czy to działa proszę i jeśli tak to masz zagwozdkę - dlaczego? :D
showInfo(sites[urlId]);