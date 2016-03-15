// Display the device model
function displayModel() {
var model = blackberry.system.model;
alert("The model of this device is " + model);
}
// Display the PIN of the device
function displayPin() {
var pin = blackberry.identity.PIN;
alert("Your PIN is " + pin);
}
function handleExit()
{      
       var answer = confirm("Leave this application?");
       if (answer)
       { 
    	/// blackberry.widgetcache.clearAll();
         blackberry.app.exit();
       }
}
function callBackFunc()
{
	history.go(-1);
}

function myHome()
{
	location.href="Index.html";
}
function myHome1()
{
	location.href="../Index.html";
}
function myRefresh()
{
	window.location.reload();
}
function myPage()
{
mainWindow();
}
// Launch the calendar with today's date
function launchCalendar()
{
// Get today's date
var today = new Date();
alert("Today is " + today.toString());
// Launch Calendar App with today's date
var calendarArgs = new blackberry.invoke.CalendarArguments(today);
calendarArgs.view = blackberry.invoke.CalendarArguments.VIEW_DAY;
blackberry.invoke.invoke(blackberry.invoke.APP_CALENDAR, calendarArgs);
}
function createMenu(setDefault)
{
//Define Menu Item objects:
var mi_hello = new blackberry.ui.menu.MenuItem(false, 0, "Back", callBackFunc);
var mi_separator = new blackberry.ui.menu.MenuItem(true, 1);
var mi_home = new blackberry.ui.menu.MenuItem(false, 2, "Home", myHome);

var mi_refresh = new blackberry.ui.menu.MenuItem(false, 3, "Refresh", myRefresh);
var mi_world = new blackberry.ui.menu.MenuItem(false, 4, "Logout", handleExit);
//Clear existing menu items:
blackberry.ui.menu.clearMenuItems();

//Add a separator between two menu item objects:
blackberry.ui.menu.addMenuItem(mi_hello);
blackberry.ui.menu.addMenuItem(mi_separator);
blackberry.ui.menu.addMenuItem(mi_home);
blackberry.ui.menu.addMenuItem(mi_refresh);
blackberry.ui.menu.addMenuItem(mi_separator);
blackberry.ui.menu.addMenuItem(mi_world);

//Optionally set default focus to a specified menu item:
if (setDefault)
{
blackberry.ui.menu.setDefaultMenuItem(mi_hello);
}
}
function createMenu1(setDefault)
{
//Define Menu Item objects:
var mi_hello = new blackberry.ui.menu.MenuItem(false, 0, "Back", callBackFunc);
var mi_separator = new blackberry.ui.menu.MenuItem(true, 1);
var mi_home = new blackberry.ui.menu.MenuItem(false, 2, "Home", myHome1);
var mi_refresh = new blackberry.ui.menu.MenuItem(false, 3, "Refresh", myRefresh);
var mi_world = new blackberry.ui.menu.MenuItem(false, 4, "Logout", handleExit);

//Clear existing menu items:
blackberry.ui.menu.clearMenuItems();

//Add a separator between two menu item objects:
blackberry.ui.menu.addMenuItem(mi_hello);
blackberry.ui.menu.addMenuItem(mi_separator);
blackberry.ui.menu.addMenuItem(mi_home);
blackberry.ui.menu.addMenuItem(mi_separator);
blackberry.ui.menu.addMenuItem(mi_refresh);
blackberry.ui.menu.addMenuItem(mi_world);

//Optionally set default focus to a specified menu item:
if (setDefault)
{
blackberry.ui.menu.setDefaultMenuItem(mi_hello);
}
}
function createMenu2(setDefault)
{
//Define Menu Item objects:
var mi_hello = new blackberry.ui.menu.MenuItem(false, 0, "Back", myPage);
var mi_separator = new blackberry.ui.menu.MenuItem(true, 1);
var mi_home = new blackberry.ui.menu.MenuItem(false, 2, "Home", myHome1);
//var mi_refresh = new blackberry.ui.menu.MenuItem(false, 3, "Refresh", myRefresh);
var mi_world = new blackberry.ui.menu.MenuItem(false, 3, "Logout", handleExit);

//Clear existing menu items:
blackberry.ui.menu.clearMenuItems();

//Add a separator between two menu item objects:
blackberry.ui.menu.addMenuItem(mi_hello);
blackberry.ui.menu.addMenuItem(mi_separator);
blackberry.ui.menu.addMenuItem(mi_home);
blackberry.ui.menu.addMenuItem(mi_separator);
//blackberry.ui.menu.addMenuItem(mi_refresh);
blackberry.ui.menu.addMenuItem(mi_world);

//Optionally set default focus to a specified menu item:
if (setDefault)
{
blackberry.ui.menu.setDefaultMenuItem(mi_hello);
}
}
function convert(str) 
{ 
  str = str.replace(/&/g, " and "); 
  str = str.replace(/>/g, " grt than "); 
  str = str.replace(/</g, " less than "); 
  str = str.replace(/"/g, " "); 
  str = str.replace(/'/g, " "); 
  return str; 
} 