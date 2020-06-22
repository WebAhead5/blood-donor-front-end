// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
export function isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month === 0 || month > 12)
        return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
}

// Validates that the input string is a valid human pulse between 30 and 250
export function isValidPulse(pulseString) {
    // First check if the input is a number 
    if (isNaN(pulseString))
        return false;

    if (pulseString < 30 || pulseString > 250)
        return false;

    return true;
}

// Validates that the input string is a valid human pulse between 30 and 250
export function isValidPressure(pressureString) {
    // First check if the input is a has one '/'  
    const values = pressureString.split('/');
    if (values === undefined || values.length !== 2)
        return false;

    const topNumber = values[0];
    const bottomNumber = values[1];

    if(isNaN(topNumber) || isNaN(bottomNumber))
        return false;

    if (bottomNumber < 40 || bottomNumber > 100)
        return false;

    if (topNumber < 70 || topNumber > 190)
        return false;

    return true;
}

// Validates that the input string is a valid hemoglobin value
//The normal range for hemoglobin is: 
//For men, 13.5 to 17.5 grams per deciliter. 
//For women, 12.0 to 15.5 grams per deciliter

export function isValidHemoglobin(hemoglobinString) {
    // First check if the input is a number 
    if (isNaN(hemoglobinString))
        return false;

    if (hemoglobinString < 12 || hemoglobinString > 17.5)
        return false;

    return true;
}