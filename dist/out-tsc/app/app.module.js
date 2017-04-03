var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
export var firebaseConfig = {
    apiKey: "AIzaSyDAQtaYa-D6EJfpXTclcxXG2-7a_HnSWHg",
    authDomain: "angularauth-38013.firebaseapp.com",
    databaseURL: "https://angularauth-38013.firebaseio.com",
    projectId: "angularauth-38013",
    storageBucket: "angularauth-38013.appspot.com",
    messagingSenderId: "1071363827236"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            EmailComponent,
            SignupComponent,
            MembersComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            AngularFireModule.initializeApp(firebaseConfig),
            routes
        ],
        providers: [AuthGuard],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map