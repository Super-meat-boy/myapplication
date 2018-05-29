import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyapplicationEmployeeModule } from './employee/employee.module';
import { MyapplicationPositionModule } from './position/position.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MyapplicationEmployeeModule,
        MyapplicationPositionModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyapplicationEntityModule {}
