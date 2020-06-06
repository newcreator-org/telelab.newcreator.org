import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainLogo from "../components/MainLogo"

const Footer = ({ siteTitle }) => (
    <footer>
        <div className="footer__logo">
            <Link to="/">
                <MainLogo />
            </Link>
        </div>
        <div className="footer__links">
            <ul>
                <li>
                    <Link to="tos">利用規約</Link>
                </li>
                <li>
                    <Link to="privacy">プライバシーポリシー</Link>
                </li>
            </ul>
        </div>
        <div className="copy">
            <span>&copy; {new Date().getFullYear()} テレラボ <small>by Inceptum & newCreator.org</small></span>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
