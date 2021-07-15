import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alluser: Object;
  isEdit = false;
  title = 'CRUDJULY';
  userObje={
    fullname :'',
    email :'',
    mobile :'',
    password :'',
    id :''
  }


  constructor(private commonserv:CommonService)
  {

  }

  ngOnInit()
  {
    this.getLatestUser();
  }

  Adduser(formObj){
    console.log(formObj);
     this.commonserv.CreateUser(formObj).subscribe((response) =>{
       console.log("added successfully");
       this.getLatestUser();

     }) 
  }

  getLatestUser()
    {
      this.commonserv.GetAllUser().subscribe((response) =>{
        this.alluser = response;
      })
    }

    deleteus(user)
    {
      this.commonserv.deleteUser(user).subscribe(() =>
      {
        this.getLatestUser();
      })
    }
    editUser(user)
    {
      this.isEdit=true;
      this.userObje = user;
    }

    updateuser()
      {
        this.isEdit =! this.isEdit;
        this.commonserv.UpdateUser(this.userObje).subscribe(()=>{
           this.getLatestUser();
        })     
      }
    
  
}
