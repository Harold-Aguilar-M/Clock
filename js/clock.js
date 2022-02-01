const d = document;

export default function clock(display) {

    const locales = 'en-US';
    const options = {
        // timeZone: 'UTC',
        // timeZoneName: 'short'
    };

    setInterval(() => {
        let clock = new Date().toLocaleTimeString(locales, options);
        (d.body.contains(d.querySelector(display)))
            ? d.querySelector(display).innerHTML = `${clock}`
            : undefined;
    }, 1000);

}