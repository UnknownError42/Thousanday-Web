import { combineReducers } from 'redux';
import account from './reducers/account';
import home from './reducers/home';
import pet from './reducers/pet';
import user from './reducers/user';
import moment from './reducers/moment';
import explore from './reducers/explore';
import watch from './reducers/watch';
import request from './reducers/request';
import setting from './reducers/setting';
import add from './reducers/add';
import edit from './reducers/edit';

export default combineReducers({
	account,
	home,
	moment,
	pet,
	user,
	explore,
	watch,
	request,
	setting,
	add,
	edit
});