import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import MainImage from "../components/MainImage"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="ホーム" />
        <MainImage />

        <div id="about" className="sections">
            <h2 className="title">テレラボとは？</h2>
            <p className="text">
                「テレラボ」はインターネットを通して理科とプログラミングが学べるオンラインの教室です。<br />
            ３つのプランからお子さまに合わせたカタチをお選びいただくことができるため、<br />柔軟な学びを得ることができます。<br />
            一人ひとりによりそった授業内容で、理科・プログラミングの楽しさを知ってもらうこと。<br />それが私たちのミッションです。</p>
        </div>
        <div id="cource" className="sections">
            <h2 className="title">選べる2つのコース</h2>
            <p className="text">
                近日中に他にもコース追加予定！</p>
            <div className="cards">
                <div className="card">
                    <h3 className="card__title">自習室コース</h3>
                    <p className="card__description">
                        オンラインの自習室が使い放題です。<br />
                        他の人とのコミュニケーションも行うことができます。</p>
                    <p className="card__price">0</p>
                    {/* <Link to="modernEnvDev">
                        <div className="button">
                            詳細はこちら</div>
                    </Link> */}
                </div>
                <div className="card">
                    <h3 className="card__title">自習室コース</h3>
                    <p className="card__description">
                        オンラインの自習室が使い放題です。<br />
                        他の人とのコミュニケーションも行うことができます。</p>
                    <p className="card__price">0</p>
                    {/* <Link to="modernEnvDev">
                        <div className="button">
                            詳細はこちら</div>
                    </Link> */}
                </div>
            </div>
        </div>
        <div id="community" className="sections">
            <h2 className="title">開講情報とお申し込みはこちら！</h2>
            <p className="text"></p>

            {/* <h2>まずはテレラボSlackコミュニティに参加しよう！</h2> */}
            {/* <p className="center">コミュニティへの参加は無料！</p> */}
        </div>
        <div id="team" className="sections">
            <h2 className="title">運営会社</h2>
            <p className="text">
                運営会社
            </p>
            <div className="cards">
                <div className="card">
                    <div className="profile">
                        <h3>株式会社インセプタム</h3>
                        <p></p>
                    </div>
                </div>
                <div className="card">
                    <div className="profile">
                        <h3>特定非営利活動法人ニュークリエイター・オルグ
                        </h3>
                        <p></p>
                    </div>
                </div>

                {/* card を連続 */}
            </div>
        </div>

    </Layout>
)

export default IndexPage
