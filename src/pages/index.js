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
            <h2>はじめまして、</h2>
            <p className="center">
                はじめまして、テレラボです。</p>
            <div className="card">
                <h3>初心者でも楽しく、そして深くプログラミングを学べる教室です。</h3>
                <div className="seeMoreWrap">
                    <input type="checkbox" id="seeMoreTriggerAbout" className="seeMoreTrigger" />
                    <label htmlFor="seeMoreTriggerAbout" className="seeMoreButton"></label>
                    <div className="seeMoreContent">
                        <p>テレラボは「プログラミングをはじめてみたい方」や「プログラミング活動の幅を拡げていきたい方」などのプログラミング学習に関する「はじめの一歩」をサポートいたします。</p>
                    </div>
                </div>

            </div>
        </div>
        <div id="cource" className="topPageContents">
            <h2>選べる2つのコース</h2>
            <p className="center">
                近日中に他にもコース追加予定！</p>
            <div className="cards">
                <div className="card">
                    <h3>無料プラン</h3>
                    <span>全1回　￥6,000</span>
                    <p>
                        開発を安全かつ効率的に進めることができる環境を学ぶコースです。
          </p>
                    <Link to="modernEnvDev">
                        <div className="button">
                            詳細はこちら</div>
                    </Link>
                </div>
                <div className="card">
                    <h3>無料プラン</h3>
                    <span>全1回　￥6,000</span>
                    <p>
                        開発を安全かつ効率的に進めることができる環境を学ぶコースです。
          </p>
                    <Link to="modernEnvDev">
                        <div className="button">
                            詳細はこちら</div>
                    </Link>
                </div>
                <div className="card">
                    <h3>無料プラン</h3>
                    <span>全1回　￥6,000</span>
                    <p>
                        開発を安全かつ効率的に進めることができる環境を学ぶコースです。
          </p>
                    <Link to="modernEnvDev">
                        <div className="button">
                            詳細はこちら</div>
                    </Link>
                </div>
            </div>


        </div>
        <div id="community" className="topPageContents">
            <h2>開講情報とお申し込みはこちら！</h2>
            <div className="center">

            </div>
            {/* <h2>まずはテレラボSlackコミュニティに参加しよう！</h2> */}
            {/* <p className="center">コミュニティへの参加は無料！</p> */}
        </div>
        <div id="team" className="topPageContents">
            <h2>運営チーム</h2>
            <p className="center">
                テレラボの運営スタッフのご紹介
      </p>
            <div className="cards">
                <div className="card">
                    <div className="profile">
                        <h3>yoshi</h3>
                        <p></p>
                    </div>
                </div>
                {/* card を連続 */}
            </div>
        </div>

    </Layout>
)

export default IndexPage
