# -*- coding: utf-8 -*-
{
    'name': "Time Off for Portal",
    'summary': """
       KTT Time Off module.
    """,

    'description': """   
    This is module time off for user portal.
    """,

    'author': "Van Kai",
    'category': 'KTT/KTT',
    'version': '17.0.0.1',
    'module_type': 'official',
    # DEPENDS MODULES
    'depends': ['base', 'website', 'hr_holidays'],

    # always loaded
    'data': [
        # ============================================================================================================
        # SECURITY SETTING - GROUP - PROFILE
        'security/website_security.xml',
        # 'security/rules.xml',
        # 'security/ir.model.access.csv',
        # ============================================================================================================
        # DATA
        # 'data/website_data.xml',
        'views/hr_holiday_templates.xml',
        'views/res_user_views.xml',
        'views/hr_employee_views.xml',
        # 'views/website_pages_views.xml',
        # ============================================================================================================
        # WIZARD
        # 'wizard/personal_task_report_views.xml',
        # ============================================================================================================
        # VIEWS
        # 'views/hr_holiday_templates.xml',
        # ============================================================================================================
        # REPORT
        # ============================================================================================================
        # MENU - ACTION
        # ============================================================================================================
        # FUNCTION USE TO UPDATE DATA LIKE POST OBJECT
        # 'data/functions.xml',
        # ============================================================================================================
    ],
    'demo': [
    ],
    'application': True,
    'installable': True,
    'assets': {
        'web.assets_frontend': [
            # 'mvk_hr_holidays/static/src/views/calendar/hooks.js',
            # 'mvk_hr_holidays/static/src/views/calendar/year/*',
            # 'web/static/src/scss/secondary_variables.scss',
            # 'web_editor/static/src/scss/secondary_variables.scss',
            'web/static/src/views/calendar/*.scss',
            'mvk_hr_holidays/static/src/views/**/*',
            # 'web/static/src/views/calendar/calendar_renderer.js',
        
        ],
    }
}
