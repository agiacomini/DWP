/**
 * 
 */


function showXmlMessageMethod( position ) {
	// Sbianca la text area prima di aggiungere il nuovo messaggio xml
	document.getElementById( 'messaggioOriginale' ).value = "";
	var xmlMessage = document.getElementById( "hiddenField_" + position ).value;
	
	xmlMessage = unescapeHtml( xmlMessage );
	
	var resultSplit = xmlMessage.split( "\n" );
	
	for( index = 0 ; index < resultSplit.length ; index++ )
	{
		document.getElementById( 'messaggioOriginale' ).value += resultSplit[ index ];
	}
}


// Create dinamically a form with an input text field, and send form to backEnd with submit().
// This open
function WriteXmlFileMethod( content ) { 
	var mapForm = document.createElement("form"); 
	mapForm.name = "myXmlform";  
	mapForm.target = "_self"; 
	mapForm.method = "POST"; // or "post" if appropriate		   
	mapForm.action = "Gcx034WriteXmlMessageAction.do";   
	var mapInput = document.createElement("input");
	
    mapInput.type = "text";
    mapInput.name = "xmlMessageToExport";
    mapInput.value = content;
    mapForm.appendChild(mapInput);
    document.body.appendChild(mapForm);
    mapForm.submit();    
}

function unescapeHtml( content ) {
	return content
	    .replace(/&amp;/g, "&")
	    .replace(/&lt;/g, "<")
	    .replace(/&gt;/g, ">")
	    .replace(/&quot;/g, "\"")
	    .replace(/&#039;/g, "'")
	    .replace(/&#10;/g, "\n")
	    .replace(/&#13;/g, "\r")
	    .replace(/&#09;/g, "\t")
	    .replace(/&nbsp;/g, " ");
}

function escapeHtml( content ) {
	return content
		.replace("&", "&amp;")
	    .replace("<", "&lt;")
	    .replace(">", "&gt;")
	    .replace("\"", "&quot;")
	    .replace("'", "&#039;")
		.replace("\n", "&#10;")
		.replace("\r", "&#13;")
		.replace("\t", "&#09;")
		.replace("	", "&#09;")
		.replace(" ", "&nbsp;")
		.replace("à", "&agrave;")
		.replace("À", "&Agrave;")
		.replace("â", "&acirc;")
		.replace("Â", "&Acirc;")
		.replace("ä", "&auml;")
		.replace("Ä", "&Auml;")
		.replace("å", "&aring;")
		.replace("Å", "&Aring;")
		.replace("æ", "&aelig;")
		.replace("Æ", "&AElig;")
		.replace("ç", "&ccedil;")
		.replace("Ç", "&Ccedil;")
		.replace("é", "&eacute;")
		.replace("É", "&Eacute;")
		.replace("è", "&egrave;")
		.replace("È", "&Egrave;")
		.replace("ê", "&ecirc;")
		.replace("Ê", "&Ecirc;")
		.replace("ë", "&euml;")
		.replace("Ë", "&Euml;")
		.replace("ï", "&iuml;")
		.replace("Ï", "&Iuml;")
		.replace("ô", "&ocirc;")
		.replace("Ô", "&Ocirc;")
		.replace("ö", "&ouml;")
		.replace("Ö", "&Ouml;")
		.replace("ø", "&oslash;")
		.replace("Ø", "&Oslash;")
		.replace("ß", "&szlig;")
		.replace("ù", "&ugrave;")
		.replace("Ù", "&Ugrave;")
		.replace("û", "&ucirc;")
		.replace("Û", "&Ucirc;")
		.replace("ü", "&uuml;")
		.replace("Ü", "&Uuml;")
		.replace("®", "&reg;")
		.replace("©", "&copy;")
		.replace("€", "&euro;")
		.replace(" ", "&nbsp;");
}