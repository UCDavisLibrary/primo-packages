/*VPN popup*/
import { IpDetect } from "@ucd-lib/theme-elements/utils/ip-check";

export default function vpnPopUp(app){



app.controller('ipController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    let vm = this;
    let validIp = false;

    (async () => {
        let ip = new IpDetect();
        await ip.runIP();
        if(ip.isOnCampus)
            validIp = true;
      /* for off-campus ip ranges */
      if(!validIp){
        /* check if primoCookie exists */
        let name = "primoCookie=";
        let ca = document.cookie.split(';');
        let primoCookie = "";
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            primoCookie = c.substring(name.length, c.length);
          }
        }
        /* if there is no cookie, set cookie and display popup */
        if(primoCookie == ""){
          //set primoCookie
          let d = new Date();
          d.setTime(d.getTime() + (0.25 * 24 * 60 * 60 * 1000));
          let expires = "expires="+d.toUTCString();
          document.cookie = "primoCookie=primoSessionCookie;"+ expires + ";path=/";
          let alert = $mdDialog.alert({
             title: 'Attention',
             clickOutsideToClose:true,
             template: '<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><md-dialog md-theme="mytheme" style="padding:15px">' +
             '  <div layout="column" layout-align="center start" layout-padding flex tabindex="9999"><md-dialog-content class="vpnButton">' +
             '<p><md-button md-autofocus class="md-icon-button" ng-click="close()" style="float: right;"><i class="material-icons" aria-label="close dialog">close</i></md-button></p>' +
             '<div class="dialog-demo-content" layout="column" layout-align="center center" style="width:100%"><p style="max-width:80% !important;">An activated UCINetID is required to view and access the majority of UC Irvine Libraries\' resources from off-campus.</p><br><md-button class="md-raised md-primary" href="https://www.lib.uci.edu/connect" color="primary" style="text-transform:none !important;">Connect from off-campus. Note: Library Search only works with the Desktop VPN</md-button>' +
             '<md-button ng-click="close()" class="md-raised md-primary" style="text-transform:none !important;">Enter as a GUEST (not all search results will display)</md-button></div>' +
             '  </md-dialog-content></div>' +
             '</md-dialog>',
             scope: angular.extend($scope.$new(), { close: function() {$mdDialog.cancel();} })
          });

          $mdDialog.show(alert).finally(function() {
            alert = undefined;
          });
        }
      }
    })();
  }]);

  app.component('prmTopbarAfter', {
     bindings: {parentCtrl: '<'},
     controller: 'ipController'
  });
  /*End VPN Popup*/
}
