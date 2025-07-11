'use client'

import Image from 'next/image'
import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import featureImg1 from '../../../public/images/features-details-image/feature1.png'
import featureImg2 from '../../../public/images/features-details-image/feature2.png'

const FeatureDetailsContent = () => {
  return (
    <>
      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <Image src={featureImg1} alt="image" width={800} height={600} />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Information Retrieval</h3>
                <p>
                  Build integration aute irure design in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat design proident.
                </p>

                <ul className="features-details-list">
                  <li>Life time supports</li>
                  <li>Exclusive design</li>
                  <li>Solve your problem with us</li>
                  <li>We Provide Awesome Services</li>
                  <li>Your business deserves best Software</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <p>
                  Took a galley of type and scrambled it to make a type specimen
                  book. survived not only five centuries, but also the leap into
                  electronic remaining. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry’s standard dummy text ever since the 1500s, when an
                  unknown printer when an unknown.
                </p>

                <div className="features-details-accordion">
                  <Accordion preExpanded={['a']}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Which material types can you work with?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Is Smart Lock required for instant apps?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Can I have multiple activities in a single feature?
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="col-lg-6 features-details-image">
              <Image src={featureImg2} alt="image" width={800} height={600} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureDetailsContent
