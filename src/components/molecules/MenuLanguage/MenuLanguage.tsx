import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from 'react-i18next';

const MenuLanguage: FC = () => {
    const { t, i18n } = useTranslation("navbar");
    const [dropdownLang, setDropdownLang] = useState(i18n.language || 'en');

    const languageHandler = (event: SelectChangeEvent) => {
        const newLanguage = event.target.value;
        if (dropdownLang !== newLanguage) {
            setDropdownLang(newLanguage);
            i18n.changeLanguage(newLanguage);
        }
    };

    return (
        <FormControl sx={{ minWidth: 120, boxShadow: "none" }}>
            <Select
                color="secondary"
                variant="standard"
                disableUnderline
                value={dropdownLang}
                onChange={languageHandler}>
                <MenuItem value="en">{t('menuLanguage.options.english')}</MenuItem>
                <MenuItem value="es">{t('menuLanguage.options.spanish')}</MenuItem>
            </Select>
        </FormControl >
    )
}

export default MenuLanguage