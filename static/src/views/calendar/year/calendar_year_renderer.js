/* @odoo-module */

import { localization } from "@web/core/l10n/localization";
import { useDebounced } from "@web/core/utils/timing";
import { useFullCalendar } from "../hooks";

import { Component, xml, mount, whenReady, useState, onWillStart, useEffect, useRef } from "@odoo/owl"
import { jsonrpc } from "@web/core/network/rpc_service"
import { session } from "@web/session";
import { useBus, useService } from "@web/core/utils/hooks";

export class MvkCalendarYearRenderer extends Component {
    setup() {
        this.orm = useService("orm");
        this.months = luxon.Info.months();
        this.user = session.user_id

        this.state = useState({
            date: luxon.DateTime.now(),
            today: luxon.DateTime.now(),
            holidays: [],
            orders: []
        });

        this.fcs = {};
        for (const month of this.months) {
            this.fcs[month] = useFullCalendar(
                `fullCalendar-${month}`,
                this.getOptionsForMonth(month)
            );
        }
        this.rootRef = useRef("root");
        this.onWindowResizeDebounced = useDebounced(this.onWindowResize, 200);

        useEffect(() => {
            this.updateSize();
        });

        onWillStart(async ()=>{
            const data = await jsonrpc("/web/dataset/call_kw/sale.order/search_read",{
                model: "sale.order",
                method: "search_read",
                args: [ [['state', 'in', ['sale','done'] ]], ['name', 'date_order'] ],
                kwargs: {
                    limit: 10,
                    order: "date_order"
                }
            })

            this.state.orders = data
            // await this.loadDashboardData();
        })
    }

    get options() {
        return {
            columnHeaderFormat: "EEEEE",
            contentHeight: 0,
            // dateClick: this.onDateClick,
            // dayRender: this.onDayRender,
            defaultDate: new Date().toISOString(),
            defaultView: "dayGridMonth",
            dir: localization.direction,
            droppable: true,
            editable: true,
            eventLimit: 5,
            // eventRender: this.onEventRender,
            eventResizableFromStart: true,
            // events: (_, successCb) => successCb(this.mapRecordsToEvents()),
            firstDay: 0,
            header: { left: false, center: "title", right: false },
            height: 0,
            locale: luxon.Settings.defaultLocale,
            longPressDelay: 500,
            navLinks: false,
            nowIndicator: true,
            plugins: ["dayGrid", "interaction", "luxon"],
            select: this.onSelect,
            selectMinDistance: 5, // needed to not trigger select when click
            selectMirror: true,
            selectable: true,
            showNonCurrentDates: false,
            // timeZone: luxon.Settings.defaultZone.name,
            titleFormat: { month: "long", year: "numeric" },
            unselectAuto: false,
            weekNumberCalculation: "ISO",
            weekNumbers: true,
            windowResize: this.onWindowResizeDebounced,
            weekNumbersWithinDays: false,
            weekLabel: _t("Week"),
        };
    }
    // async loadDashboardData(date = false) {
    //     const context = {};
    //     if (this.props && this.props.employeeId !== null) {
    //         context["employee_id"] = this.props.employeeId;
    //     }
    //     if (date) {
    //         this.state.date = date;
    //     }
    //     this.state.holidays = await this.orm.call(
    //         "hr.leave.type",
    //         "get_allocation_data_request",
    //         [this.state.date],
    //         {
    //             context: context,
    //         }
    //     );
    // }
    // mapRecordsToEvents() {
    //     return Object.values(this.props.model.records).map((r) => this.convertRecordToEvent(r));
    // }
    convertRecordToEvent(record) {
        return {
            id: record.id,
            title: record.title,
            start: record.start.toISO(),
            end: record.end.plus({ day: 1 }).toISO(),
            allDay: true,
            rendering: "background",
        };
    }
    getDateWithMonth(month) {
        return this.props.model.date.set({ month: this.months.indexOf(month) + 1 }).toISO();
    }
    getOptionsForMonth(month) {
        return {
            ...this.options,
            // defaultDate: this.getDateWithMonth(month),
        };
    }
    
    unselect() {
        for (const fc of Object.values(this.fcs)) {
            fc.api.unselect();
        }
    }
    updateSize() {
        const height = window.innerHeight - this.rootRef.el.getBoundingClientRect().top;
        this.rootRef.el.style.height = `${height}px`;
    }

    // onDayRender(info) {
    //     const date = luxon.DateTime.fromJSDate(info.date).toISODate();
    //     if (this.props.model.unusualDays.includes(date)) {
    //         info.el.classList.add("o_calendar_disabled");
    //     }
    // }
    
    async onSelect(info) {
        this.popover.close();
        await this.props.createRecord({
            // With date value we don't want to change the time, we need the exact date
            start: luxon.DateTime.fromISO(info.startStr),
            end: luxon.DateTime.fromISO(info.endStr).minus({ days: 1 }),
            isAllDay: true,
        });
        this.unselect();
    }
    onWindowResize() {
        this.updateSize();
    }
}

MvkCalendarYearRenderer.template = "mvk.CalendarYearRenderer";

