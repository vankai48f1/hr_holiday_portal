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
            # 'web/static/src/core/commands/**/*',
            # 'web/static/src/core/debug/debug_menu.js',
            # 'web/static/src/core/utils/transitions.scss',
            # 'web/static/src/model/**/*',
            # 'web/static/src/search/**/*',
            # 'web/static/src/webclient/icons.scss', # variables required in list_controller.scss
            # 'web/static/src/views/**/*',
            
            'web/static/src/search/search_arch_parser.js',
            'web/static/src/search/utils/dates.js',
            'web/static/src/search/utils/misc.js',
            
            
            'web/static/src/webclient/actions/action_hook.js',
            'web/static/src/search/search_model.js',
            'web/static/src/search/utils/order_by.js',
            
            'web/static/src/search/with_search/with_search.js',
            'web/static/src/views/view_hook.js',
            'web/static/src/model/sample_server.js',
            

            'web/static/src/model/model.js',
            'web/static/src/model/relational_model/utils.js',
            
            
            'web/static/src/views/calendar/*.scss',
            'web/static/src/views/calendar/calendar_model.js',
            
            'mvk_hr_holidays/static/src/views/**/*',
        
        ],
    }
}
