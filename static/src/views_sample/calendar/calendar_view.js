/** @odoo-module */

import { calendarView } from '@web/views/calendar/calendar_view';

import { TimeOffCalendarController } from './calendar_controller';
import { TimeOffCalendarModel } from './calendar_model';
import { TimeOffCalendarRenderer, TimeOffDashboardCalendarRenderer } from './calendar_renderer';
import { templates } from "@web/core/assets"

import { registry } from '@web/core/registry';

const TimeOffCalendarView = {
    ...calendarView,

    // Controller: TimeOffCalendarController,
    Renderer: TimeOffCalendarRenderer,
    Model: TimeOffCalendarModel,
}

registry.category('views').add('time_off_calendar', TimeOffCalendarView);
registry.category('views').add('time_off_calendar_dashboard', {
    ...TimeOffCalendarView,
    Renderer: TimeOffDashboardCalendarRenderer,
});

whenReady(() => {
    const owlTemplateWithData = document.querySelector('.mvk_timeoff_portal_dashboard')
    console.log(owlTemplateWithData, 234243);
    if (owlTemplateWithData) {
        mount(TimeOffDashboard, TimeOffCalendarView, { templates })
    }
})