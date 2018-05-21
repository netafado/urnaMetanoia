/**
 * Loader JS.
 * Simples loader usando JS e CSS
*/

function loaderJS( wait, domObj )
{
	
	
	if( !domObj )
	{
		throw ( "Defina um objeto " );
		return;
	}

	// caso algum valor esteja setado para wait
	// um setTimeOut sera chamado
	if( wait || typeof wait === 'number' )
	{
		window.setTimeout( function(){ loaderInit (domObj) }, wait )
	}
	else
	{
		loaderInit( domObj );
	}


}

function loaderInit( domObj ){
	// Coloca o loader como display none
	domObj.style.display = 'none';
}

