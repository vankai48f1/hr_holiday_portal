/* @odoo-module */

import { Component, xml, mount, whenReady, useState, onWillStart } from "@odoo/owl"
import { templates } from "@web/core/assets"
import { MvkCalendarYearRenderer } from "./year/calendar_year_renderer"

class MvkCalendarRenderer extends Component {
    static template = "mvk.CalendarRenderer"
}

MvkCalendarRenderer.components = {MvkCalendarYearRenderer}
whenReady(()=>{    
    const mvkTimeOffPortalDashboard = document.querySelector('.mvk_timeoff_portal_dashboard')
    if (mvkTimeOffPortalDashboard){
        mount(MvkCalendarRenderer, mvkTimeOffPortalDashboard, { templates })
    }
})