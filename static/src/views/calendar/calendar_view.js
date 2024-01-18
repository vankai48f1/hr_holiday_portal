/* @odoo-module */

import { Component, xml, mount, whenReady, useState, onWillStart } from "@odoo/owl"
import { templates } from "@web/core/assets"
import { TimeOffPortalCalendarRenderer } from "./calendar_renderer"
import { CalendarModel } from "./calendar_model";


class TimeOffPortalCalendarView extends Component {
    static template = "mvk_hr_holidays.CalendarView"
    setup(){
        this.hello = "hello"
    }
}

TimeOffPortalCalendarView.components = {TimeOffPortalCalendarRenderer}

whenReady(()=>{    
    console.log(CalendarModel);
    const TimeOffPortalDashboard = document.querySelector('.mvk_timeoff_portal_dashboard')
    if (TimeOffPortalDashboard){
        mount(TimeOffPortalCalendarView, TimeOffPortalDashboard, { templates })
    }
})