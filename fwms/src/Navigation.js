import './Navigation.css';
function Navigation() {
    return (
        <div className="Navigation">
            <div className="Navigation__logo">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.4363 31.1625C35.2314 29.0026 36.48 26.4422 37.0763 23.6977C37.6726 20.9533 37.5991 18.1056 36.8621 15.3955C36.1251 12.6855 34.7462 10.1928 32.8421 8.12836C30.9379 6.06392 28.5646 4.48846 25.9228 3.53524C23.2811 2.58203 20.4486 2.27911 17.665 2.65211C14.8813 3.02511 12.2285 4.06306 9.9309 5.67814C7.63327 7.29323 5.75844 9.43794 4.46499 11.9309C3.17155 14.4238 2.49755 17.1915 2.50001 20C2.50095 24.0827 3.93969 28.0347 6.56376 31.1625L6.53876 31.1838C6.62626 31.2888 6.72626 31.3788 6.81626 31.4825C6.92876 31.6113 7.05001 31.7325 7.16626 31.8575C7.51626 32.2375 7.87626 32.6025 8.25376 32.945C8.36876 33.05 8.48751 33.1475 8.60376 33.2475C9.00376 33.5925 9.41501 33.92 9.84126 34.225C9.89626 34.2625 9.94626 34.3113 10.0013 34.35V34.335C12.9289 36.3952 16.4214 37.5009 20.0013 37.5009C23.5811 37.5009 27.0736 36.3952 30.0013 34.335V34.35C30.0563 34.3113 30.105 34.2625 30.1613 34.225C30.5863 33.9188 30.9988 33.5925 31.3988 33.2475C31.515 33.1475 31.6338 33.0488 31.7488 32.945C32.1263 32.6013 32.4863 32.2375 32.8363 31.8575C32.9525 31.7325 33.0725 31.6113 33.1863 31.4825C33.275 31.3788 33.3763 31.2888 33.4638 31.1825L33.4363 31.1625ZM20 10C21.1125 10 22.2001 10.3299 23.1251 10.948C24.0501 11.5661 24.7711 12.4446 25.1968 13.4724C25.6226 14.5003 25.734 15.6313 25.5169 16.7224C25.2999 17.8135 24.7642 18.8158 23.9775 19.6025C23.1908 20.3892 22.1885 20.9249 21.0974 21.1419C20.0062 21.359 18.8752 21.2476 17.8474 20.8218C16.8196 20.3961 15.9411 19.6751 15.323 18.7501C14.7049 17.8251 14.375 16.7375 14.375 15.625C14.375 14.1332 14.9676 12.7024 16.0225 11.6475C17.0774 10.5926 18.5082 10 20 10ZM10.0088 31.1625C10.0304 29.5212 10.6974 27.9545 11.8655 26.8012C13.0335 25.6479 14.6086 25.0009 16.25 25H23.75C25.3914 25.0009 26.9665 25.6479 28.1346 26.8012C29.3026 27.9545 29.9696 29.5212 29.9913 31.1625C27.2498 33.6329 23.6903 35.0001 20 35.0001C16.3097 35.0001 12.7502 33.6329 10.0088 31.1625Z" fill="#813EF9" />
                </svg>

                <label>Admin</label>
            </div>
            <div className="Navigation__menu">
                <ul>
                    <li><a href="/">Donar Details</a></li>
                    <li><a href="AgentDetails">Agents Details</a></li>
                    <li><a href="Request">Requests</a></li>
                    <li><a href="Donation">Donations</a></li>
                </ul>
            </div>
        </div>

    );

}

export default Navigation;