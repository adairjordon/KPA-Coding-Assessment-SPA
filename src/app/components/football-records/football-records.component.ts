import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FootballRecordsService } from 'src/app/services/football-records.service';

@Component({
  selector: 'app-football-records',
  templateUrl: './football-records.component.html',
  styleUrls: ['./football-records.component.css']
})
export class FootballRecordsComponent implements OnInit {
  footballRecords: any[] = [];
  showUploadJSONModal: boolean = false;
  showSpinner: boolean = false;

  constructor(private recordService: FootballRecordsService,
    private messageService: MessageService) { }

  async ngOnInit() {
    await this.getTeamRecords();
  }

  getTeamRecords(){
    this.messageService.add({ key: 'toaster', severity: 'info', detail: 'Loading Football Records...' });
    this.recordService.getFootballRecords().subscribe( res => {
        if(res != null){
          this.footballRecords = res;
        }
        this.showSpinner = false;
    });
  }

  openUploadJSONModal(){
    console.log('open json');
    this.showUploadJSONModal = true;
  }

  async uploadFinished(){
    this.showUploadJSONModal = false;
    this.messageService.add({ key: 'toaster', severity: 'success', detail: 'Successfully uploaded Football Records!' });
    await this.getTeamRecords();
  }

  async deleteFootballRecord(recordToDelete: any){
    if(recordToDelete != null && recordToDelete?.id > 0){
      this.messageService.add({ key: 'toaster', severity: 'info', detail: 'Deleting Football Records...' });
      this.recordService.deleteFootballRecord(recordToDelete.id).subscribe( async res => {
        if(res != null && res == true){
          this.messageService.add({ key: 'toaster', severity: 'success', detail: 'Successfully deleted Football Records!' });
          await this.getTeamRecords();
        }
        this.showSpinner = false;
    });
    }
  }

  uploadStarted(){
    this.messageService.add({ key: 'toaster', severity: 'info', detail: 'Uploading Football Records...' });
  }

}
