import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainImage from "../components/MainImage"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="ホーム" />
        <MainImage />
        <div id="about" className="topPageContents">
            <h2>h2</h2>
            <p className="center">
                p
      </p>
            <div className="card">
                <h3>h3</h3>
                <div className="seeMoreWrap">
                    <input type="checkbox" id="seeMoreTriggerAbout" className="seeMoreTrigger" />
                    <label htmlFor="seeMoreTriggerAbout" className="seeMoreButton"></label>
                    <div className="seeMoreContent">
                        <p>p</p>

                    </div>
                </div>

            </div>
        </div>
        <div id="cource" className="topPageContents">
            <h2>選べる2つのコース</h2>
            <p className="center">
                近日中に他にもコース追加予定！
      </p>
            <div className="cards">
                <div className="card">
                    <h3>h3</h3>
                    <span>span</span>
                    <p>
                        p </p>
                    <Link to="modernEnvDev">
                        <div className="button">
                            詳細はこちら
            </div>
                    </Link>
                </div>

            </div>


        </div>
        <div id="community" className="topPageContents">
            <h2>Slackコミュニティに参加しよう！</h2>
            <p className="center">コミュニティへの参加は無料！</p>

        </div>
        <div id="team" className="topPageContents">
            <h2>運営チーム</h2>
            <p className="center">
                運営スタッフのご紹介
      </p>
            <div className="cards">
                <div className="card">
                    <div className="profile">
                        <h3>h3</h3>
                        <p>p</p>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
)

export default IndexPage
