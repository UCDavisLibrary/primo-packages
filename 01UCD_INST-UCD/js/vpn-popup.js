/*VPN popup*/
import { IpDetect } from "@ucd-lib/theme-elements/utils/ip-check";

export default function vpnPopUp(app){



app.controller('ipController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
  let validIp = false;

  /* check if primoCookie exists, checks ip, set local storage key and display popup */
  if(localStorage.getItem("primoCookie") === null){
    (async () => {
        let ip = new IpDetect();
        await ip.runIP();
        if(ip.isOnCampus)
            validIp = true;
      /* for off-campus ip ranges */
      console.log(ip);


      if(!validIp){
          //set primoCookie in local storage
          let d = new Date();
          d.setTime(d.getTime() + (0.25 * 24 * 60 * 60 * 1000));

          const primoCookie = {
            value: "primoSessionCookie",
            expiry: d.toUTCString(),
          }
          localStorage.setItem("primoCookie", JSON.stringify(primoCookie))


          let alert = $mdDialog.alert({
             title: 'Attention',
             clickOutsideToClose:true,
             template: '<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><md-dialog md-theme="mytheme" style="padding:15px">' +
             '<div><p><md-button style="float:right;" md-autofocus class="md-icon-button" ng-click="close()" "><i class="material-icons" aria-label="close dialog">close</i></md-button></p></div>' +
             '<div><md-dialog-content class="vpnButton">' +
             '<div style="display: flex;align-items: center;justify-content: center;"><p style="max-width:80% !important;"> When <b style="color:#022851">off-campus</b>, you need to first connect to the <b style="color:#022851">library VPN</b> to access the majority of the UC Davis Library\'s resources.</p><br></div>' +
             '<div class="dialog-demo-content" style="width:100%; text-align:center;"><md-button class="md-raised md-secondary" href="https://www.library.ucdavis.edu/service/connect-from-off-campus/" color="secondary" style="padding:10px;display:inline-block;text-transform:none !important;">Connect to the Library VPN</md-button>' +
             '<md-button ng-click="close()" class="md-raised md-secondary" style="padding:10px;display:inline-block;text-transform:none !important;">Enter as a GUEST</md-button> </div><br><p style="text-align:center"> <b style="color:#022851">Guest will not be able to view all resources </b></p>' +
             '  </md-dialog-content></div>' +
             '</md-dialog>',
             scope: angular.extend($scope.$new(), { close: function() {$mdDialog.cancel();} })
          });

          $mdDialog.show(alert).finally(function() {
            alert = undefined;
          });
      }
    })();
  }



}]);

  app.component('prmTopbarAfter', {
     bindings: {parentCtrl: '<'},
     controller: 'ipController'
  });
  /*End VPN Popup*/
}
