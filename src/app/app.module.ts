import { NgModule } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSmartComponent } from './home-smart/home-smart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationParkingLotComponent } from './reservation-parking-lot/reservation-parking-lot.component';
import { ParkingSelectionTableComponent } from './parking-selection-table/parking-selection-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReservationProcessComponent } from './reservation-process/reservation-process.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MyReservationComponent } from './my-reservation/my-reservation.component';
import { ParkingLTComponent } from './parking-lt/parking-lt.component';
import { CreateParkingComponent } from './create-parking/create-parking.component';
import { PrincipalAdminComponent } from './principal-admin/principal-admin.component';
import { RatetypeCreateComponent } from './ratetype-create/ratetype-create.component';
import { RatetypeUpdateComponent } from './ratetype-update/ratetype-update.component';
import { RatetypeTableComponent } from './ratetype-table/ratetype-table.component';
import { MatIconModule } from '@angular/material/icon';
import { UserTableComponent } from './user-table/user-table.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateParkingComponent } from './update-parking/update-parking.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SpotTableComponent } from './spot-table/spot-table.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule  } from '@angular/material/divider';
import { VehiclesCreateComponent } from './vehicles-create/vehicles-create.component';
import { VehiclesTableComponent } from './vehicles-table/vehicles-table.component';
import { MatCardModule } from '@angular/material/card';
import { VehiclesUpdateComponent } from './vehicles-update/vehicles-update.component';
import { UpdateSpotComponent } from './update-spot/update-spot.component';
import { CreateSpotComponent } from './create-spot/create-spot.component';
import { ParkingTableSanJoseComponent } from './parking-table-san-jose/parking-table-san-jose.component';
import { ParkingTableHerediaComponent } from './parking-table-heredia/parking-table-heredia.component';
import { ParkingTableAlajuelaComponent } from './parking-table-alajuela/parking-table-alajuela.component';
import { ParkingTablePuntarenasComponent } from './parking-table-puntarenas/parking-table-puntarenas.component';
import { ParkingTableLimonComponent } from './parking-table-limon/parking-table-limon.component';
import { ParkingTableGuanacasteComponent } from './parking-table-guanacaste/parking-table-guanacaste.component';
import { AuthServiceService } from './auth-service.service';
import { PrincipalClientComponent } from './principal-client/principal-client.component';
import { PrincipalOperatorComponent } from './principal-operator/principal-operator.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ReservationListUserComponent } from './reservation-list-user/reservation-list-user.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { UserVehicleClientComponent } from './user-vehicle-client/user-vehicle-client.component';
import { ClientTableComponent } from './client-table/client-table.component';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { PerfilInformationUpdateComponent } from './perfil-information-update/perfil-information-update.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeSmartComponent,
    NavbarComponent,
    ReservationComponent,
    ReservationParkingLotComponent,
    ParkingSelectionTableComponent,
    ReservationProcessComponent,
    MyReservationComponent,
    ParkingLTComponent,
    CreateParkingComponent,
    PrincipalAdminComponent,
    RatetypeCreateComponent,
    RatetypeUpdateComponent,
    RatetypeTableComponent,
    UserTableComponent,
    CreateUserComponent,
    UpdateParkingComponent,
    UpdateUserComponent,
    SpotTableComponent,
    LoginFormComponent,
    VehiclesCreateComponent,
    VehiclesTableComponent,
    VehiclesUpdateComponent,
    UpdateSpotComponent,
    CreateSpotComponent,
    ParkingTableSanJoseComponent,
    ParkingTableHerediaComponent,
    ParkingTableAlajuelaComponent,
    ParkingTablePuntarenasComponent,
    ParkingTableLimonComponent,
    ParkingTableGuanacasteComponent,
    PrincipalClientComponent,
    PrincipalOperatorComponent,
    ReservationListUserComponent,
    UpdateTicketComponent,
    UserVehicleClientComponent,
    ClientTableComponent,
    PerfilUserComponent,
    PerfilInformationUpdateComponent,
  ],
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule
    
  ],
  providers: [
    AuthServiceService,
   {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorInterceptor,multi:true} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
