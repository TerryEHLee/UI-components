import { Drawer } from '@mui/material';
import { useEffect, useState } from 'react';

/**
 *
 * @param {(value: boolean) => {}} onToggleHeader
 * @returns {JSX.Element}
 * @constructor
 */
export function LeftMenu({ onToggleHeader }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleHeader = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		onToggleHeader(isOpen);
	}, [isOpen, onToggleHeader]);

	return (
		<Drawer variant="permanent">
			<header className={isOpen ? 'header open' : 'header'}>
				<h1>
					<a href="../home/layout.html">
						<span className="blind">Hicare</span>
					</a>
				</h1>
				<button type="button" className="btn btn-all" onClick={toggleHeader}>
					<i className="icon icon--menu"></i>
					<span className="blind">Full Menu</span>
				</button>
				<nav className="gnb">
					<ul className="depth01">
						<li className="menu-home">
							<a href="#">
								<i className="icon icon--home"></i>
								<div className="menu-txt">
									<span>Dashboard</span>
								</div>
							</a>
						</li>
						<li className="menu-patient on">
							<a href="#">
								<i className="icon icon--patient"></i>
								<div className="menu-txt">
									<span>Patient Profile</span>
								</div>
							</a>
						</li>
						<li className="menu-service">
							<a href="#">
								<i className="icon icon--service"></i>
								<div className="menu-txt">
									<span>Service</span>
									<span>Candidates</span>
								</div>
							</a>
						</li>
						<li className="menu-rpm">
							<a href="#">
								<i className="icon icon--rpm"></i>
								<div className="menu-txt">
									<span>RPM</span>
									<span>Enfollments</span>
								</div>
							</a>
						</li>
						<li className="menu-claim">
							<a href="#">
								<i className="icon icon--claim"></i>
								<div className="menu-txt">
									<span>Claims</span>
								</div>
							</a>
						</li>
						<li className="menu-report">
							<a href="#">
								<i className="icon icon--report"></i>
								<div className="menu-txt">
									<span>Reports</span>
								</div>
							</a>
							<ul className="depth02">
								<li>
									<a href="#">
										<i className="icon icon--reports-month"></i>
										<div className="menu-txt">
											<span>Monthly RPM</span>
											<span>Observation</span>
											<span>Reports</span>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="icon icon--reports-down"></i>
										<div className="menu-txt">
											<span>RPM Patient</span>
											<span>Documents</span>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="icon icon--reports-99454"></i>
										<div className="menu-txt">
											<span>99454 Report</span>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="icon icon--reports-claim"></i>
										<div className="menu-txt">
											<span>Claim Status</span>
											<span>Summary for the</span>
											<span>momth</span>
										</div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<div className="util">
					<button type="button" className="btn">
						<i className="icon icon--express"></i>
						<span className="icon-desc">Express Check-in</span>
					</button>
					<button type="button" className="btn">
						<i className="icon icon--setting"></i>
						<span className="icon-desc">Practice Settings</span>
					</button>
					<button type="button" className="btn">
						<i className="icon icon--help"></i>
						<span className="icon-desc">Help</span>
					</button>
				</div>
			</header>
		</Drawer>
	);
}