
import 'primo-explore-external-search';
import { loadGoogleAnalytics } from "./ga";
import setExternalSearchValues from './external-search';
import setSearchBarAfter from './search-bar-after';
import setSearchResultAvailabilityAfter from './search-result-availability-line-after';
import setVpnPopUp from './vpn-popup';
// import "@ucd-lib/theme-elements/brand/ucd-theme-list-accordion/ucd-theme-list-accordion";
import 'lit';

loadGoogleAnalytics();

// Increment version before release
// Doesn't actually bust the cache, but can be helpful info
var ucdlibVersion = "2.2.2";
window.ucdlibVersion = ucdlibVersion;
console.log(`Using build version: ${ucdlibVersion}`);

// register our angular app
const REQUIRED_MODULES = [
  'angularLoad', 
  'externalSearch',
  'googleAnalytics'
];
var app = angular.module('viewCustom', REQUIRED_MODULES);

// Customize the app
setExternalSearchValues(app);
setSearchBarAfter(app);
setSearchResultAvailabilityAfter(app);
setVpnPopUp(app);


// Add any templates to cache
//import('./customTemplates').then((customTemplates) => {
//  customTemplates();
//});
//let customTemplates = await import('./customTemplates');
//customTemplates();

