/* @odoo-module */

import { EventBus, onWillStart, onWillUpdateProps, useComponent } from "@odoo/owl";

class Model {
    /**
     * @param {Object} env
     * @param {Object} services
     */
    constructor(env, params, services) {
        this.env = env;
        this.orm = services.orm;
        this.bus = new EventBus();
        this.setup(params, services);
    }

    /**
     * @param {Object} params
     * @param {Object} services
     */
    setup(/* params, services */) {}

    /**
     * @param {SearchParams} searchParams
     */
    async load(/* searchParams */) {}

    /**
     * This function is meant to be overriden by models that want to implement
     * the sample data feature. It should return true iff the last loaded state
     * actually contains data. If not, another load will be done (if the sample
     * feature is enabled) with the orm service substituted by another using the
     * SampleServer, to have sample data to display instead of an empty screen.
     *
     * @returns {boolean}
     */
    hasData() {
        return true;
    }

    /**
     * This function is meant to be overriden by models that want to combine
     * sample data with real groups that exist on the server.
     *
     * @returns {boolean}
     */
    getGroups() {
        return null;
    }

    notify() {
        this.bus.trigger("update");
    }
}
Model.services = [];

export class CalendarModel extends Model {
    setup(params, services) {
        /** @protected */
        this.user = services.user;
    }
}