const milisUtcToVnTime = 7 * 3600 * 1000;

export const GetCurrentDate = () => {
    const utc = new Date();
    const vtc = new Date(utc.getTime() + milisUtcToVnTime);
    return vtc;
}

export const GetTimeNow = () => {
    const time = GetCurrentDate();
    const now = time.setMinutes(time.getMinutes());
    return now;
}

export const GetExpiredOtp = () => {
    const now = GetTimeNow();
    const expired = new Date(now + 5 * 60 * 1000); // OTP hết hạn sau 5 phút
    return expired;
}

export const RandomOTP = () => {
    return Math.floor(100000 + Math.random() * 900000); // 6 chữ số
}
                    