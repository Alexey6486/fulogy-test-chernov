export const fieldRequired = (value: string) => {
    if (value) {
        return undefined;
    }
    return "Field is required";
};
export const phoneFormat = (value: string) => {
    if (value && value.match(/^8\d{10}$/)) {
        return undefined;
    } else if (value && !value.match(/^8\d{10}$/)) {
        return "Enter 8 then 10 numbers 1234567890";
    }
    return undefined;
};
export const emailFormat = (value: string) => {
    if (value && value.match(/^[a-zA-Z0-9_.+-]+@[a-z]+\.(ru|com)$/)) {
        return undefined;
    } else if (value && !value.match(/^[a-zA-Z0-9_.+-]+@[a-z]+\.(ru|com)$/)) {
        return "Email format myemail@mail.ru/com";
    }
    return undefined;
};
