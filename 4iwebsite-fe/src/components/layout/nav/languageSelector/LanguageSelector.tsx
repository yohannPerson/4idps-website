import { useTranslation } from "react-i18next";

import "./LanguageSelector.scss";

const listLanguages = [
	{
		label: "EN",
		value: "en"
	},
	{
		label: "DE",
		value: "de"
	},
	{
		label: "FR",
		value: "fr"
	},
	{
		label: "中文",
		value: "zh"
	},
	{
		label: "日本語",
		value: "jp"
	}
]

const LanguageSelector = () => {
	const { i18n } = useTranslation();
	const currentLanguage = i18n.language;

	function handleChangeLanguage(newLanguage: string) {
		i18n.changeLanguage(newLanguage);
	}

	const isCurrentLanguage = (lang: string) => {
		return (currentLanguage === lang)
	}

	return (
		<div className="list-languages">
			{listLanguages.map((item, key) => {
				return (
					<>
						{!isCurrentLanguage(item.value) &&
							<a 
								key={key}
								className="language-item"
								onClick={() => handleChangeLanguage(item.value)}
							>
								{item.label}
							</a>
						}
					</>
				)
			})}
		</div>
	);
}

export default LanguageSelector;