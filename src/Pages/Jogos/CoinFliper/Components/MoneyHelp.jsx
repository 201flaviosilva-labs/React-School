import React, { useState, useEffect } from 'react';
import Banner from 'react-js-banner';

export default function MoneyHelp({ setMoney }) {
	const [numHelps, setNumHelps] = useState(3);

	const [isShowBanner, setIsShowBanner] = useState(false);
	useEffect(() => { setTimeout(() => setIsShowBanner(false), 4000) }, [isShowBanner]);
	const [BannerMensage, setBannerMensage] = useState("Something");

	function giveHelp() {
		if (numHelps) {
			setNumHelps(numHelps - 1);
			setMoney(c => c + 5);
			setBannerMensage("You receved 5 of money");
		} else {
			setBannerMensage("You don't have any more helps");
		}
		setIsShowBanner(true);
	}

	return (
		<>
			<Banner
				showBanner={isShowBanner}
				title={BannerMensage} />
			<button onClick={giveHelp}>Helps: {numHelps}</button>
		</>
	)
}
