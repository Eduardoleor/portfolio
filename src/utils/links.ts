const github = 'https://github.com/Eduardoleor';
const email = 'eduardo.leal.or@gmail.com';
const mailtoEmail = `mailto:${email}`;
const twitter = 'https://twitter.com/eduardoleor';
const instagram = 'https://instagram.com/eduardoleor';
const linkedin = 'https://www.linkedin.com/in/eduardoleor/';

const onOpenUrl = (url: string) => {
    const win = window.open(url, '_blank');
    if (win != null) {
        win.focus();
    }
};

export {
    github,
    email,
    mailtoEmail,
    twitter,
    instagram,
    linkedin,
    onOpenUrl,
};