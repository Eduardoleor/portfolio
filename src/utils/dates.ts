const currentDayName = (lng?: string) => {
    const dateObj = new Date();
    const weekday = dateObj.toLocaleString(lng || 'en', { weekday: 'long' });
    return weekday;
};

export { currentDayName };