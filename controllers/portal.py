# -*- coding: utf-8 -*-
from odoo import fields, http, SUPERUSER_ID, _
from odoo.exceptions import AccessError, MissingError, ValidationError
from odoo.fields import Command
from odoo.http import request
from odoo.addons.portal.controllers import portal


class MvkTimeOff(http.Controller):
    @http.route('/timeoff', type='http', auth="user", website=True)
    def index(self, **kw):
        user = request.env.user
        holidays = request.env['hr.leave'].sudo().search([('employee_id.user_id','=', user.id)])
        if user.employee_portal_view != 'time_off_portal':
            raise AccessError("Access Denied.")
        # print('user.id', user)
        return http.request.render('mvk_hr_holidays.mvk_hr_holidays_index', {
            'holidays': holidays,
            'showDashboard': True
        })


    # def _prepare_home_portal_values(self, counters):
    #     values = super()._prepare_home_portal_values(counters)
    #     partner = request.env.user.partner_id
    #     HrLeave = request.env['hr.leave']
    #     if 'time_off_count' in counters:
    #         values['time_off_count'] = HrLeave.search_count(self._prepare_time_off_domain(partner)) \
    #             if HrLeave.check_access_rights('read', raise_exception=False) else 0

    #     return values
    # def _prepare_time_off_domain(self, partner):
    #     return [
    #         ('message_partner_ids', 'child_of', [partner.commercial_partner_id.id]), # Những người theo dõi là con của partner thương mại
    #         # ('state', 'in', ['sent', 'cancel']) # Trạng thái của time off là sent hoặc cancel
    #     ]
    # @http.route('/mvk_time_off/mvk_time_off/objects', auth='public')
    # def list(self, **kw):
    #     return http.request.render('mvk_time_off.listing', {
    #         'root': '/mvk_time_off/mvk_time_off',
    #         'objects': http.request.env['mvk_time_off.mvk_time_off'].search([]),
    #     })

    # @http.route('/mvk_time_off/mvk_time_off/objects/<model("mvk_time_off.mvk_time_off"):obj>', auth='public')
    # def object(self, obj, **kw):
    #     pass
