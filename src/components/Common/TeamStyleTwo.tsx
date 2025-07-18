'use client'

import Image from 'next/image'
import React from 'react'
import * as Icon from 'react-feather'

import teamImg1 from '../../../../../public/images/team-image/team1.jpg'
import teamImg2 from '../../../../../public/images/team-image/team2.jpg'
import teamImg3 from '../../../../../public/images/team-image/team3.jpg'
import teamImg4 from '../../../../../public/images/team-image/team4.jpg'

const TeamStyleTwo = () => {
  return (
    <>
      <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Awesome Team</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg1} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Buttler</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        title="Facebook"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        title="Twitter"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkedin"
                        title="Linkedin"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.gitlab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Gitlab"
                        title="Gitlab"
                      >
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg2} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Alex Maxwel</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        title="Facebook"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        title="Twitter"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkedin"
                        title="Linkedin"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.gitlab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Gitlab"
                        title="Gitlab"
                      >
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg3} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Janny Cotller</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        title="Facebook"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        title="Twitter"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkedin"
                        title="Linkedin"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.gitlab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Gitlab"
                        title="Gitlab"
                      >
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg4} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Jason Statham</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        title="Facebook"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        title="Twitter"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkedin"
                        title="Linkedin"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.gitlab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Gitlab"
                        title="Gitlab"
                      >
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamStyleTwo
