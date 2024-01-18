/* @odoo-module */
import { Component, xml, mount, whenReady, useState, onWillStart, useEffect, useRef } from "@odoo/owl"

class TimeOffPortalCalendarProps extends Component {
    setup(){
        this.test = "hello"
    }
}

TimeOffPortalCalendarProps.props = {
    date: true,
    model: Object,
}