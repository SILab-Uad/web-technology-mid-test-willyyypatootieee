// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    const includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const includeLowercase = "abcdefghijklmnopqrstuvwxyz";
    const includeNumbers = "0123456789";
    const includeSpecialChars = "!@#$%^&*()";
    
    let charSet = "";

    // Build the character set based on selected options
    if (options.includeUppercase) charSet += includeUppercase;
    if (options.includeLowercase) charSet += includeLowercase;
    if (options.includeNumbers) charSet += includeNumbers;
    if (options.includeSpecialChars) charSet += includeSpecialChars;

    if (charSet === "") {
        return "Please select at least one option.";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return password;
};
