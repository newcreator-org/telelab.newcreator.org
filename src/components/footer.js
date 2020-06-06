import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainLogo from "../components/MainLogo"

const Footer = ({ siteTitle }) => (
    <footer>
        <div className="footerLogo">
            <Link to="/">
                <MainLogo />
            </Link>
        </div>
        <div className="footerLinks">
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
            <span>&copy; {new Date().getFullYear()} テレラボ</span>
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
