import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule }from '@angular/common/http';

@Component({
  selector: 'app-cropapproval',
  templateUrl: './cropapproval.component.html',
  styleUrls: ['./cropapproval.component.css']
})
export class CropapprovalComponent implements OnInit {

  crop;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:50107/api/ViewCrop').subscribe( data => {
      this.crop = data;
      }
    );
  }

  onApproved(id,value:any)
  {
    this.http.put('http://localhost:50107/api/ViewCrop?id=' + id, new String(value)).subscribe(data =>{
      console.log(data);
    });
    this.http.get('http://localhost:50107/api/ViewCrop').subscribe( data => {
      this.crop = data;
      }
    );
  }

  onDelete(value:any)
  {
    console.log(value);
    this.http.delete('http://localhost:50107/api/ViewCrop?id='+value).subscribe(data =>{
      console.log(data);
    });
    this.http.get('http://localhost:50107/api/ViewCrop').subscribe( data => {
      this.crop = data;
      }
    );
  }

}
