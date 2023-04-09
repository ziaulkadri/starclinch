import { isNotNullUndefinedOrEmpty } from './helper';

const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';
const VALIDATOR_TYPE_PASSWORD = 'PASSWORD';
const VALIDATOR_TYPE_MATCH = 'MATCH';
const VALIDATOR_TYPE_EMPTYORMORETHAN = 'EMPTYORMORETHAN';
const VALIDATOR_TYPE_EMAILOREMPTY = 'EMAILOREMPTY';
const VALIDATOR_TYPE_NUMERIC = 'NUMERIC';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_NUMERIC = () => ({
	type: VALIDATOR_TYPE_NUMERIC,
});

export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val) => ({
	type: VALIDATOR_TYPE_MINLENGTH,
	val,
});
export const VALIDATOR_MAXLENGTH = (val) => ({
	type: VALIDATOR_TYPE_MAXLENGTH,
	val,
});
export const VALIDATOR_MIN = (val) => ({ type: VALIDATOR_TYPE_MIN, val });
export const VALIDATOR_MAX = (val) => ({ type: VALIDATOR_TYPE_MAX, val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_PASSWORD = () => ({ type: VALIDATOR_TYPE_PASSWORD });
export const VALIDATOR_MATCH = (val) => ({
	type: VALIDATOR_TYPE_MATCH,
	val,
});
export const VALIDATOR_EMAILOREMPTY = (val) => ({
	type: VALIDATOR_TYPE_EMAILOREMPTY,
	val,
});
export const VALIDATOR_EMPTYORMORETHAN = (val) => ({
	type: VALIDATOR_TYPE_EMPTYORMORETHAN,
	val,
});

export const validate = (value, validators) => {
	let isValid = true;
	for (const validator of validators) {
		if (validator.type === VALIDATOR_TYPE_REQUIRE) {
			isValid = isValid && isNotNullUndefinedOrEmpty(value);
		}

		if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
			isValid =
				isValid &&
				isNotNullUndefinedOrEmpty(value) &&
				value.trim().length >= validator.val;
		}
		if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
			isValid =
				isValid &&
				isNotNullUndefinedOrEmpty(value) &&
				value.trim().length <= validator.val;
		}
		if (validator.type === VALIDATOR_TYPE_MIN) {
			isValid = isValid && +value >= validator.val;
		}
		if (validator.type === VALIDATOR_TYPE_MAX) {
			isValid = isValid && +value <= validator.val;
		}
		if (validator.type === VALIDATOR_TYPE_MATCH) {
			isValid = isValid && value === validator.val;
		}
		if (validator.type === VALIDATOR_TYPE_EMAIL) {
			isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
		}
		if (validator.type === VALIDATOR_TYPE_PASSWORD) {
			isValid =
				isValid &&
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+-])[A-Za-z\d@$!%*?&+-]{8,}$/.test(
					value
				);
		}
		if (validator.type === VALIDATOR_TYPE_EMPTYORMORETHAN) {
			isValid = isValid && /^(?:(?:[1-9][0-9]{3,10})|)+$/.test(value);
		}
		if (validator.type === VALIDATOR_TYPE_NUMERIC) {
			isValid = isValid && value > 0;
		}
		if (validator.type === VALIDATOR_TYPE_EMAILOREMPTY) {
			isValid =
				isValid &&
				(!isNotNullUndefinedOrEmpty(value) ||
					/^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
						value
					));
		}
	}
	return isValid;
};
