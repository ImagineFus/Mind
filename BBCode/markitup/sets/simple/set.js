// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Html tags
// http://en.wikipedia.org/wiki/html
// ----------------------------------------------------------------------------
// Basic set. Feel free to add more tags
// ----------------------------------------------------------------------------
mySettings = {	
	//onEnter:  	{keepDefault:false, replaceWith:'<br />\n'},
	onTab:    		{keepDefault:false, replaceWith:'    '},
	markupSet:  [ 	
		{name:'Gras', key:'B', openWith:'[b]', closeWith:'[/b]' },
		{name:'Italique', key:'I', openWith:'[i]', closeWith:'[/i]'  },
		{name:'Sous ligné', key:'S', openWith:'[u]', closeWith:'[/u]' },
		{separator:'---------------' },
		{name:'Lien', key:'L', openWith:'[url=[![Lien ::!:http://]!]]', closeWith:'[/url]', placeHolder:'Ici votre lien ...' },
	]
}