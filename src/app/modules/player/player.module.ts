// nativescript
import  { NativeScriptModule } from 'nativescript-angular/nativescript.module';

// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { PROVIDERS } from './services';

@NgModule({
    imports: [ NativeScriptModule ],
    providers: [ ...PROVIDERS],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PlayerModule {}
