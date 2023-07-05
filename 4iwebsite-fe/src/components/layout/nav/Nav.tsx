
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation  } from 'react-router-dom';

import CustomButton from "components/common/customButton";

import LanguageSelector from './languageSelector'; 

import Logo from 'assets/icons/logo-full.svg';

import './Nav.scss';

const Nav = () => {
	const { t } = useTranslation('nav');
	const location = useLocation();
	const navigate = useNavigate();

	const isCurrentPage = (pageLink:string) => {
		const pageTree = pageLink.split('/');
		const currentPage = '/' + pageTree[1];
		return (location.pathname === currentPage);
	}

	const pageList = [
		{
			label: t('home'),
			url: '/',
		},
		{
			label: t('aboutUs'),
			url: '/about-us',
			subPages: [{
				label: t('aboutUs'),
				url: '/about-us'
			},
			{
				label: t('projectManagement'),
				url: '/project-management'
			}]
		},
		{
			label: t('solutions'),
			url: '/solutions',
			subPages: [{
				label: t('allSolutions'),
				url: '/all-solutions'
			},
			{
				label: t('softwareDevelopment'),
				url: '/software-development'
			},
			{
				label: t('blockchainDevelopment'),
				url: '/blockchain-development'
			},
			{
				label: t('salesforceCrm'),
				url: '/salesforce-crm'
			},
			{
				label: t('hubspotCrm'),
				url: '/hubspot-crm'
			},
			{
				label: t('tableauInfo'),
				url: '/tableau-info'
			},
			{
				label: t('erpImplmentation'),
				url: '/erp-implmentation'
			}]
		},
		{
			label: t('caseStudies'),
			url: '/case-studies'
		},
		{
			label: t('ourClients'),
			url: '/our-clients'
		},
		{
			label: t('events'),
			url: '/events'
		}
	];

	const changePage = (newUrl:string) => {
		navigate(newUrl);
	}
	
	return (
	<>
		<div className='main-nav'>
			<div className="top-container">
				<div className="logo">
					<img src={Logo} />
				</div>

                <div className="languages">
                    <LanguageSelector />
                </div>
            </div>

            <div className="bottom-container">
				<div className="main-pages-list">
					{pageList.map((page, pageKey) => {
						return (
							<div 
								key={pageKey}
								className={`main-page ${isCurrentPage(page.url) && 'current-page'}`}
								
							>
								<span
									className="main-page-link"
									onClick={() => changePage(page.url)}
								>
									{page.label}
								</span>

								{
									(page.subPages) &&
										<>
											<div className="arrow"></div>
											<div className='sub-pages-list' >
												<div className='sub-pages-list-container' >
													{page.subPages.map((subpage, subKey) => {
														return (
															<div 
																key={subKey}
																className='sub-page'
																onClick={() => changePage(page.url + subpage.url)}>
																<span >
																	{subpage.label}
																</span>
															</div>
														)
													})}
												</div>
											</div>
										</>
								}
							</div>
						)
					})}
				</div>

				<CustomButton
					onClickBtn={() => changePage('/contact-us')}
					btnStyle="custom-3"
				>
					Contact us
				</CustomButton>
			</div>
		</div>
	</>
  );
}

export default Nav;