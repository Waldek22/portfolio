var mainContainer = $('#left-container'),
	typee, functionName, 
	sites = {
		firstBootcampSite: {
		pageName: 'firstBootcampSite',
		photos: ['img/mebleFurni1.jpg', 'img/mebleFurni2.jpg', 'img/mebleFurni3.jpg', 'img/mebleFurni4.jpg'],
		urlimg: 'img/mebleFurni1.jpg',
		title: 'Pierwsza strona zrobiona na bootcampie',
		siteDescriptionText: 'Strona Meble Furni jest responsywną stroną stworzoną na kursie front-endu od Kodilli. Jest to pierwsza wykonana przeze mnie strona. Prosta jednostronicowa wizytówka może służyć jako strona informacyjna dla firmy sprzedającej meble. Została stworzona w celu przećwiczenia tworzenia stron opartych na gridzie.',
		list: ['Html, CSS', 'Sass', 'Responsive web design', 'Oparta na gridzie']
		},
		secondBootcampSite: {
			pageName: 'secondBootcampSite',
			photos: ['img/bootstrap1.jpg', 'img/bootstrap2.png', 'img/bootstrap3.jpg', 'img/bootstrap4.png'],
			urlimg: 'img/bootstrap1.jpg',
			title: 'Strona zaprojektowana i zakodowana przeze mnie',
			siteDescriptionText: 'Kolejna prosta stronka stworzona na bootcampie. Stworznie jej miało na celu przećwiczenie posługiwania się bootstrapem.',
			list: ['Html, CSS', 'Bootstrap', 'Responsive web design', 'Oparta na gridzie']
		},
		mobilStarSite: {
			pageName: 'mobilStarSite',
			photos: ['img/mobilstar1.jpg', 'img/mobilstar2.jpg', 'img/mobilstar3.jpg', 'img/mobilstar4.jpg'],
			urlimg: 'img/mobilstar1.jpg',
			title: 'Modyfikacja obecnej strony serwisu komórkowego',
			siteDescriptionText: 'W ramach ćwiczeń zmodyfikowałem istniejącą już stronę mobilstar.pl Nowa strona jest nowoczesna i przyjazna użytkownikowi, dzięki bootstrapowi stworzenie strony razem z zaprojektowaniem jej, zajęło mniej niż parę godzin.',
			list: ['Html, CSS', 'Bootstrap', 'Responsive web design', 'jQuery','Spełniająca najważniejsze wytyczne SEO']
		},
		jsGame: {
			pageName: 'jsGame',
			photos: ['img/jsgame1.jpg', 'img/jsgame2.jpg', 'img/jsgame3.jpg', 'img/jsgame4.jpg'],
			urlimg: 'img/jsgame1.jpg',
			title: 'Gra napisana w js oparta na zasadach papier kamień nożyce ',
			siteDescriptionText: "Kod gry został stworzony w ramach ćwiczeń tworzenia aplikacji w javaScript na bootcampie. Cały design został zaprojektowany i wdrożony przeze mnie. Gra jest również stworzona w oparciu o  bootstrap'a, który znacznie przyspieszył proces tworzenia.",
			list: ['Html, CSS', "Bootstrap", 'Responsive web design', 'javaScript','jQuery', 'Interaktywna aplikacja']
		},
		kanban: {
			pageName: 'kanban',
			photos: ['img/kanban3.jpg', 'img/kanban2.jpg', 'img/kanban1.jpg', 'img/kanban4.jpg'],
			urlimg: 'img/kanban3.jpg',
			title: 'Tablica kanban stworzona w javascript i jQuery',
			siteDescriptionText: 'Aplikacja również stworzona na bootcampie. Kod został stoworzny w ramach ćwiczeń i następnie zedytowany pod moje potrzeby, nastomiast cały design został zaprojektowany przeze mnie. Aplikacja pozwala w łatwy sposób zarządzać bierzącymi zadaniami.',
			list: ['Html, CSS', "Grid Bootstrap'a", 'Responsive web design', 'jQuery','Interaktywna aplikacja']
		},
		hunting: {
			pageName: 'hunting',
			photos: ['img/hunting1.jpg', 'img/hunting2.jpg', 'img/hunting3.jpg', 'img/hunting4.jpg'],
			urlimg: 'img/hunting1.jpg',
			title: "Strona postawiona na worpdress'ie, pozycjownowana w google",
			siteDescriptionText: "Strona stworzona na wordpress'ie oparta o motyw Sahifa. Została założona 6 miesięcy temu, obecnie zyskuje naturalne backlinki, lecz w najbliższym czasie mam zamiar ją wypozycjonowac dzięki tworzeniu własnych backlinków.",
			list: ['Html, CSS', "Wordpress", 'Responsive web design', 'SEO','Amazon affiliate']
		}
	};
function showInfo(site) {
	clearContainer();

	$('body').attr('id', site.pageName);
	var portfolioGallery = $('<div>', {"class": "row portfolio-gallery"}),
		portfolioGalleryFirstColumn = $('<div>', {"class": "col-md-3 gallery-list"}),
		portfolioGallerySecondColumn = $('<div>', {"class": "col-lg-9 col-md-9 gallery-img"}),
		
		mainPortfolioImage = $('<img>', {"class": "img-responsive", "id": "main-image", "src": site.urlimg}),
		
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
		portfolioImage = $('<img>', {"class": "img-responsive gallery-images", "src": url, "onClick": "changeImg(this)"});
		portfolioImage.appendTo(portfolioGalleryFirstColumn);
	};
	function insertItemsToList(item) {
		listItem = $('<li>').text(item);
		listItem.appendTo(siteDescriptionList);
	};
};
function clearContainer() {
	mainContainer.empty();	
};
clearContainer();


function changeImg(identifier) {
		$("#main-image").attr("src", $(identifier).attr('src'));
	};



function getUrlId() {
	return window.location.hash.substr(1);
}
urlId = getUrlId();
showInfo(sites[urlId]);