import React, { Component } from "react";
import { Mobile, PC } from "../layout/MediaQuery/MediaQuery.tsx"

import "./more.css"

class More extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
          <>
          {/* mobile */}
            <div className="More_Mobile_container">
                <Mobile>
                  {/* git 링크&이미지 */}
                  <div className="m_gitImgWrap">
                    <div className="m_gitImg">
                      <img alt="git" src="../img/and_git_mobile.svg"/>
                    </div>
                    <div className="m_gitLink">
                      <a target="_blank" href="https://github.com/pota0w0" className="blink">https://github.com/pota0w0</a>
                    </div>
                  </div>
                   {/* hate 이미지 */}
                  <div className="m_hateImgWrap">
                    <div className="m_hateImg">
                      <img alt="hate" src="../img/and_hate_mobile.svg"/>
                    </div>
                  </div>
                  {/* mbti 이미지 */}
                  <div className="m_mbtiImgWrap">
                    <div className="m_mbtiImg">
                      <img alt="mbti" src="../img/and_mbti_mobile.svg"/>
                    </div>
                  </div>
                  {/* pota 이미지 */}
                  <div className="m_potaImgWrap">
                    <div className="m_potaImg">
                      <img alt="pota" src="../img/and_pota_mobile.svg"/>
                    </div>
                  </div>
                </Mobile>
            </div>

            {/* pc */}
            <div className="More_Pc_container">
                <PC>
                  {/* mbti 이미지 */}
                  <div className="mbtiImgWrap">
                    <div className="mbtiImg">
                      <img alt="mbti" src="../img/and_mbti.svg"/>
                    </div>
                  </div>
                  {/* git 링크&이미지 */}
                  <div className="gitImgWrap">
                    <div className="gitImg">
                      <img alt="git" src="../img/and_git.svg"/>
                    </div>
                    <div className="gitLink">
                      <a target="_blank" href="https://github.com/pota0w0">https://github.com/pota0w0</a>
                    </div>
                  </div>
                  {/* hate 이미지 */}
                  <div className="hateImgWrap">
                    <div className="hateImg">
                      <img alt="hate" src="../img/and_hate.svg"/>
                    </div>
                  </div>
                  {/* pota 이미지 */}
                  <div className="potaImgWrap">
                    <div className="potaImg">
                      <img alt="pota" src="../img/and_pota.png"/>
                    </div>
                  </div>
                    
                </PC>
            </div>
          </>
        )
    }
  }
  
  
export default More
