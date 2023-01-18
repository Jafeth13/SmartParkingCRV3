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
import { BookingComponent } from './booking/booking.component';
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
import { RoleTableComponent } from './role-table/role-table.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleUpdateComponent } from './role-update/role-update.component';
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
import { HasRoleGuard } from './has-role.guard';
import { PrincipalClientComponent } from './principal-client/principal-client.component';
import { PrincipalOperatorComponent } from './principal-operator/principal-operator.component';
import { ReportsComponent } from './reports/reports.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ReservationListUserComponent } from './reservation-list-user/reservation-list-user.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { UserVehicleClientComponent } from './user-vehicle-client/user-vehicle-client.component';
import { ClientTableComponent } from './client-table/client-table.component';

import { UserGuardGuard } from './user-guard.guard';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';


const appRoutes: Routes = [
  {
    path: 'homes',
    component: HomeSmartComponent,
    data: { title: 'Smart Parking' },
    
  }, 
  {
    path: 'createUser',
    component: CreateUserComponent,
    data: { title: 'Create User' },
    
  },  
  {
    path: 'booking',
    component: BookingComponent,
    data: { title: 'Booking' },
    
  },
  {
    path: 'reservations',
    component: ReservationComponent,
    data: { title: 'Reservation' }
  },
  {
    path: 'parkingLotsReservations',
    component: ReservationParkingLotComponent,
    data: { title: 'ParkingLot Selection' }
  },
  {
    path: 'userlists',
    component: UserTableComponent,
    data: { title: 'User Table' }
  },
  {
    path: 'ParkingSelection',
    component: ParkingSelectionTableComponent,
    data: { title: 'ParkingLot Selection Table' }
  },
  {
    path: 'ParkingTable',
    component: ParkingLTComponent,
    data: { title: 'ParkingLot Table' }
  },
  {
    path: 'myreservations',
    component: MyReservationComponent,
    data: { title: 'My reservation' }
  }, {
    path: 'createParkings',
    component: CreateParkingComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Admin" }
  },
  {
    path: 'ReservationProcess/:id_Parking_Lot',
    component: ReservationProcessComponent,
    data: { title: 'Reservation Process' }
  },
  {
    path: 'PrincipalAdmin',
    component: PrincipalAdminComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Admin" }
  },
  {
    path: 'PrincipalClient',
    component: PrincipalClientComponent,
    canActivate: [UserGuardGuard],
   // data: { role: "Client" }
  },
  {
    path: 'PrincipalOperator',
    component: PrincipalOperatorComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Operator" }
  },
  {
    path: 'UpdateParking/:id_Parking_Lot',
    component: UpdateParkingComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Admin" }
  },
  {
    path: 'RoleTable',
    component: RoleTableComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Admin" }
  },
  {
    path: 'AddRole',
    component: RoleCreateComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Admin" }
  },
  {
    path: 'UpdateRole/:id_Role',
    component: RoleUpdateComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Admin" }
  },
  {
    path: 'RateTypeTable',
    component: RatetypeTableComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Admin" }
  },
  {
    path: 'updateUser/:id_User',
    component: UpdateUserComponent,
    data: { title: 'Update User' }
  },
  {
    path: 'AddRateType',
    component: RatetypeCreateComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Admin" }
  },
  {
    path: 'UpdateRateType/:id_Rate_Type',
    component: RatetypeUpdateComponent,
    canActivate: [UserGuardGuard],
    data: { role: "Admin" }
  },
  {
    path: 'LoginForm',
    component: LoginFormComponent,
    data: { title: 'Login' }
  },
  { path: '',
  redirectTo: '/homes',
  pathMatch: 'full'
},
{
  path: 'AddVehicle',
  component: VehiclesCreateComponent,
  data: { title: 'Add Vehicles' }
},
{
  path: 'tableVehicle',
  component: VehiclesTableComponent,
  data: { title: 'Vehicles Table' }
},
{
  path: 'updateVehicle/:id_Vehicle',
  component: VehiclesUpdateComponent,
  data: { title: 'Vehicles Update' }
},{
  path: 'UpdateSpots/:id_Spot',
  component: UpdateSpotComponent,
  canActivate: [UserGuardGuard],
  data: { role: "Admin" }
},{
  path: 'createSpot',
  component: CreateSpotComponent,
  canActivate: [UserGuardGuard],
  data: { role: "Admin" }
},{
  path: 'ParkingSan',
  component: ParkingTableSanJoseComponent,
  data: { title: 'Parking San Jose' }
},{
  path: 'ParkingHeredia',
  component: ParkingTableHerediaComponent,
  data: { title: 'Parking Heredia' }
},{
  path: 'ParkingAlajuela',
  component: ParkingTableAlajuelaComponent,
  data: { title: 'Parking Alajuela' }
},{
  path: 'ParkingPunatrenas',
  component: ParkingTablePuntarenasComponent,
  data: { title: 'Parking Puntarenas' }
},{
  path: 'ParkingLimon',
  component: ParkingTableLimonComponent,
  data: { title: 'Parking Limon' }
},{
  path: 'ParkingGuanacaste',
  component: ParkingTableGuanacasteComponent,
  data: { title: 'Parking Guanacaste' }
},{
  path: 'Reports',
  component: ReportsComponent,
  data: { title: 'Reports' }
},{
  path: 'ReservationClient',
  component: ReservationListUserComponent,
  data: { title: 'Reservation Client' }
},{
  path: 'UpdateReservation/:idTicket',
  component: UpdateTicketComponent,
  data: { title: 'Update Reservation' }
},{
  path: 'VehicleClientUser',
  component: UserVehicleClientComponent,
  data: {title: 'Vehicle Client' }
},{
  path: 'perfil',
  component: PerfilUserComponent,
  data: {title: 'Vehicle Client' }
}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeSmartComponent,
    BookingComponent,
    NavbarComponent,
    ReservationComponent,
    ReservationParkingLotComponent,
    ParkingSelectionTableComponent,
    ReservationProcessComponent,
    MyReservationComponent,
    ParkingLTComponent,
    CreateParkingComponent,
    PrincipalAdminComponent,
    RoleTableComponent,
    RoleCreateComponent,
    RoleUpdateComponent,
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
    ReportsComponent,
    ReservationListUserComponent,
    UpdateTicketComponent,
    UserVehicleClientComponent,
    ClientTableComponent,
    PerfilUserComponent,
  ],
  imports: [ 
    RouterModule.forRoot(appRoutes),
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
