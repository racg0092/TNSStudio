// nativescript
import  { NativeScriptModule } from 'nativescript-angular/nativescript.module';

// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
    imports: [ NativeScriptModule ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PlayerModule {}
