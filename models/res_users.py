from odoo import models, fields, api

class Users(models.Model):
    _inherit = "res.users"
    
    # is_employee_portal = fields.Boolean(string="Employee portal", default=False)
    flag_user_portal = fields.Boolean(string="Flag user portal selected", default=False, compute="_compute_flag_user_portal", store=True)
    # employee_portal_group = fields.Boolean(string="Employee portal group", default=False, compute="_compute_employee_portal_group", store=True)
    employee_portal_view = fields.Selection(
        [
            ('time_off_portal', 'Time off portal'),
        ], string="Employee portal view", store=True,
    )
    
    @api.depends('groups_id')
    def _compute_flag_user_portal(self):
        for user in self:
            user_group_id = self.env['ir.model.data']._xmlid_to_res_id('base.group_portal')
            portal_user = user.filtered_domain([('groups_id', 'in', [user_group_id])])
            if portal_user:
                user.flag_user_portal = True
            else:
                user.employee_portal_view = False
                user.flag_user_portal = False

    # @api.depends('employee_portal_view')
    # def _compute_employee_portal_group(self):
    #     for user in self:
    #         try:
    #             employee_portal_group = self.env.ref('mvk_hr_holidays.group_timeoff_employee_portal')
    #             if user.is_employee_portal:
    #                 user.groups_id = [(4, employee_portal_group.id)]
    #             else:
    #                 is_employee_portal_group = user.filtered_domain([('groups_id', 'in', [employee_portal_group.id])])
    #                 if(is_employee_portal_group):
    #                     user.groups_id = [(3, employee_portal_group.id)]
    #         except :  return False
