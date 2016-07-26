'use strict';

var context = SP.ClientContext.get_current();
var user = context.get_web().get_currentUser();

// This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
$(document).ready(function () {
    getUserName();
});

// This function prepares, loads, and then executes a SharePoint query to get the current users information
function getUserName() {
    context.load(user);
    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
}

// This function is executed if the above call is successful
// It replaces the contents of the 'message' element with the user name
function onGetUserNameSuccess() {
    $('#message').text('Hello ' + user.get_title());
}

// This function is executed if the above call fails
function onGetUserNameFail(sender, args) {
    alert('Failed to get user name. Error:' + args.get_message());
}


//global variables.
var hostwebUrl
var appwebUrl;
var web;
// This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
/*Get the page ready*/
$(document).ready(function () {
    hostwebUrl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    appwebUrl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    var scriptbase = hostwebUrl + "/_layouts/15/";
    $.getScript(scriptbase + "SP.RequestExecutor.js");

});

function getQueryStringParameter(paramToRetrieve) {
    var params = document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
}


function clearResults() {
    $('#lblJsonObject').html("");
    $('#lblJsonObject2').html("");

}

//<------------Update List Item---------------------->
function runCamlQuery() {

    var ctx = new SP.ClientContext(appwebUrl);
    var appCtxSite = new SP.AppContextSite(ctx, hostwebUrl);

    var listName = $('#txtListName').val();
    var q = $('#txtCanlString').val();

    var web = appCtxSite.get_web(); //Get the Web 
    this.list = web.get_lists().getByTitle(listName); //Get the List
    var query = new SP.CamlQuery(); //The Query object. This is used to query for data in the List
    query.set_viewXml(q);

    this.items = list.getItems(query);

    ctx.load(this.list); //Retrieves the properties of a client object from the server.
    ctx.load(this.items);

    var innerHtml = "<table>";

    //Execute the Query Asynchronously
    ctx.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded),
        Function.createDelegate(this, this.onQueryFailed)
        );
}


function onQuerySucceeded(sender, args) {
    var itemInfo = '';
    var enumerator = items.getEnumerator();
    while (enumerator.moveNext()) {
        var currentListItem = enumerator.get_current();
        innerHtml += "<tr><td>" + currentListItem.get_item('ID') + "</td><td>" + currentListItem.get_item('Title') + "</td></tr>";
    }
    $('#lblResults').html(innerHtml + "</table>");
}

function onQueryFailed(sender, args) {
    ("#lblResults").html("Operation failed  " + arguments[1].get_message());
}


//Ends Here

function retrieveWebSite() {
    var clientContext = new SP.ClientContext(appwebUrl);
    var oWebsite = clientContext.get_web();

    clientContext.load(oWebsite);
    clientContext.executeQueryAsync(
        Function.createDelegate(oWebsite, onQuerySucceeded),
        Function.createDelegate(oWebsite, onQueryFailed)
    );
}

function onQuerySucceeded(sender, args) {
    alert('Title: ' + sender.get_title() +
        ' Description: ' + this.oWebsite.get_description());
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() +
        '\n' + args.get_stackTrace());
}
