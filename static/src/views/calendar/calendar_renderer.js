/* @odoo-module */

import { Component, xml, mount, whenReady, useState, onWillStart } from "@odoo/owl"
import { TimeOffPortalCalendarYearRenderer } from "./year/calendar_year_renderer"


export class TimeOffPortalCalendarRenderer extends Component {
    static template = "mvk.CalendarRenderer"
    setup() {
        this.state = useState({ task: "a" });
    }
}

TimeOffPortalCalendarRenderer.components = {TimeOffPortalCalendarYearRenderer}
