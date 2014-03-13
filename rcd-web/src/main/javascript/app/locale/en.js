'use strict';

define([
], function () {

    var en = {
        'messages': {
            '': {
                'domain': 'messages',
                'lang': 'en',
                'plural_forms': 'nplurals=2; plural=(n != 1);'
            },

            'model.common.one_of': [ null, '%s of %s'],
            'model.common.no_data_found': [ null, 'No data found'],
            'model.common.hang': [ null, 'Waiting for server response...'],

            'model.group': [ null, 'group', 'groups'],

            'model.dictionary': [ null, 'dictionary', 'dictionaries'],
            'model.dictionary.errors': [ null, 'failed %d dictionary of %d', 'failed %d dictionaries of %d'],

            'model.notification.NO_GROUP': [ null, 'Group not found'],
            'model.notification.NO_DICTIONARY': [ null, 'Dictionary not found'],
            'model.notification.NO_VALUE': [ null, 'Source value not found'],
            'model.notification.NO_RULE': [ null, 'Recode rule not found'],
            'model.notification.NO_RULE_SET': [ null, 'Rule set not found'],
            'model.notification.NO_RULE_ALIAS': [ null, 'Rule set not found by alias'],
            'model.notification.ERROR': [ null, 'Internal error'],

            'model.time.time': [ null, "%(h)d:%(m)'02d"],
            'model.time.date': [ null, "%(day)'02d.%(mon)'02d.%(year)d"],
            'model.time.datetime': [ null, "%(day)'02d.%(mon)'02d.%(year)d %(h)d:%(m)'02d"],

            'model.time.year': [ null, 'year', 'years'],
            'model.time.month': [ null, 'month', 'months'],
            'model.time.week': [ null, 'week', 'weeks'],
            'model.time.day': [ null, 'day', 'days'],
            'model.time.hour': [ null, 'hour', 'hours'],
            'model.time.minute': [ null, 'after %s minute', 'after %s minutes'],
            'model.time.second': [ null, 'after %s second', 'after %s seconds'],
            'model.time.in_infinite': [ null, 'after more than a year'],
            'model.time.in_year': [ null, 'after %s year', 'after %s years'],
            'model.time.in_month': [ null, 'after %s month', 'after %s months'],
            'model.time.in_week': [ null, 'after %s week', 'after %s weeks'],
            'model.time.in_day': [ null, 'after %s day', 'after %s days'],
            'model.time.in_hour': [ null, 'after %s hour', 'after %s hours'],
            'model.time.in_minute': [ null, 'after %s minute', 'after %s minutes'],
            'model.time.in_second': [ null, 'after %s second', 'after %s seconds'],
            'model.time.in': [ null, '%s in %s'],
            'model.time.month_*': [ null, 'all'],
            'model.time.month_1': [ null, 'January'],
            'model.time.month_2': [ null, 'February'],
            'model.time.month_3': [ null, 'March'],
            'model.time.month_4': [ null, 'April'],
            'model.time.month_5': [ null, 'May'],
            'model.time.month_6': [ null, 'June'],
            'model.time.month_7': [ null, 'July'],
            'model.time.month_8': [ null, 'August'],
            'model.time.month_9': [ null, 'September'],
            'model.time.month_10': [ null, 'October'],
            'model.time.month_11': [ null, 'November'],
            'model.time.month_12': [ null, 'December'],
            'model.time.dow_*': [ null, 'all'],
            'model.time.dow_0': [ null, 'Sunday'],
            'model.time.dow_1': [ null, 'Monday'],
            'model.time.dow_2': [ null, 'Tuesday'],
            'model.time.dow_3': [ null, 'Wednesday'],
            'model.time.dow_4': [ null, 'Thursday'],
            'model.time.dow_5': [ null, 'Friday'],
            'model.time.dow_6': [ null, 'Saturday'],

            'model.sync.description.m': [ null, 'minutes'],
            'model.sync.description.h': [ null, 'hours'],
            'model.sync.description.day': [ null, 'day of month'],
            'model.sync.description.mon': [ null, 'month'],
            'model.sync.description.dow': [ null, 'day of week'],

            'model.sync.descriptor.description': [ null, 'Task description'],

            'model.sync.state.READY': [ null, 'Never started'],
            'model.sync.state.READY.CANCELED': [ null, 'Canceled'],
            'model.sync.state.READY.ERROR': [ null, 'Error'],
            'model.sync.state.READY.FINISHED': [ null, 'Synced successfully'],
            'model.sync.state.READY.FINISHED.ERROR': [ null, 'Synced with errors'],
            'model.sync.state.INTERRUPTING': [ null, 'Canceling'],
            'model.sync.state.RUNNING': [ null, 'Running'],

            'model.cron.undefined': [ null, 'no schedule'],
            'model.cron.everyday': [ null, 'every day'],
            'model.cron.everyday_of_month': [ null, 'every day'],
            'model.cron.every4day': [ null, 'every'],
            'model.cron.every4minute': [ null, 'every minute', 'every %s minutes'],
            'model.cron.every4hour': [ null, 'every hour', 'every %s hours'],
            'model.cron.day': [ null, 'day', 'days'],
            'model.cron.dow_1': [ null, 'Monday'],
            'model.cron.dow_2': [ null, 'Tuesday'],
            'model.cron.dow_3': [ null, 'Wednesday'],
            'model.cron.dow_4': [ null, 'Thursday'],
            'model.cron.dow_5': [ null, 'Friday'],
            'model.cron.dow_6': [ null, 'Saturday'],
            'model.cron.dow_7': [ null, 'Sunday'],
            'model.cron.dow_0': [ null, 'Sunday'],
            'model.cron.dow_from_1': [ null, 'from Monday'],
            'model.cron.dow_from_2': [ null, 'from Tuesday'],
            'model.cron.dow_from_3': [ null, 'from Wednesday'],
            'model.cron.dow_from_4': [ null, 'from Thursday'],
            'model.cron.dow_from_5': [ null, 'from Friday'],
            'model.cron.dow_from_6': [ null, 'from Saturday'],
            'model.cron.dow_from_7': [ null, 'from Sunday'],
            'model.cron.dow_from_0': [ null, 'from Sunday'],
            'model.cron.dow_to_1': [ null, 'to Monday'],
            'model.cron.dow_to_2': [ null, 'to Tuesday'],
            'model.cron.dow_to_3': [ null, 'to Wednesday'],
            'model.cron.dow_to_4': [ null, 'to Thursday'],
            'model.cron.dow_to_5': [ null, 'to Friday'],
            'model.cron.dow_to_6': [ null, 'to Saturday'],
            'model.cron.dow_to_7': [ null, 'to Sunday'],
            'model.cron.dow_to_0': [ null, 'to Sunday'],
            'model.cron.month_*': [ null, 'month'],
            'model.cron.month_1': [ null, 'January'],
            'model.cron.month_2': [ null, 'February'],
            'model.cron.month_3': [ null, 'March'],
            'model.cron.month_4': [ null, 'April'],
            'model.cron.month_5': [ null, 'May'],
            'model.cron.month_6': [ null, 'June'],
            'model.cron.month_7': [ null, 'July'],
            'model.cron.month_8': [ null, 'August'],
            'model.cron.month_9': [ null, 'September'],
            'model.cron.month_10': [ null, 'October'],
            'model.cron.month_11': [ null, 'November'],
            'model.cron.month_12': [ null, 'December'],
            'model.cron.and': [ null, ' and '],
            'model.cron.dow_prefix': [ null, 'если это '],
            'model.cron.or': [ null, ' or '],
            'model.cron.at': [ null, 'at '],
            'model.cron.at_minute': [ null, ':%s'],
            'model.cron.range': [ null, 'с %s to %s'],
            'model.cron.range_minute': [ null, 'from :%s to :%s'],
            'model.cron.range_hour': [ null, '%s:%s-%s:%s'],
            'model.cron.interval': [ null, 'during'],
            'model.cron.step': [ null, 'each day', 'each %s days'],
            'model.cron.error.empty': [ null, 'empty values not allowed'],
            'model.cron.error.manyslashes': [ null, 'redundant "/"'],
            'model.cron.error.stepNaN': [ null, 'not a number'],
            'model.cron.error.startNaN': [ null, 'start of range is not a number'],
            'model.cron.error.stopNaN': [ null, 'end of range is not a number'],
            'model.cron.error.tooSmall': [ null, 'too small value'],
            'model.cron.error.tooBig': [ null, 'too big value'],

            'model.validator.required': [null, 'Field is required'],
            'model.validator.type': [null, 'Wrong type of value'],
            'model.validator.uploadable': [ null, 'File should be CSV or XML'],

            'model.groups.name': [null, 'Name'],
            'model.groups.description': [null, 'Description'],

            'model.dictionaries.name': [null, 'Name'],
            'model.dictionaries.description': [null, 'Description'],
            'model.dictionaries.groupId': [null, 'Group'],

            'model.metafield': [null, 'field', 'fields'],
            'model.metafield.unique': [null, 'Unique values'],

            'view.error.404': [null, 'Server unavailable'],

            'view.common.loading': [ null, 'Loading...'],

            'view.header.dictionaries':  [ null, 'Dictionaries'],
            'view.header.groups':  [ null, 'Groups'],
            'view.header.logout':  [ null, 'Logout'],
            'view.header.tasks':  [ null, 'Sync'],
            'view.header.errors.close':  [ null, 'Close'],

            'view.grid.add': [null, 'add'],
            'view.grid.loading': [null, 'loading...'],

            'view.popup.button.cancel': [ null, 'cancel'],
            'view.popup.button.delete': [ null, 'delete'],
            'view.popup.title.delete': [null, 'Delete confirmation'],

            'view.notifications.hide': [ null, 'Hide'],
            'view.notifications.count': [ null, '%d error', '%d errors'],
            'view.notifications.mark_as_processed': [ null, 'Mark as processed'],

            'view.footer.version':  [ null, 'Version'],
            'view.footer.license':  [ null, 'License'],

            'view.filter.placeholder':  [ null, 'Search'],

            'view.groups.page.title': [ null, 'All groups'],
            'view.groups.page.add': [ null, 'Add group'],
            'view.groups.empty': [ null, 'No groups yet'],
            'view.groups.button.add': [ null, 'add'],
            'view.groups.button.delete': [ null, 'delete'],
            'view.groups.button.cancel': [ null, 'Cancel'],
            'view.groups.button.create': [ null, 'Create'],
            'view.groups.add.title': [ null, 'Create new group'],
            'view.groups.button.yes': [ null, 'Yes'],
            'view.groups.button.no': [ null, 'No'],
            'view.groups.delete.confirm': [ null, 'Are you sure you want to delete selected group and it\'s dictionaries?'],
            'view.groups.no_dictionaries': [ null, 'No dictionaries'],
            'view.groups.unmatched': [ null, 'not matched', 'not matched'],
            'view.groups.all_matched': [ null, 'All matched'],
            'view.groups.no_description': [ null, 'Add description'],

            'view.dictionaries.page.title': [null, 'Dictionaries'],
            'view.dictionaries.page.add': [ null, 'Add dictionary'],
            'view.dictionaries.button.add': [ null, 'add'],
            'view.dictionaries.page.upload': [ null, 'Upload a dictionary from file'],
            'view.dictionaries.button.delete': [ null, 'delete'],
            'view.dictionaries.button.cancel': [ null, 'cancel'],
            'view.dictionaries.button.create': [ null, 'create'],
            'view.dictionaries.button.upload': [ null, 'upload'],
            'view.dictionaries.add.title': [ null, 'create new dictionary'],
            'view.dictionaries.delete.title': [ null, 'Delete confirmation'],
            'view.dictionaries.delete.confirm': [ null, 'Are you sure you want to delete selected dictionaries?'],
            'view.dictionaries.upload.title': [ null, 'Upload a dictionary from file'],
            'view.dictionaries.upload.group': [ null, 'Into group'],
            'view.dictionaries.upload.file': [ null, 'Choose a file'],
            'view.dictionaries.upload.delimiter': [ null, 'Delimiter'],
            'view.dictionaries.upload.quote': [ null, 'Quote'],
            'view.dictionaries.upload.encoding': [ null, 'Encoding'],
            'view.dictionaries.empty': [ null, 'No dictionaries found'],

            'view.notifications.empty': [ null, 'Hooray, no errors here!'],

            'view.records.empty': [null, 'No data found'],
            'view.records.filter.placeholder': [null, 'Filter'],
            'view.records.upload': [null, 'Upload data from file'],
            'view.records.download': [null, 'Download as CSV file'],
            'view.records.download.error': [null, 'Failed to download file'],
            'view.records.button.cancel': [ null, 'cancel'],
            'view.records.button.upload': [ null, 'upload'],
            'view.records.delete.confirm': [null, 'You are about to delete dictionary records. Are you sure?'],
            'view.records.edit-ready': [null, 'ready!'],
            'view.columns.delete.confirm': [null, 'You are about to delete field with it\'s values. Are you sure?'],

            'view.recodes.title': [null, 'Recode rule sets'],
            'view.recodes.add': [null, 'Add recode rule set'],
            'view.recodes.new.title': [null, 'Creating recode rule set'],
            'view.recodes.new.select': [null, 'Choose a dictionary for recoding'],
            'view.recodes.used': [null, 'Used in recode rule sets from other dictionaries'],
            'view.recodes.recodeTo': [null, 'Recoding to'],
            'view.recodes.button.cancel': [null, 'cancel'],
            'view.recodes.button.done': [null, 'done'],
            'view.recodes.button.settings': [null, 'Settings'],
            'view.recodes.button.save': [null, 'save'],
            'view.recodes.recodes.title': [null, 'recode rules'],
            'view.recodes.delete.confirm': [null, 'You are about to delete recode rules set. Are you sure?'],
            'view.recodes.delete.title': [null, 'delete recode'],
            'view.recodes.unmatched': [null, 'Not matched'],
            'view.recodes.reset': [null, 'Reset matching'],
            'view.recodes.unselect': [null, 'Unselect all'],
            'view.recodes.selected': [null, 'Selected %d record.', 'Selected %d records.'],
            'view.recodes.matchselection': [null, 'Matching %d record', 'Matching %d records', 'Matching %d records'],
            'view.recodes.settings.title': [null, 'Recode rule set\'s settings'],
            'view.recodes.settings.alias': [null, 'Alias'],
            'view.recodes.settings.from': [null, 'From field'],
            'view.recodes.settings.to': [null, 'To field'],
            'view.recodes.settings.default.label': [null, 'Default record'],
            'view.recodes.settings.default.off': [null, 'Not choosen'],
            'view.recodes.settings.default.unset': [null, 'Unset'],
            'view.recodes.cell.empty': [null, 'empty'],
            'view.recodes.pin.title': [null, 'to be recoded to default record'],

            'view.sync.page.title': [ null, 'Sync dictionaries with their sources'],
            'view.sync.page.add': [ null, 'Add source'],
            'view.sync.page.sources': [ null, 'All sources'],
            'view.sync.empty': [ null, 'There are no tasks'],
            'view.sync.edit.cron_enabled': [ null, 'Scheduled run'],
            'view.sync.edit.editcron': [ null, 'Edit schedule'],
            'view.sync.edit.on': [ null, 'ON'],
            'view.sync.edit.off': [ null, 'OFF'],
            'view.sync.edit.parameters': [ null, 'Parameters'],
            'view.sync.parameters-url': [ null, 'Link to web-service'],
            'view.sync.parameters-timeout': [ null, 'Timeout'],
            'view.sync.parameters-count': [ null, 'Loop count'],
            'view.sync.parameters-delay': [ null, 'Delay'],
            'view.sync.parameters-force': [ null, 'Force'],
            'view.sync.parameters-target': [ null, 'Target'],
            'view.sync.parameters-driverName': [ null, 'Driver'],
            'view.sync.parameters-jdbcUrl': [ null, 'Connection URL'],
            'view.sync.parameters-jdbcProperties': [ null, 'Connection properties'],
            'view.sync.parameters-username': [ null, 'Login'],
            'view.sync.parameters-password': [ null, 'Password'],
            'view.sync.parameters-tocTableName': [ null, 'Table name'],
            'view.sync.cron_defined': [null, 'Scheduled run'],
            'view.sync.run_at': [ null, 'Runs'],
            'view.sync.last_sync': [ null, 'Last sync'],
            'view.sync.next_sync': [ null, 'next sync'],
            'view.sync.sync_count': [ null, '%d dictionaries of'],
            'view.sync.history': [ null, 'History'],
            'view.sync.show_last_errors': [ null, 'show errors'],
            'view.sync.last_errors': [ null, 'synchronization errors'],
            'view.sync.last_errors_dictionaries': [ null, 'errors in dictionaries'],
            'view.sync.button.run': [ null, 'Run'],
            'view.sync.button.stop': [ null, 'Cancel'],
            'view.sync.button.cancel': [ null, 'Cancel'],
            'view.sync.button.close': [ null, 'Close'],
            'view.sync.button.save': [ null, 'Save'],
            'view.sync.button.delete': [ null, 'delete'],
            'view.sync.delete.title': [ null, 'Delete groups'],
            'view.sync.delete.confirm': [ null, 'Are you sure you want to delete this synchronization source?']

        }

    };

    return en;
});
