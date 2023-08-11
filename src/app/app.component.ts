import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-buinding';

  serverEelements = [{type: 'server',name: 'TestServer', content: 'just a test'}]

  onServerAdded(serverData : {serverName: string, serverContent: string}){
    this.serverEelements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintCreated(blueprintData: {serverName: string, serverContent: string}){
    this.serverEelements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
