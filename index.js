function GetMidnightDate(dateObj) {

	let dateObjCopy = new Date( dateObj.valueOf() );

	dateObjCopy.setHours(0,0,0,0);

	return dateObjCopy;

}

module.exports = GetMidnightDate;
